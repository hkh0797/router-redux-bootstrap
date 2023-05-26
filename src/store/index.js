import { configureStore } from "@reduxjs/toolkit";
import posts from "./postSlice";
import auth from "./authSlice";
import board from "./boardSlice";

const store = configureStore({
  reducer: { posts, auth, board },
});

export default store;
