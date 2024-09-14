import { Product } from "@/types";
import { useEffect, useState } from "react";
import styles from "./EditTicketLogic.module.css";
import SideBarLayout from "@/components/SideBarLayout/SideBarLayout";
import CreateBtn from "@/components/CreateBtn/CreateBtn";
import { faPencil as pencil } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan as trashCan } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown, faChevronUp, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faLeftLong as back } from "@fortawesome/free-solid-svg-icons";
import DeleteForm from "@/components/DeleteForm/DeleteForm";
import { useRouter } from "next/router";
import ExportedImage from "next-image-export-optimizer";
import { Nunito } from "next/font/google";
import ProductFilters from "@/components/ProductFilters/ProductFilters";
import { title } from "process";
import { selectProjects, addTicket, addTicketParticipant, addSubTicket, addSubTicketParticipant } from "@/services/ProjectsReducer";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "next/navigation";
import Combobox from "../ComboBox/ComboBox";
import Project from "../Project/Project";
import { Console } from "console";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsb } from "@fortawesome/free-brands-svg-icons";
import ComboCheckboxPlain from "../ComboCheckboxPlain/ComboCheckboxPlain2";

const nunito = Nunito({ subsets: ["latin"] }); 
 
const EditTicketLogic = () => {

  const projects = useSelector(selectProjects).projects;
  const params = useParams();
  const dispatch = useDispatch();

  const [tickets, setTickets] = useState([{id: 0, project: 'BAIM', projectId: 0, title: 'Frontend', subtickets: ['Landing page', 'Agile', 'Messenger']}]);
  const [showSubtickets, setShowSubtickets] = useState<any>();
  const [showParticipants, setShowParticipants] = useState<any>();
  const [showSubticketParticipants, setShowSubticketParticipants] = useState<any>();
  const [newParticipant, setNewParticipant] = useState('');
  const [newSubticketParticipant, setNewSubticketParticipant] = useState('');
  const [newSubticket, setNewSubticket] = useState({title: '', participants: []});
  const [delProductId, setDelProductId] = useState(0);
  const [deleteShown, setDeleteShown] = useState(false);
  const [ticket, setTicket] = useState({});

  useEffect(() => {
    params && params.projectId && params.ticketId && setTicket(projects[Number(params.projectId)].tickets.find((t: any) => t.id === Number(params.ticketId)))
  }, [params])

  const handleShowSubtickets = (n: number) => {
    showSubtickets === n ? setShowSubtickets(null) : setShowSubtickets(n);
    console.log(showSubtickets)
  }

  const handleShowParticipants = (n: number) => {
    showParticipants === n ? setShowParticipants(null) : setShowParticipants(n);
    console.log(showParticipants)
  }

  const handleShowSubticketParticipants = (n: number) => {
    showSubticketParticipants === n ? setShowSubticketParticipants(null) : setShowSubticketParticipants(n);
    console.log(showSubticketParticipants)
  }

  const router = useRouter();

  const deleteProduct = async (id: number) => {
    try {
      await fetch(`http://74.242.168.235/api/Product/ById/${id}`, {
        method: "DELETE",
      });
    } catch (error: any) {
      console.error(error);
    }
  };

  const showDelete = (pId: any) => {
    setDelProductId(pId);
    setDeleteShown((prev) => !prev);
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    } else {
      return text; 
    }
  };

  return (
    <SideBarLayout>
      { params && params.projectId && params.ticketId && projects.length > 0 &&  <>
      <div className={`${nunito.className} ${styles.container}`}>
        <div
          className={
            deleteShown ? `${styles.deleteForm}` : `${styles.containerHidden}`
          }
        >
          <DeleteForm
            setDeleteShown={setDeleteShown}
            deleteThis={() => deleteProduct(delProductId)}
          />
        </div>
        <div
          className={
            deleteShown ? styles.containerHidden : styles.containerHeader
          }
        >
          <div className={styles.containerTitle}>
            <div className={styles.iconContainer}>
              <h1 className={styles.heading}>Edit ticket</h1>
              <ExportedImage
                src="/product-delivery-icon.svg"
                alt="Products icon"
                height={40}
                width={40}
              />
            </div>

            <div className={styles.flex}>
              <CreateBtn
                onClick={() => router.back()}
                symbol={back}
                title="Back"
              />
              <CreateBtn
                onClick={() => router.push(`/manageTickets/${params.projectId}`)}
                symbol={pencil}
                title="Edit"
              />
            </div>
          </div>
        </div>

        <div className={deleteShown ? styles.containerHidden : styles.products}>
          
            <div className={styles.horizontal}>
              <div className={styles.productContent}>
                <div className={styles.productTitle}>
                  {/* <h2 className={styles.title}>{`${t.title}`}</h2> */}

                    <input
                      className={`${styles.input} ${styles.small}`}
                      type="text"
                      defaultValue={projects[Number(params.projectId)].tickets.find((t: any) => t.id === Number(params.ticketId)).title}
                    />

                  <div className={`${styles.btns} ${styles.colored}`}> 
                    <div className={`${styles.combo} ${styles.inlineBlock}`}>
                      <ComboCheckboxPlain title={`Participants`} options={projects[Number(params.projectId)].participants} selectedItems={projects[Number(params.projectId)].tickets.find((t: any) => t.id === Number(params.ticketId)).participants} handleItemClick={(theParticipant: string) => {dispatch(addTicketParticipant({projectId: Number(params.projectId), ticketId: projects[Number(params.projectId)].tickets.find((t: any) => t.id === Number(params.ticketId)).id, participant: theParticipant})); setNewParticipant('');}} />
                    </div> 
                    
                    <div className={styles.inlineBlock}>
                      <CreateBtn
                        onClick={() => handleShowSubtickets(projects[Number(params.projectId)].tickets.find((t: any) => t.id === Number(params.ticketId)).id)}
                        symbol={typeof showSubtickets === projects[Number(params.projectId)].tickets.find((t: any) => t.id === Number(params.ticketId)).id ? faChevronUp : faChevronDown}
                        title={typeof showSubtickets === projects[Number(params.projectId)].tickets.find((t: any) => t.id === Number(params.ticketId)).id ? "Hide" : "Show"}
                      />
                    </div>
                    
                  </div>
                </div>
                {typeof showSubtickets === 'number' && showSubtickets === projects[Number(params.projectId)].tickets.find((t: any) => t.id === Number(params.ticketId)).id && <div>
                  <h3>Subtickets:</h3>

                  <div className={styles.flex}>
                    <input
                      onChange={(e) => setNewSubticket({...newSubticket, title: e.target.value})}
                      placeholder="Add subticket"
                      className={styles.input}
                      type="text" 
                      value={newSubticket.title}
                    />
                    <button onClick={() => {dispatch(addSubTicket({project: projects[Number(params.projectId)].name, ticketId: projects[Number(params.projectId)].tickets.find((t: any) => t.id === Number(params.ticketId)).id, subticket: newSubticket})); setNewSubticket({title: '', participants: []});}} className={styles.miniPlus}>+</button>
                  </div>

                  {projects[Number(params.projectId)].tickets.find((t: any) => t.id === Number(params.ticketId)).subTickets.map((s: any, i: number) => <div className={styles.subticket} key={i}>

                  {typeof showSubticketParticipants === 'number' && showSubticketParticipants === s.id && <div className={styles.manageParticipants}>
                    <p className={styles.bold}>{`Subticket's participants: `}</p>
                    <div className={styles.combo}>
                      <ComboCheckboxPlain title={`Subticket's participants`} options={projects[Number(params.projectId)].participants} selectedItems={projects[Number(params.projectId)].tickets.find((t: any) => t.id === Number(params.ticketId)).subTickets[i].participants} handleItemClick={(nsp: string) => {dispatch(addSubTicketParticipant({projectId: projects[Number(params.projectId)].id, ticketId: projects[Number(params.projectId)].tickets.find((t: any) => t.id === Number(params.ticketId)).id, subticketId: s.id, newSubticketParticipant: nsp })); setNewSubticketParticipant('');}} />
                    </div>
                  </div>}

                      <div className={styles.spaceBetween}>
                        <div className={styles.pair}>
                          <input
                            // onChange={(e) => setNewSubticket({...newSubticket, title: e.target.value})}
                            className={styles.input}
                            type="text"
                            defaultValue={s.title}
                          />
                        </div>
                        <div className={styles.btns}>
                          {<div className={styles.combo}>
                            <ComboCheckboxPlain title={`Subticket's participants`} options={projects[Number(params.projectId)].tickets.find((t: any) => t.id === Number(params.ticketId)).participants} selectedItems={projects[Number(params.projectId)].tickets.find((t: any) => t.id === Number(params.ticketId)).subTickets[i].participants} handleItemClick={(nsp: string) => {dispatch(addSubTicketParticipant({projectId: projects[Number(params.projectId)].id, ticketId: projects[Number(params.projectId)].tickets.find((t: any) => t.id === Number(params.ticketId)).id, subticketId: s.id, newSubticketParticipant: nsp })); setNewSubticketParticipant('');}} />
                          </div>}
                          <button className={styles.btn} onClick={() => handleShowSubticketParticipants(s.id)}><FontAwesomeIcon icon={faXmark} /></button>
                        </div>
                      </div>
                      
                    </div>)}
                </div>}
                
              </div>
            </div>
        </div>
      </div></>}
    </SideBarLayout>
  );
};
export default EditTicketLogic;
