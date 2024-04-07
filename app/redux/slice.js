import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
    setUserFromLocalStorage: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { login, logout, setUserFromLocalStorage } = userSlice.actions;

export const loadUserFromLocalStorage = () => (dispatch) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch(setUserFromLocalStorage(user));
    }
  } catch (error) {
    console.error("Error loading user from local storage:", error);
  }
};

export const saveUserToLocalStorage = (user) => {
  try {
    localStorage.setItem("user", JSON.stringify(user));
  } catch (error) {
    console.error("Error saving user to local storage:", error);
  }
};

export const clearUserFromLocalStorage = () => {
  try {
    localStorage.removeItem("user");
  } catch (error) {
    console.error("Error clearing user from local storage:", error);
  }
};

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
