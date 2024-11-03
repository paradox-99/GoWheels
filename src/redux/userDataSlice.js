import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
    name: "user",
    initialState: {
        userData: null,
    },
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload;
        },
    },
});

export const {setUserData} = userDataSlice.actions;
export default userDataSlice.reducer;