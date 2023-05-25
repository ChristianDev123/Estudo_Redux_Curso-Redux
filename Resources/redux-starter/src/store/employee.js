import { createSlice } from "@reduxjs/toolkit";

let id = 0;

const employeeSlice = createSlice({
    name:"employee",
    initialState:[],
    reducers:{
        ADD_EMPLOYEE:(state, {payload})=>{
            const { name } = payload;
            state.push({ id:++id, name });
        }
    }
});

export const { ADD_EMPLOYEE } = employeeSlice.actions
export default employeeSlice.reducer;