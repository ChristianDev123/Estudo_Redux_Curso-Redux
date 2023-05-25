import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../utils/http';
import apiCall from './GeneralActionAPI'
let id = 0;

const initialState = {
    task:[],
    loading: false,
    error: null
}

export const fetchTask = createAsyncThunk("fetchTasks", async (a, {rejectWithValue})=>{
    try{
        const response = await axios.get("http://localhost:5000/api/tasksasd");
        return { task:response.data };
    }catch({message}){
        return rejectWithValue({ error: message });
    }
})

const taskSlice = createSlice({
    name:"tasks",
    initialState,
    reducers:{
        getTasks:(state, action)=>{
            state.task = action.payload;
        },

        addTask: (state, action)=>{
            state.task.push({
                id: ++id,
                task: action.payload.task,
                completed: false
            })
        },

        removeTask: (state, action)=>{
            const index = state.task.findIndex((task)=> task.id === action.payload.id);
            state.task.splice(index,1);
        },

        completeTask: (state, action)=>{
            const index = state.task.findIndex((task)=>task.id === action.payload.id);
            state.task[index].completed = true;
        }
    },
    extraReducers:{
        [fetchTask.fulfilled]:(state, {payload:{task}})=>{
            state.task = task;
            state.loading = false;
        },
        [fetchTask.pending]:(state)=>{
            state.loading = true;
        },
        [fetchTask.rejected]:(state, {payload:{error}})=>{
            state.error = error;
            state.loading = false;
        }
    }
}); 

export const { addTask, completeTask, removeTask, getTasks } = taskSlice.actions;
export default taskSlice.reducer;

export function reqTasks({ method, data }){
    return apiCall({
        url:"/tasks",
        onSucess: getTasks.type,
        onError: removeTask.type,
        method,
        data
    })
}

export function patchTask({id , data}){
    return apiCall({
        url:`/tasks/${id}`,
        onSucess:getTasks.type,
        method:"patch",
        data
    });
}

export function deleteTask({id}){
    return apiCall({
        url:`/tasks/${id}`,
        method:"delete",
        onSucess: removeTask.type
    })
}