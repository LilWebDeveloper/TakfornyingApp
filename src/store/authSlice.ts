import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
    name: null,
    employeeId: null,
    role: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCurrentToken(state, action){
            state.token = action.payload
        },
        setCurrentName(state, action){
            state.name = action.payload
        },
        setCurrentEmployeeId(state, action){
            state.employeeId = action.payload
        },
        setCurrentRole(state, action){
            state.role = action.payload
        },
    }
})

export const authActions = authSlice.actions

export default authSlice