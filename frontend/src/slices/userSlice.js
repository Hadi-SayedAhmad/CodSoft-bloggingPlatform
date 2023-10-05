import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    loading: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
        },
        signInFailure: (state, action) => {
            state.loading = false
        }
    }
});

export const {signInStart, signInFailure, signInSuccess} = userSlice.actions

export default userSlice.reducer