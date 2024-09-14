import { createSlice } from "@reduxjs/toolkit";
import { projects } from "../../lib/data";

export const TasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        checkedTasks: [],
        tasksCompleted: [],
        projects: projects
    },
    reducers: {
        checkTask: (state: any, action: any) => {
            state.checkedTasks.push(action.payload)
        }, 
        uncheckTask: (state: any, action: any) => {
            state.checkedTasks = state.checkedTasks.filter((task: any) => task.taskId !== action.payload.taskId)
        },
        removeChecks: (state: any) => {
            state.checkedTasks = []
        },
        completeTasks: (state: any) => {
            state.tasksCompleted = state.checkedTasks;
            state.checkedTasks = [];
        }
    }
}) 

export const selectCheckedTasks = (state: any) => state.tasks.checkedTasks;
export const selectTasksCompleted = (state: any) => state.tasks.tasksCompleted;

export const {checkTask, uncheckTask, removeChecks, completeTasks} = TasksSlice.actions;

export default TasksSlice.reducer;