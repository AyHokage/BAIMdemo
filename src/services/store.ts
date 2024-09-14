import { configureStore } from "@reduxjs/toolkit";
import PartnersReducer from "./partners/PartnersReducer";
import NewsReducer from "./news/NewsReducer";
import ProductsReducer from "./ProductsReducer";
import CompaniesReducer from "./CompaniesReducer";
import TasksReducer from "./TasksReducer";
import AuthReducer from "./AuthReducer";
import ProjectsReducer from "./ProjectsReducer";
import LanguagesReducer from "./LanguagesReducer";
import CRMReducer from "./CRMReducer";
import CvFormReducer from "./CvFormReducer";
import AllCVsReducer from "./AllCVsReducer";

export const store = configureStore({
    reducer: {
        partners: PartnersReducer, 
        news: NewsReducer,
        products: ProductsReducer,
        companies: CompaniesReducer,
        tasks: TasksReducer,
        auth: AuthReducer,
        projects: ProjectsReducer,
        languages: LanguagesReducer,
        crm: CRMReducer,
        cvform: CvFormReducer,
        allCVs: AllCVsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;