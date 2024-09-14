import { _companyImage } from "@/types/CostilMedina";
import {
  QuestionnaireAction,
  QuestionnaireState,
} from "@/types/questionnaireTypes";

export const initialState: QuestionnaireState = {
  birthDate: "", 
  patronymic: "",
  password: "",
  confirmPassword: "",
  personalEmail: "",
  phoneNumber: "",
  businessPhoneNumber: "",
  selectedOption: "",
  clickedCountStep1: 0,
  clickedCountStep2: 0,
  clickedCountStep3: 0,
  errorsStep2: {},
  errors: {},
  errorsStep3: [{}, {}, {}],
  activeTab: "step-01",
  passwordVisibility: false,
  confirmPasswordVisibility: false,
  isSubmitted: false,
  voen: "",
  voenIsValid: true,
  inputs: [{ id: Date.now(), name: "", lastName: "", email: "" }],
  stepOrder: ["step-01", "step-02", "step-03"],
  currentStep: 1,
  checkedMale: false,
  checkedFemale: false,
  position: "",
  companyForms: [
    {
      voen: "",
      companyName: "",
      legalAddress: "",
      legalForm: "",
      legalRepresentative: "",
      typeOfActivities: [],
      image: _companyImage,
    },
  ],
};

export function questionnaireReducer(
  state: QuestionnaireState,
  action: QuestionnaireAction
): QuestionnaireState {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "ADD_INPUT":
      return {
        ...state,
        inputs: [
          ...state.inputs,
          { id: Date.now(), name: "", lastName: "", email: "" },
        ],
        errorsStep3: [...state.errorsStep3, {}],
      };
    case "ADD_INPUT2":
      return {
        ...state,
        inputs: [
          ...state.inputs,
          { id: Date.now(), name: "", lastName: "", email: "" },
        ],
        errorsStep3: [...state.errorsStep3, {}],
      };
    case "REMOVE_INPUT":
      return {
        ...state,
        inputs: state.inputs.filter((_, i) => i !== action.index),
        errorsStep3: state.errorsStep3.filter((_, i) => i !== action.index),
      };
    case "SET_ACTIVE_TAB":
      return {
        ...state,
        activeTab: action.tabId,
      };
    case "SET_VOEN":
      return {
        ...state,
        voen: action.voen,
        voenIsValid: /^\d*$/.test(action.voen) && action.voen.length <= 10,
      };
    case "TOGGLE_PASSWORD_VISIBILITY":
      return { ...state, passwordVisibility: !state.passwordVisibility };
    case "TOGGLE_CONFIRM_PASSWORD_VISIBILITY":
      return {
        ...state,
        confirmPasswordVisibility: !state.confirmPasswordVisibility,
      };
    case "GO_TO_PREVIOUS_STEP": {
      const currentIndex = state.stepOrder.indexOf(state.activeTab);

      if (currentIndex > 0) {
        state.currentStep = currentIndex - 1;

        return { ...state, activeTab: state.stepOrder[currentIndex - 1] };
      }
      return state;
    }
    case "GO_TO_NEXT_STEP": {
      const currentIndex = state.stepOrder.indexOf(state.activeTab);
      if (currentIndex > 0) {
        state.currentStep = currentIndex + 1;
        return { ...state, activeTab: state.stepOrder[currentIndex + 1] };
      }
      return state;
    }
    case "SET_CURRENT_STEP":
      const currentIndex = state.stepOrder.indexOf(state.activeTab);

      return { ...state, currentStep: currentIndex + 1 };
    case "SET_ERRORS":
      return { ...state, errors: action.errors };
    case "SET_ERRORS_STEP_2":
      return { ...state, errorsStep2: action.errorsStep2 };
    case "SET_ERRORS_STEP_3":
      return {
        ...state,
        errorsStep3: state.errorsStep3.map((error, i) =>
          i === action.index ? action.newErrors : error
        ),
      };
    case "SET_SELECTED_OPTION":
      if (action.option === "female") {
        state.checkedFemale = true;
        state.checkedMale = false;
      } else if (action.option === "male") {
        state.checkedFemale = false;
        state.checkedMale = true;
      }
      return { ...state, selectedOption: action.option };
    case "SET_PHONE_NUMBER":
      return { ...state, phoneNumber: action.phoneNumber };
    case "SET_BUSINESS_PHONE_NUMBER":
      return { ...state, businessPhoneNumber: action.businessPhoneNumber };
    case "SET_INPUT":
      return {
        ...state,
        inputs: state.inputs.map((input, i) =>
          i === action.index ? { ...input, [action.name]: action.value } : input
        ),
      };
    case "SET_CLICKED_COUNT_STEP_1":
      return { ...state, clickedCountStep1: action.count };
    case "SET_CLICKED_COUNT_STEP_2":
      return { ...state, clickedCountStep2: action.count };
    case "SET_CLICKED_COUNT_STEP_3":
      return { ...state, clickedCountStep3: action.count };

    case "SET_IS_SUBMITTED":
      return { ...state, isSubmitted: action.isSubmitted };
    case "SET_BIRTH_DATE":
      return { ...state, birthDate: action.birthDate };
    case "SET_CONFIRM_PASSWORD":
      return { ...state, confirmPassword: action.confirmPassword };
    case "SET_PATRONYMIC":
      return { ...state, patronymic: action.patronymic };
    case "SET_POSITION":
      return { ...state, position: action.position };
    case "SET_PERSONAL_EMAIL":
      return { ...state, personalEmail: action.personalEmail };
    case "SET_PASSWORD":
      return { ...state, password: action.password };

    case "SET_COMPANY_FORM_DATA":
      return {
        ...state,
        companyForms: action.formData,
      };
    default:
      return state;
  }
}
