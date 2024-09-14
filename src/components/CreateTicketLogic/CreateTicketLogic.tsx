import SideBarLayout from "@/components/SideBarLayout/SideBarLayout";
import styles from './CreateTicketLogic.module.css'
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import CreateBtn from "@/components/CreateBtn/CreateBtn";
import { faLeftLong as back } from "@fortawesome/free-solid-svg-icons"
import ExportedImage from "next-image-export-optimizer";
import Combobox from "@/components/ComboBox/ComboBox";
import { selectProjects, addTicket, addTicketParticipant } from "@/services/ProjectsReducer";
import { useSelector, useDispatch } from "react-redux";
import ComboCheckboxPlain from "../ComboCheckboxPlain/ComboCheckboxPlain";

const CreateTicketLogic = () => {

  
  const projects = useSelector(selectProjects).projects;

  
  const projectNames = projects.map((p: any) => p.name)

  const [project, setProject] = useState<any>(projects[0]);
  const [ticket, setTicket] = useState<{ participants: string[], project: string, title: string, subTickets: any, id: number }>({project: projects[0].name, title: '', subTickets: [], participants: [], id: project.tickets.length+1});
  const [modify, setModify] = useState(false);

  const dispatch = useDispatch();


  const router = useRouter();

  const postProject = async () => {
    setProject({...project, tickets: [...project.tickets, ticket]})
    setModify(true)
    dispatch(addTicket({ticket: ticket, project: project.name}))
    console.log(ticket)
    router.push(`/manageTickets/${project.id}`);
  };

  useEffect(() => {
    
    console.log(projects)
    console.log(ticket)

  }, [projects, project])

  const projectsOptions = projects.map((p: any) => p.name);

  const removeParticipant = (part : string) => {
    const filtered = project.participants.filter((p: string) => p !== part)
    setProject({...project, participants: filtered})
  }
  
  const handleCombobox = (n: string) => {
    const projectsFilter = projects.filter((p: any, i: number) => p.name===n);
    setProject(projectsFilter[0]);
    setTicket({...ticket, project: n})
  }

  
  const handleParticipantClick = (p: any) => {
    if (ticket.participants.length===0 || !ticket.participants.includes(p)){
      setTicket({...ticket, participants: [...ticket.participants, p]})
    } else {
      const filtered = ticket.participants.filter((participant: any) => participant !== p);
      setTicket({...ticket, participants: filtered})
    }
  }

  return (
    <SideBarLayout> 
      <div className={styles.container}>
        <div className={styles.products}>
          <div className={styles.containerTitle}>
            <h1 className={styles.heading}>Add new ticket</h1>  
            <div className={styles.btns}>
              <CreateBtn
                onClick={() => router.back()}
                symbol={back} 
                title="Back"
              />
              <CreateBtn onClick={postProject} symbol="+" title="Create" />
            </div>
          </div>
          <div className={styles.form}>
            <div className={styles.inputs}>
              
            <label className={styles.label}>Project name</label>
            <Combobox options={projectsOptions} onSelect={handleCombobox} defValue={project.name} />

            <label className={styles.label}>Ticket name</label>
            <input
              onChange={(ev) => setTicket({...ticket, title: ev.target.value})}
              placeholder="Name"
              className={styles.input}
              type="text"
            />

            <label className={styles.label}>Ticket participants</label>
            <div className={styles.combo}>
              <ComboCheckboxPlain title={`Participants`} options={projects.find((p: any) => p.name === ticket.project).participants} selectedItems={ticket.participants} handleItemClick={(p: any) => handleParticipantClick(p)} />
            </div>

            </div>
            <div className={styles.imageContainer}>
              
              <ExportedImage className={styles.img} width={300} height={300} src='/task.jpg' alt='task' />
            

            </div>
          </div> 
        </div>
      </div>
    </SideBarLayout>
  );
}

export default CreateTicketLogic