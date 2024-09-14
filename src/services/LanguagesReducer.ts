import { createSlice } from "@reduxjs/toolkit";

const LanguagesSlice = createSlice({
    name: 'languages',
    initialState: {
        language: 'RU'
    },
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload;
        }
    }
});

export const selectLanguages = (state: any) => state.languages;

export const {setLanguage} = LanguagesSlice.actions;

export default LanguagesSlice.reducer;