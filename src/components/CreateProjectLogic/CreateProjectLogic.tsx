import SideBarLayout from "@/components/SideBarLayout/SideBarLayout";
import styles from './CreateProjectLogic.module.css'
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import CreateBtn from "@/components/CreateBtn/CreateBtn";
import { faLeftLong as back } from "@fortawesome/free-solid-svg-icons";
import ComboBox from "@/components/ComboBox/ComboBox";
import ExportedImage from "next-image-export-optimizer";
import HiddenThemes from "@/components/HiddenThemes/HiddenThemes";
import Themes from "@/components/Themes/Themes";
import { selectProjects, addProject } from "@/services/ProjectsReducer";
import { useSelector, useDispatch } from "react-redux";
import ComboCheckboxPlain from "../ComboCheckboxPlain/ComboCheckboxPlain"; 
  
const CreateProjectLogic = () => {
  const projects = useSelector(selectProjects).projects; 

  const [project, setProject] = useState<any>({id: projects.length, tasks: [], participants: [], companies: []});
  const [theme, setTheme] = useState('');
  const [newParticipant, setNewParticipant] = useState('');
  const [showMore, setShowMore] = useState(false); 
  const [show, setShow] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const [imageBase64, setImageBase64] = useState("");
  const prevImageBase64 = useRef(""); 
  const [type, setType] = useState('');
  const [participantsStorage, setParticipantsStorage] = useState<any>([])
  const [icoStorage, setIcoStorage] = useState<any>('')
  const [selectedItems, setSelectedItems] = useState([])
  const [selectedCompanies, setSelectedCompanies] = useState([])

  const dispatch = useDispatch();

  const projectTypes = ['Внешние проекты', 'Внутренние проекты', 'Одноразовые работы', 'Предпроектное обследование', 'Техническая поддержка']

  const handleTypeSelect = (ProjectType: string) => {
    setProject({...project, type: ProjectType});
    sessionStorage.setItem('projectType', ProjectType)
  };

  
  const themes = ['/space.jpg', '/dinasaurs.jpg', '/party.jpg', '/clouds.jpg']

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        if (typeof result === "string") {
          setProject({...project, ico: URL.createObjectURL(file)});
          setImageSrc(URL.createObjectURL(file)); 
          sessionStorage.setItem('ico', URL.createObjectURL(file));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const router = useRouter();

  const postProject = async () => {
    dispatch(addProject(project))

    sessionStorage.removeItem('name'); 
    sessionStorage.removeItem('desc');
    sessionStorage.removeItem('theme'); 
    sessionStorage.removeItem('ico');
    sessionStorage.removeItem('projectType');
    sessionStorage.removeItem('participants');
    
    router.push("/projects");
  };

  const chooseIco = (n: string) => {
    setProject({...project, ico: n})
    setImageSrc('')
    sessionStorage.setItem('ico', n)
  }

  const setProjectAndParticipantsSession = (p: any) => {
    setProject(p);
    sessionStorage.setItem('participants', p.participants);
  }

  const setProjectAndThemeSession = (p: any) => {
    setProject(p);
    sessionStorage.setItem('theme', p.theme);
  }

  const removeParticipant = (part : string) => {
    const filtered = project.participants.filter((p: string) => p !== part)
    setProject({...project, participants: filtered})
    sessionStorage.setItem('participants', filtered)
  }

  const addParticipant = () => {
    setProject({...project, participants: [...project.participants, newParticipant]})
  }

  const handleStaffSelect = (staffMember: string) => {
    if (project.participants.some((s: string) => s === staffMember)){ 
      const filteredSelectedItems = project.participants.filter((s: string) => s!==staffMember)
      setProject({...project, participants: filteredSelectedItems})
      
      sessionStorage.setItem('participants', filteredSelectedItems);
    } else {
      setProject({...project, participants: [...project.participants, staffMember]})
      
      sessionStorage.setItem('participants', project.participants);
    }
  }

  const handleCompaniesSelect = (company: string) => {
    if (project.companies.some((s: string) => s === company)){ 
      const filteredSelectedItems = project.companies.filter((s: string) => s!==company)
      setProject({...project, companies: filteredSelectedItems})
      
      sessionStorage.setItem('companies', filteredSelectedItems);
    } else {
      setProject({...project, companies: [...project.companies, company]})
      
      sessionStorage.setItem('companies', project.companies);
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined'){
      const participantsStr = sessionStorage.getItem('participants');
      const icoStr = sessionStorage.getItem('ico');
      setIcoStorage(icoStr)
      if (participantsStr){
        const participantsArr = participantsStr.split(',');
        setParticipantsStorage(participantsArr)
      }
    }
  }, [project])

  useEffect(() => {
    console.log(projects)
  }, [projects])

  return (
    <SideBarLayout> 
      <div className={styles.container}> 
        <div className={styles.products}>
          <div className={styles.containerTitle}>
            <h1 className={styles.heading}>Add new project</h1> 
            <div className={styles.btns}>
              <CreateBtn
                onClick={() => {router.back();
                  sessionStorage.removeItem('name'); 
                  sessionStorage.removeItem('desc');
                  sessionStorage.removeItem('theme'); 
                  sessionStorage.removeItem('ico');
                  sessionStorage.removeItem('projectType');
                  sessionStorage.removeItem('participants');}}
                symbol={back}
                title="Back"
              />
              <CreateBtn onClick={postProject} symbol="+" title="Create" />
            </div>
          </div>
          <div className={styles.form}>
            <div className={styles.inputs}>
              
              <div className={styles.row}>
                <div className={styles.half}>
                  <label className={styles.label}>Project Name</label>
                  <input
                    onChange={(ev) => {setProject({...project, name: ev.target.value}); sessionStorage.setItem('name', ev.target.value)}}
                    placeholder="Name"
                    className={styles.input}
                    type="text"
                    defaultValue={typeof window !== 'undefined' && (sessionStorage.getItem('name') || "") || ""}
                  />
                </div>
                <div className={styles.half}>
                  <label className={styles.label}>{`Client's company`}</label>
                  <div className={styles.comboboxContainer}>
                    <ComboCheckboxPlain title={`Client's company`} options={['Google', 'IBM', 'SpaceX', 'NASA', 'Microsoft']} selectedItems={project.companies} setSelectedItems={(c: string) => setProject({...project, companies: [...project.companies, c]})} handleItemClick={(c: string) => handleCompaniesSelect(c)} />
                  </div>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.half}>
                  <label className={styles.label}>{`Director's full name:`}</label>
                  <input
                    onChange={(ev) => {setProject({...project, name: ev.target.value}); sessionStorage.setItem('name', ev.target.value)}}
                    placeholder="Name"
                    className={styles.input}
                    type="text"
                    defaultValue={typeof window !== 'undefined' && (sessionStorage.getItem('name') || "") || ""}
                  />
                </div>
                <div className={styles.half}>
                  <label className={styles.label}>{`Director's email:`}</label>
                  <input
                    onChange={(ev) => {setProject({...project, name: ev.target.value}); sessionStorage.setItem('name', ev.target.value)}}
                    placeholder="Email"
                    className={styles.input}
                    type="text"
                    defaultValue={typeof window !== 'undefined' && (sessionStorage.getItem('name') || "") || ""}
                  />
                </div>
              </div>

              <label className={styles.label}>Project Description</label>
              <textarea
                className={styles.inputDesc}
                onChange={(ev) => {setProject({...project, desc: ev.target.value}); ; sessionStorage.setItem('desc', ev.target.value)}}
                placeholder="Description"
                defaultValue={typeof window !== 'undefined' && (sessionStorage.getItem('desc') || "") || ""}
              />

              <div className={styles.row}>
                <div className={styles.half}>
                  <label className={styles.label}>Participants from BAIM</label>
                    <div className={styles.comboboxContainer}>
                      <ComboCheckboxPlain title='Participants from BAIM' options={['Timur', 'Diana']} selectedItems={project.participants} setSelectedItems={(p: string) => setProject({...project, participants: [...project.participants, p]})} handleItemClick={(sm: string) => handleStaffSelect(sm)} />
                    </div>
                </div>
                <div className={project.companies.length > 0 ? styles.half : styles.hidden}>
                  <label className={styles.label}>{`Participants from client's company`}</label>
                  <div className={styles.comboboxContainer}>
                    <ComboCheckboxPlain title={`Participants from client's company`} options={['Aykhan', 'Medina', 'Shamsaddin']} selectedItems={project.participants} setSelectedItems={(p: string) => setProject({...project, participants: [...project.participants, p]})} handleItemClick={(sm: string) => handleStaffSelect(sm)} />
                  </div>
                </div>
              </div>

              {/* <ComboCheckboxPlain title='Participants from client' options={['Aykhan', 'Medina', 'Fidashka']} selectedItems={selectedItems} setSelectedItems={setSelectedItems} handleItemClick={(op: string) => setSelectedItems([...selectedItems, op])} /> */}

              {/* <MultipleInput setNewValue={setNewParticipant} newValue={newParticipant} parent={project} setParent={setProjectAndParticipantsSession} removeItem={removeParticipant} placeholder='participants' category='participants' />

              <div className={styles.participants}>
                {participantsStorage.length>0 ? <label className={styles.labelParticipant}>Participants:</label> : <></>}
                {participantsStorage ? participantsStorage.map((p: string, i: number) => 
                  <div onClick={() => removeParticipant(p)} key={i} className={styles.participant}>
                    <p><FontAwesomeIcon className={styles.leftIco} icon={faUser} /> {p} <FontAwesomeIcon  className={styles.rightIco} icon={faXmark} /></p> 
                  </div>
                ) : <></>}
              </div>  */}

            </div>
            <div className={styles.imageContainer}>

              <label className={styles.label}>Project Ico</label>
              {/* <UploadImage item={project} setItem={setProject} /> */}
              <div className={styles.themes}>
                {
                  themes.map((t, i) => <ExportedImage key={i} width={300} height={100} src={t} alt='ico' className={icoStorage === t ? styles.chosenRadioImg : styles.radioImg} onClick={() => chooseIco(t)} />)
                }
                 
                <div className={styles.column}>
                  {icoStorage && icoStorage.length> 4 && icoStorage.slice(0,4) ==='blob' ? 
                   <>
                   <label htmlFor="ico" className={styles.upload}>
                      <ExportedImage width={300} height={100} src={icoStorage} alt='project ico' className={icoStorage ? `${styles.chosenRadioImg} ${styles.absolute}` : styles.radioImg} />
                    </label>
                     <input className={`${styles.none}`} type="file" id="ico" onChange={handleImageChange} />
                   </> :
                   <>
                    <label htmlFor="ico" className={styles.upload}>
                      Upload ico
                    </label>
                    <input className={`${styles.none}`} type="file" id="ico" onChange={handleImageChange} />
                   </>
                  }
                </div>
              </div>
              
              
              <label className={styles.label}>Project Theme</label>
              <Themes defValue={typeof window !== 'undefined' && (sessionStorage.getItem('theme') || "") || ""} project={project} showMore={showMore} setShowMore={setShowMore} />
              <div>

              </div>
              <HiddenThemes  theme={theme} setTheme={setTheme} showMore={showMore} project={project} setShowMore={setShowMore} setProject={setProjectAndThemeSession} />


              <label className={styles.label}>Project Type</label> 
              <ComboBox
                defValue={typeof window !== 'undefined' && (sessionStorage.getItem('projectType') || "") || ""}
                options={projectTypes}
                onSelect={handleTypeSelect}
              />

            </div>
          </div> 
        </div>
      </div>
    </SideBarLayout>
  );
}

export default CreateProjectLogic;