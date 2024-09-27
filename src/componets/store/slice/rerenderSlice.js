import { createSlice } from "@reduxjs/toolkit";

const reRenderSlice = createSlice({
    name: 'reRender',
    initialState: { reRender: false }, // Single state reRender initialized to false
    reducers: {
        toggleReRender(state) { // Renamed the function to toggle
            state.reRender = !state.reRender; // Toggles the reRender state
        }
    }
});

export const reRenderSliceActions = reRenderSlice.actions; // Consistent naming
export default reRenderSlice.reducer; // Export the reducer
