import SideBarLayout from "@/components/SideBarLayout/SideBarLayout";
import styles from './CreateTaskLogic.module.css'
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { Nunito } from "next/font/google";
import CreateBtn from "@/components/CreateBtn/CreateBtn";
import { faLeftLong as back } from "@fortawesome/free-solid-svg-icons";
import UploadImage from "@/components/UploadImage/NewUploadImage.tsx";
import CheckBox from "@/components/CheckBox/CheckBox";
import ComboBox from "@/components/ComboBox/ComboBox";
import { projects } from "../../../lib/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import SimpleEditor from "@/components/SimpleEditor/SimpleEditor";
import ExportedImage from "next-image-export-optimizer";
import MultipleInput from "@/components/MultipleInput/MultipleInput";
import { selectProjects, addProject, addTask } from "@/services/ProjectsReducer";
import { useSelector, useDispatch } from "react-redux";
import ComboCheckboxPlain from "../ComboCheckboxPlain/ComboCheckboxPlain";

const CreateTaskLogic = () => {  


  const radios = ['low', 'medium', 'high']

  const projects = useSelector(selectProjects).projects;
  const dispatch = useDispatch();

  const projectNames = projects.map((p: any) => p.name)

  const [isPublic, setIsPublic] = useState(false);
  const [img, setImg] = useState("");
  const [task, setTask] = useState<any>({id: projects.length, participants: [], checklist: [], ticket: projects[0].tickets[0], subticket: projects[0].tickets[0].subTickets[0]}); 
  const [project, setProject] = useState(projectNames[0]);
  const [newParticipant, setNewParticipant] = useState('');
  const [checkList, setCheckList] = useState<any>([])
  const [newCheckbox, setNewCheckbox] = useState('')
  const [participantsStorage, setParticipantsStorage] = useState<any>([])
  const [checklistStorage, setChecklistStorage] = useState<any>([])

  const setTaskAndParticipantsSession = (p: any) => {
    setTask(p);
    sessionStorage.setItem('participants', p.participants);
  }

  const setTaskAndChecklistSession = (p: any) => {
    setTask(p);
    sessionStorage.setItem('checklist', p.checklist);
    setCheckList([...checkList, p.checklist]);
  }

  const router = useRouter(); 

  const postTask = async () => {
    dispatch(addTask({project: project, task: task}));

    sessionStorage.removeItem('name'); 
    sessionStorage.removeItem('desc');
    sessionStorage.removeItem('participants'); 
    sessionStorage.removeItem('checklist');
    sessionStorage.removeItem('projectName');
    sessionStorage.removeItem('importance');

    router.push("/tasks");
  };

  useEffect(() => {
    console.log(projects)
  }, [projects])


  const handleProjectSelect = (p: string) => {
    setProject(p)
    // sessionStorage.setItem('projectName', p);
  };

  const removeParticipant = (part : string) => {
    const filtered = task.participants.filter((p: string) => p !== part)
    setTask({...task, participants: filtered})
    sessionStorage.setItem('participants', filtered)
  }

  const removeCheckbox = (cb : string) => {
    const filtered = task.checklist.filter((c: string) => c !== cb)
    setTask({...task, checklist: filtered})
    sessionStorage.setItem('checklist', filtered)
  }

  const addParticipant = () => {
    setTask({...task, participants: [...task.participants, newParticipant]})
  }

  const choosePriority = (p: string) => {
    setTask({...task, importance: p})
    sessionStorage.setItem('importance', p);
  }

  const setTaskAndSessionDesc = (t: any) => {
    setTask(t);
    sessionStorage.setItem('desc', t.desc);
  }

  useEffect(() => {
    console.log(task)

  }, [newParticipant, newCheckbox])

  useEffect(() => {
    if (typeof window !== 'undefined'){
      const participantsStr = sessionStorage.getItem('participants');
      const checklistStr = sessionStorage.getItem('checklist');

      if (participantsStr){
        const participantsArr = participantsStr.split(',');
        setParticipantsStorage(participantsArr);
      }

      if (checklistStr){
        const checklistArr = checklistStr.split(',');
        setChecklistStorage(checklistArr);
      }
    }
  }, [task])

  const handleTicketsSelect = (ticket: string) => {
    const foundTicket = projects.find((p: any) => p.name === project).tickets.find((t: any) => t.title === ticket);

    setTask({...task, ticket: foundTicket, subticket: foundTicket.subTickets[0]});
  };

  useEffect(() => {
    const foundTicket = projects.find((p: any) => p.name === project).tickets[0];

    setTask({...task, ticket: foundTicket, subticket: foundTicket.subTickets[0]})
  }, [project]);

  const handleSubTicketsSelect = (subticket: string) => {
    return 0;  
  };

  return (
    <SideBarLayout> 
      <div className={styles.container}>
        <div className={styles.products}>
          <div className={styles.containerTitle}>
            <h1 className={styles.heading}>Add new task</h1>
            <div className={styles.btns}>
              <CreateBtn
                onClick={() => {router.back();
                  sessionStorage.removeItem('name'); 
                  sessionStorage.removeItem('desc');
                  sessionStorage.removeItem('participants'); 
                  sessionStorage.removeItem('checklist');
                  sessionStorage.removeItem('projectName');
                  sessionStorage.removeItem('importance');}}
                symbol={back} 
                title="Back"
              />
              <CreateBtn onClick={postTask} symbol="+" title="Create" />
            </div>
          </div>
          <div className={styles.form}> 
            <div className={styles.inputs}>
              
              <label className={styles.label}>Task Name</label>
              <input
                onChange={(ev) => {setTask({...task, name: ev.target.value}); sessionStorage.setItem('name', ev.target.value)}}
                placeholder="Name"
                className={styles.input}
                type="text"
                defaultValue={typeof window !== 'undefined' && (sessionStorage.getItem('name') || "") || ""}
              />
              <label className={styles.label}>Task Description</label>
              {/* <textarea 
                className={styles.inputDesc}
                onChange={(ev) => setTask({...task, desc: ev.target.value})}
                placeholder="Description"
                contentEditable="true"
              />  */}
              <SimpleEditor task={task} setTask={setTaskAndSessionDesc} defValue={typeof window !== 'undefined' && (sessionStorage.getItem('desc') || "") || ""} />

              <ComboBox defValue={typeof window !== 'undefined' && (sessionStorage.getItem('projectName') || "") || ""} options={projectNames} onSelect={handleProjectSelect} />
              
              <label className={styles.label}>Task Participants</label>

              <MultipleInput  setNewValue={setNewParticipant} newValue={newParticipant} parent={task} setParent={setTaskAndParticipantsSession} removeItem={removeParticipant} placeholder='participants' category='participants' />
              

              <div className={styles.participants}>
                {participantsStorage.length>0 ? <label className={styles.labelParticipant}>Participants:</label> : <></>}
                {participantsStorage ? participantsStorage.map((p: string, i: number) => 
                  <div onClick={() => removeParticipant(p)} key={i} className={styles.participant}>
                    <p><FontAwesomeIcon className={styles.leftIco} icon={faUser} /> {p} <FontAwesomeIcon  className={styles.rightIco} icon={faXmark} /></p> 
                  </div>
                ) : <></>}
              </div> 


              <label className={styles.label}>Task Checklist</label>
              <MultipleInput setNewValue={setNewCheckbox} newValue={newCheckbox} parent={task} setParent={setTaskAndChecklistSession} removeItem={removeCheckbox} placeholder='checklist' category='checklist' />

 
              <div className={styles.participants}>
                {checklistStorage.length>0 ? <label className={styles.labelParticipant}>Checklist:</label> : <></>}
                {task.checklist && task.checklist.length > 0 ? task.checklist.map((p: any, i: number) => 
                  <div onClick={() => removeCheckbox(p)} key={i} className={styles.participant}>
                   <p> {p.subtask} <FontAwesomeIcon  className={styles.rightIco} icon={faXmark} /></p> 
                 </div>
                ) : <></>}
              </div> 

            </div>
            <div className={styles.imageContainer}>
              <ExportedImage className={styles.img} width={300} height={300} src='/task.jpg' alt='task' />
              
                
                <div className={styles.flexLeft}>
                  <label className={styles.label}>{`Is this task important?`}</label>
                  {task &&
                  <label className={styles.checkboxContainer}>
                    <input checked={task.importance} onChange={() => setTask({...task, importance: !task.importance})} className={styles.customCheckbox} type="checkbox"/>
                    <span className={styles.checkmark}></span>
                  </label>}
                </div>

              

              <label className={styles.label}>Ticket</label> 
              <ComboBox
                defValue={typeof window !== 'undefined' && (sessionStorage.getItem('projectType') || "") || ""}
                options={projects.find((p: any) => p.name === project).tickets.map((t: any) => t.title)}
                onSelect={handleTicketsSelect}
                val = {task.ticket}
              />

              <label className={styles.label}>Subticket</label> 
              <ComboBox
                defValue={typeof window !== 'undefined' && (sessionStorage.getItem('projectType') || "") || ""}
                options={task.ticket.subTickets.map((s:any) => s.title)}
                onSelect={handleSubTicketsSelect}
              />

          

        </div>
            </div>  
          </div>
      </div>
    </SideBarLayout>
  );
}

export default CreateTaskLogic