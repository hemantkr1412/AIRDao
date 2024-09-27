import { createSlice } from "@reduxjs/toolkit";

const accountDetailsSlice = createSlice({
    name: 'accountDetails',
    initialState: {
        id: null,
        account: "" // Initial values
    },
    reducers: {
        setAccountDetails(state, action) {
            const { id, account } = action.payload; // Destructure payload
            state.id = id; // Set id
            state.account = account; // Set account address
        },
        clearAccountDetails(state) {
            state.id = null; // Clear id
            state.account = ""; // Clear account address
        }
    }
});

// Export actions and reducer
export const accountDetailsActions = accountDetailsSlice.actions;
export default accountDetailsSlice.reducer;
