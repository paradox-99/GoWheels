import { createSlice } from "@reduxjs/toolkit";

const agencyDataSlice = createSlice({
    name: "agency",
    initialState: {
        agencyData: null,
    },
    reducers: {
        setAgencyData: (state, action) => {
            state.agencyData=action.payload;
        },
    },
});

export const { setAgencyData } = agencyDataSlice.actions;
export default agencyDataSlice.reducer;