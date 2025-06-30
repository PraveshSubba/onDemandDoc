import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { backendUrl } from "../../config/backend.js";

// Thunk
export const getUsersData = createAsyncThunk(
  "userData/fetchAll",
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = getState().doctors.token;

      const { data } = await axios.get(backendUrl + "/api/user/get-profile", {
        headers: { token },
      });

      if (data.success) {
        return data.userData;
      } else {
        toast.error(data.message || "Failed to fetch user data");
        return rejectWithValue(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Slice
const userSlice = createSlice({
  name: "userData",
  initialState: {
    userData: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsersData.fulfilled, (state, action) => {
      state.userData = action.payload;
    });
  },
});

export default userSlice.reducer;
