import { createSlice } from "@reduxjs/toolkit";

// Create the categories slice
const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categoriesList: [], // Initialize with an empty array
    },
    reducers: {
        setCategories(state, action) {
            // Set categories with payload data
            state.categoriesList = action.payload; 
        },
        clearCategories(state) {
            // Clear the categories list
            state.categoriesList = []; 
        }
    }
});

// Export actions and reducer
export const { setCategories, clearCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
