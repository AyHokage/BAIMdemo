import {
  QuestionnaireAction,
  QuestionnaireState,
} from "@/types/questionnaireTypes"; 
import React, { Dispatch, SetStateAction } from "react";

export interface FormErrorsStep1 {
  birthDate?: string;
  patronymic?: string;
  password?: string;
  position?: string;
  confirmPassword?: string;
  personalEmail?: string;
  phoneNumber?: string;
  businessPhoneNumber?: string;
  gender?: string;
}
export interface FormErrorsStep2 {
  voen?: string;
}
export interface FormInputStep3 {
  id: number;
  name: string;
  lastName: string;
  email: string;
}

export interface FormInputErrorStep3 {
  name?: string;
  lastName?: string;
  email?: string;
}

export interface Step2FormProps {
  state: QuestionnaireState;
  dispatch: React.Dispatch<QuestionnaireAction>;
  handleChangeVoen: (event: React.ChangeEvent<HTMLInputElement>) => void;
  goToPreviousStep: () => void;
  handleSubmitStep2: () => void;
}
export interface Step1FormProps {
  state: QuestionnaireState;
  dispatch: Dispatch<QuestionnaireAction>;
  hasErrors: boolean;
  changeTab: (tabId: string) => void;
}

export interface Step3FormProps {
  state: QuestionnaireState;
  dispatch: Dispatch<QuestionnaireAction>;
  errorsStep3: FormInputErrorStep3[];
  setErrorsStep3: Dispatch<SetStateAction<FormInputErrorStep3[]>>;
  handleInputChange: (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>,
    dispatch: Dispatch<QuestionnaireAction>,
    state: QuestionnaireState,
    setErrorsStep3: Dispatch<SetStateAction<FormInputErrorStep3[]>>,
    errorsStep3: FormInputErrorStep3[]
  ) => void;
  handleAddClick: (dispatch: Dispatch<QuestionnaireAction>) => void;
  handleRemoveClick: (
    index: number,
    dispatch: Dispatch<QuestionnaireAction>
  ) => void;
  handleSubmitStep3: (
    state: QuestionnaireState,
    dispatch: Dispatch<QuestionnaireAction>,
    setErrorsStep3: Dispatch<SetStateAction<FormInputErrorStep3[]>>,
    userData?: User | null | undefined
  ) => void;
  goToPreviousStep: (dispatch: Dispatch<QuestionnaireAction>) => void;
}

export type Product = {
  id: number;
  id1C: string;
  name: string;
  description: string;
  combinedImage: string;
  productType: string;
  isPublic: boolean;
};
export type Partner = {
  id: number;
  id1C: string;
  name: string;
  typeOfActivity: string;
  description: string;
  combinedImage: string;
};
export type News = {
  id: number;
  id1C: string;
  title: string;
  content: string;
  combinedImage: string;
};

export type User = {
  id: string;
  id1C: string;
  age: number | 18;
  userName: string;
  password?: string;
  lastName: string;
  patronimic: string;
  role: string;
  email: string;
  phoneNumber: string | null;
  emailConfirmed: boolean;
  accessFailedCount?: number;
};
export type Company = {
  id: string;
  id1C: string | "";
  voen: string | null;
  companyName: string | null;
  legalForm: string | null;
  legalAddress: string | null;
  legalRepresentative: string | null;
  companyTypeOfActivities: CompanyTypeOfActivity[];
  isNational: boolean;
  directorId: number;
  combinedImage: string;
};
export type CompanyTypeOfActivity = {
  typeOfActivityId:number;
  companyId:number;
  typeOfActivity:TypeOfActivity;
}; 

export type ClientWrapper = {
  id: number;
  userId: string;
  user: {
    id: string;
    id1C: string;
    userName: string;
    lastName: string;
    patronimic?: string;
    image: any;
    role: string;
    email: string;
    phoneNumber?: string;
    emailConfirmed: boolean;
  };
  businessPhoneNumber: string;
  personalEmail: string;
  isDirector: boolean;
  company: {
    id: number;
    id1C?: string;
    companyName?: string;
    voen?: string;
    typeOfActivity?: string;
    startDate: string | null;
    address: string | null;
  };
  isPublic: boolean;
  clientFeedback?: any;
  clientConfirm?: any;
  youtubeLink?: string;
};

export type ResponseData = {
  totalUsersCount: number;
  users: ClientWrapper[] | null;
};

export type StaffWrapper = {
  id: number;
  userId: string;
  user: {
    id: string;
    id1C: string;
    userName: string;
    lastName: string;
    patronimic?: string;
    image: any;
    role: string;
    email: string;
    phoneNumber?: string;
    emailConfirmed: boolean;
  };
  isDismissed: boolean;
  Experience?: number;
  certificates?: string;
  position?: string;
};
export type employer = {
  employer: StaffWrapper;
};

export interface FormErrorsStep1 {
  birthDate?: string;
  patronymic?: string;
  password?: string;
  confirmPassword?: string;
  personalEmail?: string;
  phoneNumber?: string;
  businessPhoneNumber?: string;
  gender?: string;
}
export interface FormErrorsStep2 {
  voen?: string;
}
export interface FormInputStep3 {
  id: number;
  name: string;
  lastName: string;
  email: string;
}
export interface FormInputErrorStep3 {
  [key: string]: string | undefined;
  name?: string;
  lastName?: string;
  email?: string;
}

