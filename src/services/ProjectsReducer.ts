import { createSlice } from "@reduxjs/toolkit";
import { projects } from "../../lib/data";

const ProjectsSlice = createSlice({
    name: 'projects',
    initialState: {
        projects: projects,
        showParticipants: [],
        showActions: [],
        commentById: {}
    }, 
    reducers: {
        addProject: (state, action) => {
            state.projects.push(action.payload)
        },
        removeProject: (state, action) => {
            const filtered = state.projects.filter((p: any) => p.id !== action.payload) 
            state.projects = filtered
        },
        addTicket: (state, action) => { 
            const foundIndex = state.projects.findIndex((p: any) => p.name == action.payload.project)
    
            state.projects[foundIndex]?.tickets.push(action.payload.ticket)
        }, 
        addTicketParticipant: (state, action) => { 
            const foundIndex = state.projects.findIndex((p: any) => p.id == action.payload.projectId)
            const foundTicket = state.projects[foundIndex].tickets.findIndex((t: any) => t.id == action.payload.ticketId)
    
            state.projects[foundIndex]?.tickets[foundTicket].participants.push(action.payload.participant)
        },
        addSubTicket: (state, action) => { 
            const foundIndex = state.projects.findIndex((p: any) => p.name == action.payload.project)
            const foundTicket = state.projects[foundIndex].tickets.findIndex((t: any) => t.id == action.payload.ticketId)
    
            state.projects[foundIndex]?.tickets[foundTicket].subTickets.push(action.payload.subticket)
        },
        addSubTicketParticipant: (state, action) => {
            const foundIndex = state.projects.findIndex((p: any) => p.id === action.payload.projectId);
            const foundTicket = state.projects[foundIndex].tickets.findIndex((t: any) => t.id === action.payload.ticketId);
            const foundSubticket = state.projects[foundIndex].tickets[foundTicket].subTickets.findIndex((st: any) => st.id === action.payload.subticketId);
          
            // If 'participants' array is of type 'string[]'
            (state.projects[foundIndex].tickets[foundTicket].subTickets[foundSubticket] as { participants: string[] }).participants.push(action.payload.newSubticketParticipant);
          
            // If 'participants' array can be of type 'any[]'
            // (state.projects[foundIndex].tickets[foundTicket].subTickets[foundSubticket] as { participants: any[] }).participants.push(action.payload.newSubticketParticipant);
          
            // If 'participants' array can be of any type
            // (state.projects[foundIndex].tickets[foundTicket].subTickets[foundSubticket] as any).participants.push(action.payload.newSubticketParticipant);
        },
        addTask: (state, action) => { 
            const foundIndex = state.projects.findIndex((p: any) => p.name == action.payload.project)
    
            state.projects[foundIndex]?.tasks.push(action.payload.task)
        },
        addComment: (state, action) => {
            const foundIndex = state.projects.findIndex((p: any) => p.id == action.payload.projectId)
            const foundTaskIndex = state.projects[foundIndex]?.tasks.findIndex((t: any) => t.id == action.payload.taskId)

            state.projects[foundIndex]?.tasks[foundTaskIndex]?.comments.push({...action.payload.comment, id: state.projects[foundIndex]?.tasks[foundTaskIndex]?.comments.length})
        },
        addToCheckList: (state, action) => {
            const foundIndex = state.projects.findIndex((p: any) => p.id == action.payload.projectId)
            const foundTaskIndex = state.projects[foundIndex]?.tasks.findIndex((t: any) => t.id == action.payload.taskId)

            state.projects[foundIndex]?.tasks[foundTaskIndex]?.checklist.push({...action.payload.checkListItem, id: state.projects[foundIndex]?.tasks[foundTaskIndex]?.checklist.length})
        },
        addReaction: (state, action) => {
            const foundProjectIndex = state.projects.findIndex((p: any) => p.id == action.payload.projectId)
            const foundTaskIndex = state.projects[foundProjectIndex]?.tasks.findIndex((t: any) => t.id == action.payload.taskId)
            const foundReactions = state.projects[foundProjectIndex]?.tasks[foundTaskIndex]?.comments[action.payload.commentId]?.reactions
            const foundReaction = foundReactions.findIndex((r: any) => r.email === action.payload.reaction.email);

            if (foundReaction > -1) {
                foundReactions[foundReaction].emoji !== action.payload.reaction.emoji ? foundReactions[foundReaction] = action.payload.reaction : 
                foundReactions.filter((fr: any) => fr.emoji !== foundReactions[foundReaction].emoji)
                // foundReactions[foundReaction].emoji=''
            } 
            else {(foundReactions as any).push(action.payload.reaction)}
        }, removeReaction: (state, action) => {
            const foundProjectIndex = state.projects.findIndex((p: any) => p.id == action.payload.projectId)
            const foundTaskIndex = state.projects[foundProjectIndex]?.tasks.findIndex((t: any) => t.id == action.payload.taskId)
            const foundReactions = state.projects[foundProjectIndex]?.tasks[foundTaskIndex]?.comments[action.payload.commentId]?.reactions
            const foundReaction = foundReactions.findIndex((r: any) => r.email === action.payload.reaction.email);

            foundReactions.filter((fr: any, i) => foundReaction === i)
        },
        editProject: (state, action) => {

        },
        setShowParticipants: (state, action) => {
            state.showParticipants = action.payload;
        },
        setShowActions: (state, action) => {
            state.showActions = action.payload;
        }
    }
})

export const selectProjects = (state: any) => state.projects;

export const {setShowParticipants, addProject, addTask, addComment, addReaction, removeReaction, setShowActions, removeProject, addTicket, addSubTicket, addTicketParticipant, addSubTicketParticipant, addToCheckList} = ProjectsSlice.actions;

export default ProjectsSlice.reducer;