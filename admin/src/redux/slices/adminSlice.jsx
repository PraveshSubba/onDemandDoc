import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { backendUrl } from "../../config/backend";
import { toast } from "react-toastify";

// Async thunk to fetch doctors
export const getAllDoctors = createAsyncThunk(
  "admin/allDoctors",
  async (_, { getState, rejectWithValue }) => {
    try {
      const aToken = getState().admin.aToken;

      const { data } = await axios.post(
        backendUrl + "/api/admin/all-doctors",
        {},
        { headers: { aToken } }
      );

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


export const changeAvaibility = createAsyncThunk(
  "admin/availability",
  async (doctorId, { getState, rejectWithValue, dispatch }) => {
    try {
      const aToken = getState().admin.aToken;

      const { data } = await axios.post(
        backendUrl + "/api/admin/change-avaibility",
        { docId: doctorId },
        { headers: { aToken } }
      );

      if (data.success) {
         toast.success(data.message);
        // Refresh doctors after changing availability
        dispatch(getAllDoctors());
        // Don't return anything; UI already reacts to refreshed data
        return;
      } else {
        toast.error(data.message || "Failed to change availability");
        return rejectWithValue(data.message);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
      return rejectWithValue(err?.response?.data || err.message);
    }
  }
);


const adminSlice = createSlice({
  name: "admin",
  initialState: {
    aToken: localStorage.getItem("atoken") || "",
    doctors: [],
  },

  reducers: {
    setToken: (state, action) => {
      state.aToken = action.payload;
      localStorage.setItem("atoken", action.payload);
    },
    clearAdminState: (state) => {
      state.aToken = "";
      state.doctors = [];
      localStorage.removeItem("atoken");
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getAllDoctors.fulfilled, (state, action) => {
      state.doctors = action.payload;
    });
  },
});

export const { setToken, clearAdminState } = adminSlice.actions;
export default adminSlice.reducer;
