import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
    name: 'wallet',
    initialState: { isConnected: false }, // Correct spelling
    reducers: {
        connect(state) {
            state.isConnected = true; // Correct spelling
        },
        disconnect(state) {
            state.isConnected = false; // Correct spelling
        }
    }
});

export const walletActions = walletSlice.actions; // Consistent naming
export default walletSlice.reducer; // Export the reducer
