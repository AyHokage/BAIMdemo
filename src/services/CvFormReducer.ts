import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PersonalInfo, ContactInfo, Education, WorkExperience, FieldOfWork, AdditionalInfo, Sertificate, Language, CvFormStep2Errors, CvFormStep3Errors, CvFormStep4Errors, CvFormStep6Errors, CvFormStep1Errors, AllErrors } from "@/types";

interface InfoPayload<T> {
    field: keyof T;
    value: T[keyof T] | string;
}

export interface CvFormState {
    personalInfo: PersonalInfo,
    contactInfo: ContactInfo,
    educations: Array<Education>,
    oneEducation: Education,
    works: Array<WorkExperience>, 
    workExperience: WorkExperience,
    fieldOfWork: FieldOfWork,
    additionalInfo: AdditionalInfo,
    oneSertificate: Sertificate,
    oneLanguage: Language,
    hasWork: boolean,
    isEducationsOpen: boolean,
    isWorksOpen: boolean,
    isLanguagesOpen: boolean,
    isSertificatesOpen: boolean,
    isOpenedForEdit: boolean,
    indexOfOpened: number,
    allErrors:AllErrors,
    step1Errors:CvFormStep1Errors,
    step2Errors: CvFormStep2Errors,
    step3Errors: CvFormStep3Errors,
    step4Errors: CvFormStep4Errors,
    step6Errors: CvFormStep6Errors,
    notFound: boolean,
    isLoading: boolean,
    error: boolean,
}

const initialState: CvFormState = {
    personalInfo: {
        id: 0,
        name: "",
        surname: "",
        patronymic: "",
        birthday: undefined,
        gender: "",
        maritalStatus: "",
        nationality: "",
        photo: "",
    },
    contactInfo: {
        id: 0,
        phones: [],
        registrationAddress: "",
        region: "",
        actualAddress: ""
    },
    educations: [],
    oneEducation: {
        id: 0,
        degree: "",
        institutionName: "",
        specialty: "",
        gpa: 0,
        country:"", 
        startDate: undefined,
        endDate: undefined,
    },
    works: [],
    workExperience: {
        id: 0,
        wname: "",
        position: "",
        jobResponsibilities: "",
        currentlyWorking: false,
        reasonForDismissal: "",
        startWorking: ['', ''],
        endWorking: ['', ''],
    },
    fieldOfWork: {
        id: 0,
        income: undefined,
        techSkills: [],
    },
    additionalInfo: {
        id: 0,
        sertificates: [],
        languages: [],
        cv: "",
    },
    oneSertificate: {
        id: 0,
        sertificateFile: "",
        sertificateName: "",
        authority: "",
        givenTime: ['', ''],
        deadLine: ['', ''],
    },
    oneLanguage: {
        id: 0,
        nameOfLanguage: '',
        languageLevel: '',
    },
    hasWork: false,
    isEducationsOpen: false,
    isWorksOpen: false,
    isLanguagesOpen: false,
    isSertificatesOpen: false,
    isOpenedForEdit: false,
    indexOfOpened: 0,
    step1Errors:{
        name:false,
        surname:false,
        patronymic:false,
        nationality:false,
    },
    allErrors:{
        step1:false,
        step2:false,
        step3:false,
        step4:false,
        step6:false,
    },
    step2Errors: {
        phones: [false],
        phonesCollapse:false,
        registrationAddress:false,
        actualAddress:false,
    },
    step3Errors: {
        noEducationAdded: false,
        degree: false,
        institutionName: false,
        dateError: false,
        dateTimeError:false,
    },
    step4Errors: {
         noWorksAdded:false,
         name:false,
         position:false,
         jobResponsibilities:false,
         dateError: false,
         dateTimeError:false,
    },
    step6Errors: {
        noLanguageAdded: false,
        nameOfLanguage:false,
        languageLevel: false,
        sertificateFile:false,
        sertificateName:false,
        authority:false,
        dateError: false,
        dateTimeError:false,
        cvError: false,
    },
    notFound: false,
    isLoading: false,
    error: false,
}

