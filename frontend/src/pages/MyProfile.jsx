import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsersData } from "../redux/slices/userSlice";
import { backendUrl } from "../config/backend.js";
import axios from "axios";
import { assets } from "../assets/assets";
import { toast } from "react-toastify";

const MyProfile = () => {
  const dispatch = useDispatch();
  const reduxUser = useSelector((state) => state.users.userData);
  const token = useSelector((state) => state.doctors.token);

  const [userData, setUserData] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(null);

  // Fetch user data if not already available
  useEffect(() => {
    if (!reduxUser) dispatch(getUsersData());
  }, [reduxUser, dispatch]);

  // Sync local state
  useEffect(() => {
    if (reduxUser) setUserData(reduxUser);
  }, [reduxUser]);

  const updateUserProfileData = async () => {
    try {
      const formData = new FormData();
      formData.append("name", userData.name);
      formData.append("phone", userData.phone);
      formData.append("address", JSON.stringify(userData.address));
      formData.append("gender", userData.gender);
      formData.append("dob", userData.dob);
      if (image) formData.append("image", image);

      const { data } = await axios.post(
        backendUrl + "/api/user/update-profile",
        formData,
        { headers: { token } }
      );

      if (data.success) {
        toast.success(data.message);
        dispatch(getUsersData());
        setIsEdit(false);
        setImage(null);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  if (!userData) return <p>Loading...</p>;

  const handleInput = (field, value) =>
    setUserData((prev) => ({ ...prev, [field]: value }));

  const handleAddress = (field, value) =>
    setUserData((prev) => ({
      ...prev,
      address: { ...prev.address, [field]: value },
    }));

  return (
    <div className="max-w-lg flex flex-col gap-4 text-sm">
      {/* Profile Image */}
      {isEdit ? (
        <label htmlFor="image">
          <div className="inline-block relative cursor-pointer">
            {image || userData.image ? (
              <img
                className="w-36 h-36 object-cover rounded"
                src={
                  image instanceof File
                    ? URL.createObjectURL(image)
                    : userData.image || null
                }
                alt="profile"
              />
            ) : null}

            {!image && (
              <img
                className="w-10 absolute bottom-2 right-2"
                src={assets.upload_icon}
                alt="upload"
              />
            )}
          </div>
          <input
            id="image"
            type="file"
            hidden
            onChange={(e) => setImage(e.target.files[0])}
          />
        </label>
      ) : (
        userData.image && (
          <img
            className="w-36 h-36 object-cover rounded"
            src={userData.image}
            alt="profile"
          />
        )
      )}

      {/* Name */}
      {isEdit ? (
        <input
          className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
          value={userData.name}
          onChange={(e) => handleInput("name", e.target.value)}
        />
      ) : (
        <p className="text-3xl font-semibold">{userData.name}</p>
      )}

      <hr className="border-zinc-300" />

      {/* Contact Info */}
      <div>
        <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-3 mt-3 text-neutral-700">
          <p className="font-medium">Email:</p>
          <p className="text-blue-500">{userData.email}</p>

          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input
              className="bg-gray-100 max-w-52"
              value={userData.phone}
              onChange={(e) => handleInput("phone", e.target.value)}
            />
          ) : (
            <p>{userData.phone}</p>
          )}

          <p className="font-medium">Address:</p>
          {isEdit ? (
            <div className="flex flex-col gap-1">
              <input
                className="bg-gray-50"
                value={userData.address.line1}
                onChange={(e) => handleAddress("line1", e.target.value)}
              />
              <input
                className="bg-gray-50"
                value={userData.address.line2}
                onChange={(e) => handleAddress("line2", e.target.value)}
              />
            </div>
          ) : (
            <p className="text-gray-500">
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>

      {/* Basic Info */}
      <div>
        <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-3 mt-3 text-neutral-700">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select
              className="bg-gray-100 max-w-24"
              value={userData.gender}
              onChange={(e) => handleInput("gender", e.target.value)}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p>{userData.gender}</p>
          )}

          <p className="font-medium">Birthday:</p>
          {isEdit ? (
            <input
              className="bg-gray-100 max-w-28"
              type="date"
              value={userData.dob}
              onChange={(e) => handleInput("dob", e.target.value)}
            />
          ) : (
            <p>{userData.dob}</p>
          )}
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-8">
        {isEdit ? (
          <button
            onClick={updateUserProfileData}
            className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition"
          >
            Save Information
          </button>
        ) : (
          <button
            onClick={() => setIsEdit(true)}
            className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
