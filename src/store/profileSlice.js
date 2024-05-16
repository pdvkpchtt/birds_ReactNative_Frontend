import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  password: "",
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    editProfileInfo: (state, action) => {
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
      };
    },
    logIn: (state, action) => {
      return {
        ...state,
        authorized: true,
      };
    },
    logOut: (state, action) => {
      return {
        ...state,
        authorized: false,
      };
    },
  },
});