export interface Vacancy {
  id: string;
  appointment: string;
  skills: string;
  salary: string;
  conditions: string;
  responsibilities: string;
  employmentType: "Full" | "Temporary" | "Partial";
  minimumExperience: "Any" | "Internship" | "Junior" | "Middle" | "Senior";
  companyName: string;
  companyCity: string;
  createdDate: Date;
}

export type CompanyNew = {
  id: number;
  id1C: string;
  voen: string;
  companyName: string;
  legalForm: string;
  legalAddress: string;
  legalRepresentative: string;
  typeOfActivities: string[];
  isNational: boolean;
  directorId: number;
  combinedImage: string;
};

export interface SvgComponentProps {
  iconStyle: string;
  passwordStyle: string;
}

export interface MyDatePickerProps {
  className?: string;
  onChange?: (timestamp: number) => void;
  state?: QuestionnaireState;
  dispatch?: React.Dispatch<QuestionnaireAction>;
}

export interface DayDetails {
  date: number;
  day: number;
  month: number;
  timestamp: number;
  dayString: string;
}

export interface MyDatePickerState {
  year: number;
  month: number;
  selectedDay: number;
  monthDetails: DayDetails[];
  showDatePicker: boolean;
}

export interface CompanyForm {
  voen: string;
  companyName: string;
  legalAddress: string;
  legalForm: string;
  legalRepresentative: string;
  typeOfActivities: string[];
  image: string;
}

export interface TypeOfActivity {
  id: number;
  id1C: string;
  title: string;
}

export interface PersonalData {
  email: string;
  personalEmail: string;
  phoneNumber: string;
  businessPhoneNumber: string;
  image: string;
  patronimic: string;
  birthDate: string;
  gender: string;
  age: number;
  myCompanies: CompanyForm[];
}
export interface Item {
  description: string;
}

export interface Props {
  items: Item[];
}

export interface CvFormStep1Errors{
  name:boolean;
  surname:boolean;
  patronymic:boolean;
  nationality:boolean;
}
export interface CvFormStep2Errors{
  phones:Array<boolean>;
  phonesCollapse:boolean;
  registrationAddress:boolean;
  actualAddress:boolean;
}


export interface CvFormStep3Errors{
  noEducationAdded:boolean;
  degree:boolean;
  institutionName:boolean;
  dateError:boolean;
  dateTimeError:boolean;

}

export interface CvFormStep4Errors{
  noWorksAdded:boolean;
  name:boolean;
  position:boolean;
  jobResponsibilities:boolean;
  dateError:boolean;
  dateTimeError:boolean;
  
}

export interface CvFormStep6Errors{
  noLanguageAdded:boolean;
  languageLevel:boolean;
  nameOfLanguage:boolean;
  sertificateFile:boolean;
  sertificateName:boolean;
  authority:boolean;
  dateError:boolean;
  dateTimeError:boolean;
  cvError:boolean;
}

export interface AllErrors{
  step1:boolean;
  step2:boolean;
  step3:boolean;
  step4:boolean;
  step6:boolean;
}

export interface PersonalInfo{
  id:number;
  name:string;
  surname:string;
  patronymic:string;
  birthday?:Date;
  gender:string;
  maritalStatus:string;
  nationality:string;
  photo:string;
};

export interface ContactInfo{
  id:number;
  phones:Array<string>;
  registrationAddress:string;
  region:string;
  actualAddress:string;
};

export interface Education{
  id:number;
  degree:string;
  institutionName:string;
  specialty:string;
  gpa:number;
  country:string;
  startDate?:string;
  endDate?:string;
}

export interface WorkExperience{
  id:number;
  wname:string;
  position:string;
  jobResponsibilities:string;
  currentlyWorking:boolean;
  reasonForDismissal:string;
  startWorking?:Array<string>;
  endWorking?:Array<string>;
}

export interface FieldOfWork{
  id:number;
  income?:number;
  techSkills?:Array<string>;
}

export interface Sertificate{
  id:number;
  sertificateFile:string;
  sertificateName:string;
  authority:string;
  givenTime?:Array<string>;
  deadLine?:Array<string>;
  /*AdditionalInfoId Fkey*/
}

export interface AdditionalInfo{
  id:number;
  sertificates:Array<Sertificate>;
  languages:Array<Language>;
  cv:string;
}

export interface Language{
  id:number;
  nameOfLanguage:string;
  languageLevel:string;
  /*AdditionalInfoId Fkey*/
}


export interface CvFormStep1Errors{
  name:boolean;
  surname:boolean;
  patronymic:boolean;
  nationality:boolean;
}
export interface CvFormStep2Errors{
  phones:Array<boolean>;
  phonesCollapse:boolean;
  registrationAddress:boolean;
  actualAddress:boolean;
}


export interface CvFormStep3Errors{
  noEducationAdded:boolean;
  degree:boolean;
  institutionName:boolean;
  dateError:boolean;
  dateTimeError:boolean;

}

export interface CvFormStep4Errors{
  noWorksAdded:boolean;
  name:boolean;
  position:boolean;
  jobResponsibilities:boolean;
  dateError:boolean;
  dateTimeError:boolean;
  
}


export interface CvFormStep6Errors{
  noLanguageAdded:boolean;
  languageLevel:boolean;
  nameOfLanguage:boolean;
  sertificateFile:boolean;
  sertificateName:boolean;
  authority:boolean;
  dateError:boolean;
  dateTimeError:boolean;
  cvError:boolean;
}

export interface AllErrors{
  step1:boolean;
  step2:boolean;
  step3:boolean;
  step4:boolean;
  step6:boolean;
}
