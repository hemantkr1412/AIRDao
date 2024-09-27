import { configureStore } from '@reduxjs/toolkit';
import walletReducer from './slice/walletSlice'; 
import accountDetailsReducer from './slice/accountDetailsSlice'; 
import categoriesReducer from './slice/categoriesSlice'; // Import the categories reducer
import reRenderReducer from './slice/rerenderSlice';

export const store = configureStore({
    reducer: {
        wallet: walletReducer,
        accountDetails: accountDetailsReducer,
        categories: categoriesReducer ,// Add categories reducer
        reRender: reRenderReducer,
    }
});
