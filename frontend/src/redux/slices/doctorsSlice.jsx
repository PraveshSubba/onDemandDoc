import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { backendUrl } from "../../config/backend.js";

export const getDoctorsData = createAsyncThunk(
  "doctor/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(backendUrl + "/api/doctor/list");

      if (data.success) {
        return data.doctors;
      } else {
        toast.error(data.message || "Failed to fetch doctors");
        return rejectWithValue(data.message);
      }
    } catch (err) {
      toast.error(err.data?.message || "Something went wrong");
      return rejectWithValue(err?.data || err.message);
    }
  }
);

const doctorsSlice = createSlice({
  name: "doctors",
  initialState: {
    list: [],
    currencySymbol: "₹",
    token: localStorage.getItem("token") || "",
  },

  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },

    clearUserState: (state) => {
      state.token = "";
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDoctorsData.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export const { setToken,clearUserState } = doctorsSlice.actions;
export default doctorsSlice.reducer;
