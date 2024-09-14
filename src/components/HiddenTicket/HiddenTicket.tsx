import styles from './HiddenTicket.module.css';
import { Nunito } from "next/font/google";
import MultipleInput from '../MultipleInput/MultipleInput';
import { useEffect, useState } from 'react';
import Combobox from '../ComboBox/ComboBox';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
 
const nunito = Nunito({ subsets: ["latin"] });

const HiddenTicket = ({showTicket, setShowTicket, projects}: any) => {

  const [project, setProject] = useState(projects[0]);
  const [ticket, setTicket] = useState({});
  const [newSubticket, setNewSubticket] = useState([]);
  const [newParticipants, setNewParticipants] = useState([]);

  useEffect(() => {
    console.log(project)
  }, [project])

  const projectsOptions = projects.map((p: any) => p.name);

  const removeParticipant = (part : string) => {
    const filtered = project.participants.filter((p: string) => p !== part)
    setProject({...project, participants: filtered})
  }
  
  const handleCombobox = (n: string) => {
    const projectsFilter = projects.filter((p: any, i: number) => p.name===n);
    setProject(projectsFilter[0]);
  }

  return (
    <div className={showTicket ? styles.container : styles.none}>

        <div className={styles.content}>
            <h2 className={styles.heading}>Create new ticket</h2>
            <label className={styles.label}>Ticket name</label>
            <Combobox options={projectsOptions} onSelect={handleCombobox} defValue={project.name} />
            <label className={styles.label}>Project Name</label>
              <input
                onChange={(ev) => setProject({...project, name: ev.target.value})}
                placeholder="Name"
                className={styles.input}
                type="text"
              />
            <label className={styles.label}>{`Tickets' participans`}</label>
            <MultipleInput setNewValue={setNewParticipants} newValue={newParticipants} parent={project} setParent={setProject} placeholder={`Participant`}  category='participants' />

            <div className={styles.participants}>
                {project.participants.length > 0 ? <label className={styles.labelParticipant}>Participants:</label> : <></>}
                {project.participants ? project.participants.map((p: string, i: number) => 
                  <div onClick={() => removeParticipant(p)} key={i} className={styles.participant}>
                    <p><FontAwesomeIcon className={styles.leftIco} icon={faUser} /> {p} <FontAwesomeIcon  className={styles.rightIco} icon={faXmark} /></p> 
                  </div>
                ) : <></>}
              </div> 

            <label className={styles.label}>Subtickets</label>
            <MultipleInput setNewValue={setNewSubticket} newValue={newSubticket} parent={project} setParent={setProject} placeholder={`Ticket's name`}  category='tickets' />

            {/* <div className={styles.participants}>
                {project.participants.length > 0 ? <label className={styles.labelParticipant}>Subtickets:</label> : <></>}
                {project.participants ? project.tickes.map((p: string, i: number) => 
                  <div onClick={() => removeParticipant(p)} key={i} className={styles.participant}>
                    <p><FontAwesomeIcon className={styles.leftIco} icon={faUser} /> {p} <FontAwesomeIcon  className={styles.rightIco} icon={faXmark} /></p> 
                  </div>
                ) : <></>}
              </div> */}
            

        </div>

        <div className={styles.btns}>
                <label htmlFor="file" className={styles.upload}>
                  Create a ticket
                </label>

                {/* <button onClick={handleImageChange} className={`${nunito.className} ${styles.own} ${styles.btn}`}>Upload your own image</button> */}
            </div> 

    </div>
  )
}

export default HiddenTicket