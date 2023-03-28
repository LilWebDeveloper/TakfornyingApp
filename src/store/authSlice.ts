import { createSlice } from "@reduxjs/toolkit";
import { Auth } from "../interfaces/StateTypes";

const initialState: Auth = {
    token: null,
    name: null,
    employeeId: null,
    role: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCurrentUserInfo(state, action){
            state.token = action.payload.token
            state.name = action.payload.name
            state.employeeId = action.payload.employeeId
            state.role = action.payload.role
        }
    }
})

export const authActions = authSlice.actions

export default authSlice