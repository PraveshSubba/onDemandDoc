import { configureStore } from "@reduxjs/toolkit";
import doctorsReducer from "./slices/doctorsSlice";
import userReducer from "./slices/userSlice";

export default configureStore({
  reducer: {
    doctors: doctorsReducer,
    users: userReducer,
  },
});