const cvformSlice = createSlice({
    name: 'cvform',
    initialState,
    reducers: {
        addToPersonalInfo: (state, action: PayloadAction<InfoPayload<PersonalInfo>>) => {
            const { field, value } = action.payload;
            state.personalInfo = {
                ...state.personalInfo,
                [field]: value,
            };
        },
        addToContactInfo: (state, action: PayloadAction<InfoPayload<ContactInfo>>) => {
            const { field, value } = action.payload;
            state.contactInfo = {
                ...state.contactInfo,
                [field]: value,
            };
        },
        addToPhones: (state) => {
            state.contactInfo.phones.push("");
            state.step2Errors.phones.push(false);
        },
        addPhone: (state, action) => {
            state.contactInfo.phones.push(action.payload);
        },
        deleteFromPhones: (state, action: PayloadAction<{ index: number }>) => {
            const { index } = action.payload;
            state.contactInfo.phones.splice(index, 1);
            state.step2Errors.phones.splice(index,1);
        },
        changePhoneInfo: (state, action: PayloadAction<{ index: number, value: string }>) => {
            const { index, value } = action.payload;
            state.contactInfo.phones[index] = value;
        },
        addToEducation: (state, action: PayloadAction<Education>) => {
            state.educations.push(action.payload);
        },
        addOneEducation: (state, action: PayloadAction<InfoPayload<Education>>) => {
            const { field, value } = action.payload;
            state.oneEducation = {
                ...state.oneEducation,
                id: state.educations.length+1,
                [field]: value
            }
        },
        deleteFromEducation: (state, action: PayloadAction<{ index: number }>) => {
            const { index } = action.payload;
            state.educations.splice(index, 1);
        },
        setIsEducationOpen: (state) => {
            state.isEducationsOpen = !state.isEducationsOpen;
        },
        setIsOpenedForEdit: (state) => {
            state.isOpenedForEdit = !state.isOpenedForEdit;
        },
        changeEducation: (state, action: PayloadAction<{ index: number, education: Education }>) => {
            const { index, education } = action.payload;
            state.educations[index] = education;
        },
        changeIndexOfOpened: (state, action: PayloadAction<number>) => {
            state.indexOfOpened = action.payload;
        },
        refreshOneEducation: (state, action: PayloadAction<number>) => {
            state.oneEducation = state.educations[action.payload];
        },
        changeHasWork: (state, action) => {
            state.hasWork = action.payload;
        },
        deleteFromWorks: (state, action: PayloadAction<{ index: number }>) => {
            const { index } = action.payload;
            state.works.splice(index, 1);
        },
        setIsWorksOpen: (state) => {
            state.isWorksOpen = !state.isWorksOpen;
        },
        refreshOneWork: (state, action: PayloadAction<number>) => {
            state.workExperience = state.works[action.payload];
        },
        addToWorks: (state, action: PayloadAction<WorkExperience>) => {
            state.workExperience = {
                ...state.workExperience,
                id: state.works.length+1
            }
            state.works.push(action.payload);
        },
        addOneWork: (state, action: PayloadAction<{ info: InfoPayload<WorkExperience>, type?: number }>) => {
            const { field, value } = action.payload.info;
            const type = action.payload.type;

            if ((field === 'startWorking' || field === 'endWorking') && typeof type === 'number') {
                if (state.workExperience[field] !== undefined && Array.isArray(state.workExperience[field])) {
                    state.workExperience[field][type] = `${value}`;
                }
            } else {
                state.workExperience = {
                    ...state.workExperience,
                    [field]: value,
                }
            }
        },

        changeWork: (state, action: PayloadAction<{ index: number, work: WorkExperience }>) => {
            const { index, work } = action.payload;
            state.works[index] = work;
        },
        addToFieldOfWork: (state, action: PayloadAction<InfoPayload<FieldOfWork>>) => {
            const { field, value } = action.payload;
            if (field == 'techSkills') {
                state.fieldOfWork[field]?.push(`${value}`);
            } else {
                state.fieldOfWork = {
                    ...state.fieldOfWork,
                    [field]: value,
                };
            }

        },
        deleteFromTechSkills: (state, action: PayloadAction<number>) => {
            state.fieldOfWork.techSkills?.splice(action.payload, 1);
        },

        addToAdditionalInfo: (state, action: PayloadAction<InfoPayload<AdditionalInfo>>) => {
            const { field, value } = action.payload;
            state.additionalInfo = {
                ...state.additionalInfo,
                [field]: value,
            };
        },
        setIsLanguagesOpen: (state) => {
            state.isLanguagesOpen = !state.isLanguagesOpen;
        },
        setIsSertificatesOpen: (state) => {
            state.isSertificatesOpen = !state.isSertificatesOpen;
        },
        deleteFromLanguages: (state, action: PayloadAction<number>) => {
            state.additionalInfo.languages.splice(action.payload, 1);
        },
        refreshOneLanguage: (state, action: PayloadAction<number>) => {
            state.oneLanguage = state.additionalInfo.languages[action.payload];
        },
        addToLanguages: (state, action: PayloadAction<Language>) => {
            state.additionalInfo.languages.push(action.payload);
        },
        changeLanguage: (state, action: PayloadAction<{ index: number, language: Language }>) => {
            const { index, language } = action.payload;
            state.additionalInfo.languages[index] = language;
        },
        addOneLanguage: (state, action: PayloadAction<InfoPayload<Language>>) => {
            const { field, value } = action.payload;
            state.oneLanguage = {
                ...state.oneLanguage,
                [field]: value,
            }
        },
        deleteFromSertificate: (state, action: PayloadAction<number>) => {
            state.additionalInfo.sertificates.splice(action.payload, 1);
        },
        refreshOneSertificate: (state, action: PayloadAction<number>) => {
            state.oneSertificate = state.additionalInfo.sertificates[action.payload];
        },
        addToSertificates: (state, action: PayloadAction<Sertificate>) => {
            state.additionalInfo.sertificates.push(action.payload);
        },
        changeSertificate: (state, action: PayloadAction<{ index: number, sertificate: Sertificate }>) => {
            const { index, sertificate } = action.payload;
            state.additionalInfo.sertificates[index] = sertificate;
        },
        addOneSertificate: (state, action: PayloadAction<{ info: InfoPayload<Sertificate>, type?: number }>) => {
            const { field, value } = action.payload.info;
            const type = action.payload.type;

            if ((field === 'givenTime' || field === 'deadLine') && typeof type === 'number') {
                if (state.oneSertificate[field] !== undefined && Array.isArray(state.oneSertificate[field])) {
                    state.oneSertificate[field][type] = `${value}`;
                }
            } else {
                state.oneSertificate = {
                    ...state.oneSertificate,
                    [field]: value,
                }
            }
        },
        setErrorStep1:(state,action:PayloadAction<{field:string,value:boolean}>)=>{
            const {field,value}=action.payload;
            state.step1Errors = {
                ...state.step1Errors,
                [field]: value,
            }
        },
        setErrorStep2:(state,action:PayloadAction<{field:string,value:boolean,index?:number}>)=>{
            const {field,value,index}=action.payload;
            if(field=='phones' && index!=undefined){
                state.step2Errors.phones[index]=value;
            }
            else{
                state.step2Errors = {
                    ...state.step2Errors,
                    [field]: value,
                }
            }
        },
        setErrorStep3:(state,action:PayloadAction<{field:string,value:boolean}>)=>{
            const {field,value}=action.payload;
            state.step3Errors = {
                ...state.step3Errors,
                [field]: value,
            }
        },
        setErrorStep4:(state,action:PayloadAction<{field:string,value:boolean}>)=>{
            const {field,value}=action.payload;
            state.step4Errors = {
                ...state.step4Errors,
                [field]: value,
            }
        },
        setErrorStep6:(state,action:PayloadAction<{field:string,value:boolean}>)=>{
            const {field,value}=action.payload;
            state.step6Errors = {
                ...state.step6Errors,
                [field]: value,
            }
        },
        setAllErrors:(state,action:PayloadAction<{field:string,value:boolean}>)=>{
            const {field,value}=action.payload;
            state.allErrors = {
                ...state.allErrors,
                [field]: value,
            }
        },

    },
    extraReducers: (builder) => {
        // Дополнительные редукторы, когда потребуется
    },
});


export const selectFormCV = (state: any) => state.cvform;

export const {addPhone, setAllErrors,setErrorStep1,setErrorStep2,setErrorStep3,setErrorStep4,setErrorStep6, deleteFromSertificate, addOneSertificate, changeSertificate, addToSertificates, refreshOneSertificate, addOneLanguage, changeLanguage, addToLanguages, refreshOneLanguage, deleteFromLanguages, setIsLanguagesOpen, setIsSertificatesOpen, deleteFromTechSkills, changeHasWork, addOneWork, addToWorks, changeWork, refreshOneWork, setIsWorksOpen, deleteFromWorks, setIsEducationOpen, refreshOneEducation, changeIndexOfOpened, setIsOpenedForEdit, changeEducation, deleteFromEducation, addToPersonalInfo, addToContactInfo, addToPhones, deleteFromPhones, changePhoneInfo, addToEducation, addOneEducation, addToFieldOfWork, addToAdditionalInfo } = cvformSlice.actions;

export default cvformSlice.reducer;