import { createSlice } from "@reduxjs/toolkit";

const AllCVsSlice = createSlice({
    name: 'cvs',
    initialState: {
        cvs: [{
            id: 0,
            personalInfo: {
                id: 0,
                name: "Diana",
                surname: "Baghirova",
                patronymic: "Oleqovna",
                birthday: undefined,
                gender: "",
                maritalStatus: "",
                nationality: "",
                photo: "",
            },
            contactInfo: {
                id: 0,
                phones: [""],
                registrationAddress: "",
                region: "",
                actualAddress: ""
            },
            educations: [],
            works: [],
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
        }]
    }, 
    reducers: {
        sendCV: (state, action) => {
            state.cvs.push(action.payload);
        },
        deleteCV: (state, action) => {
            const filtered = state.cvs.filter((c) => c.id !== action.payload);
            state.cvs = filtered;
        }
    }
});

export const selectCVs = (state: any) => state.allCVs;

export const {sendCV, deleteCV} = AllCVsSlice.actions;

export default AllCVsSlice.reducer;