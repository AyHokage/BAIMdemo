import { createSlice } from "@reduxjs/toolkit";

const CRMSlice = createSlice({
    name: 'crm',
    initialState: {
        crm: [{
            id: 0,
            email: 'diana.baghirova18@gmail.com',
            name: 'Diana', 
            surname: 'Baghirova',
            number: '+994554602738',
            message: 'hey you!' 
        }]
    }, 
    reducers: {
        sendMessage: (state, action) => {
            state.crm.push(action.payload);
        },
        deleteMessage: (state, action) => {
            const filtered = state.crm.filter(c => c.id !== action.payload);
            state.crm = filtered;
        }
    }
});

export const selectCRM = (state: any) => state.crm;

export const {sendMessage, deleteMessage} = CRMSlice.actions;

export default CRMSlice.reducer;