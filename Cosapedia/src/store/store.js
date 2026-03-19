import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    user: userReducer, // El estado global tendrá una propiedad 'user'
  }
});