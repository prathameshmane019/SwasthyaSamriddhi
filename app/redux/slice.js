import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    setUserFromLocalStorage: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { login, logout, setUserFromLocalStorage } = userSlice.actions;

// Asynchronous action creator to load user data from local storage
export const loadUserFromLocalStorage = () => (dispatch) => {
  if (typeof window !== "undefined") { // Check if running in the client-side environment
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        dispatch(setUserFromLocalStorage(user));
      }
    } catch (error) {
      console.error("Error loading user from local storage:", error);
    }
  }
};

// Asynchronous action creator to save user data to local storage
export const saveUserToLocalStorage = (user) => (dispatch) => {
  if (typeof window !== "undefined") { // Check if running in the client-side environment
    try {
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      console.error("Error saving user to local storage:", error);
    }
  }
};

// Asynchronous action creator to clear user data from local storage
export const clearUserFromLocalStorage = () => (dispatch) => {
  if (typeof window !== "undefined") { // Check if running in the client-side environment
    try {
      localStorage.removeItem("user");
    } catch (error) {
      console.error("Error clearing user from local storage:", error);
    }
  }
};

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
