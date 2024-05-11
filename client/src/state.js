import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  notifications: null
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
        state = action.payload;
    },

    setNotifications: (state, action) => {
        state.notifications = action.payload.notifications;
    },
  },
});

export const { setMode, setUser, setLoggedIn, setNotifications } = authSlice.actions;
export default authSlice.reducer; 