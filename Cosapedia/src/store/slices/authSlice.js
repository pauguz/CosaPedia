import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,      // Aquí irá { id, nombre, etc }
    isAuthenticated: false
  },
  reducers: {
    login: (state, action) => {
      state.data = action.payload; // El 'payload' es el usuario que viene del back
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.data = null;
      state.isAuthenticated = false;
    }
  }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;