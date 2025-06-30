import React from "react";
import { assets } from "../assets/assets";
import { useSelector, useDispatch } from "react-redux";
import { clearAdminState } from "../redux/slices/adminSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const aToken = useSelector((state) => state.admin.aToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    navigate('/')
    dispatch(clearAdminState());
  };

  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white">
      <div className="flex items-center gap-2 text-sm">
        <img
          className="w-40 sm:w-60 cursor-pointer"
          src={assets.admin_logo}
          alt="admin_logo"
        />
        <p className="border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600">
          {aToken ? "Admin" : "Doctor"}
        </p>
      </div>
      <button
        onClick={() => logout()}
        className="bg-primary text-white text-sm px-8 py-2 rounded-full cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
