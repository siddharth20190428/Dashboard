import { createSlice } from "@reduxjs/toolkit";

let getUser = JSON.parse(localStorage.getItem("user")) || null;

export const userSlice = createSlice({
    name: "user",
    initialState: { value: getUser },
    reducers: {
        setUser: (state, action) => {
            state.value = action.payload;
        },
        removeUser: (state) => {
            state.value = null;
        },
    },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
