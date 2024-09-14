import styles from './MultipleInput.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { selectProjects, addTicket, addSubTicket } from "@/services/ProjectsReducer";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'next/navigation';

const MultipleInput = ({project, setNewValue, newValue, parent, setParent, placeholder, category}: any) => {

  const params = useParams();

  const dispatch = useDispatch();

  const handleCategory = (category: string) => {
    if (category==='participants') setParent({...parent, participants: [...parent.participants, newValue]}) 
    if (category==='tickets') setParent({...parent, subTickets: [...parent.subTickets, {id: parent.subTickets.length+1,title: newValue, participants: []}]})
    // if (category==='tickets'){ dispatch(addSubTicket({project: project.name, ticketId: Number(params.ticketId), subticket: {id: parent.subTickets.length+1,title: newValue, participant: []}})); console.log({project: project.name, ticketId: Number(params.ticketId), subticket: {id: parent.subTickets.length+1,title: newValue, participant: []}})}
    if (category==='checklist') {
      console.log();
      setParent({...parent, checklist: [...parent.checklist, {subtask: newValue, id: parent.checklist.length+1}]});
    }

    setNewValue('')
  }

  return (
    <>
      <div className={styles.addParticipant}>
        <input onChange={(ev) => setNewValue(ev.target.value)}
        placeholder={placeholder}
        className={styles.inputParticipant} 
        type="text" value={newValue} /> 
        <button onClick={() => handleCategory(category)} 
        className={styles.miniPlus}>+</button>
      </div>  
    </> 
  )
} 

export default MultipleInput