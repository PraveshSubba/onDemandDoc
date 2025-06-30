import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { backendUrl } from "../../config/backend";
import { useSelector } from "react-redux";
import {toast} from 'react-toastify';
import axios from 'axios';

const AddDoctor = () => {

  const [docImg, setDocImg] = useState(null);
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [experience,setExperience] = useState('1 Year');
  const [fees,setFees] = useState('');
  const [about,setAbout] = useState('');
  const [Speciality,setSpeciality] = useState('General Physician');
  const [degree, setDegree] = useState('');
  const[address1,setAdress1] = useState('');
  const[address2,setAdress2] = useState('');
  const atoken = useSelector((state) => state.admin.aToken); 

  const onSubmitHandler = async(event) => {
    event.preventDefault();

    try {
      if(!docImg){
        return toast.error('Image Not Selected')
      }

      const formData = new FormData();
      formData.append('image',docImg);
      formData.append('name',name);
      formData.append('email',email);
      formData.append('password',password);
      formData.append('experience',experience);
      formData.append('fees',Number(fees));
      formData.append('about',about);
      formData.append('speciality',Speciality);
      formData.append('degree',degree);
      formData.append('address',JSON.stringify({line1:address1, line2:address2}));

      const {data} = await axios.post(backendUrl + '/api/admin/add-doctor', formData, {headers:{atoken}});

      if(data.success){
        toast.success(data.message);
        setName('');
        setEmail('');
        setAdress1('');
        setAdress2('');
        setDocImg(null);
        setExperience('');
        setFees('');
        setPassword('');
        setAbout('');
        setDegree('');
        setSpeciality('');
      } else {
        toast.error(data.message);
      }

    } catch (error) {
      console.log(error);
      toast.error('Failed to save data')
    }
  }

  return (
    <form className="w-full m-5 flex items-center" onSubmit={onSubmitHandler}>
      <div className="bg-white px-8 py-6 rounded-2xl w-full max-w-4xl max-h-[86vh] overflow-y-scroll space-y-6 shadow-2xl">
        <p className="mb-3 text-lg font-medium">Add Doctor</p>
        {/* Upload Section */}
        <div className="flex items-center gap-4 mb-4 text-gray-500">
          <label htmlFor="doc-img">
            <img
              className="w-16 h-16 object-cover bg-gray-100 rounded-full cursor-pointer"
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
              alt="upload_area"
            />
          </label>
          <input onChange={(e)=>setDocImg(e.target.files[0])} type="file" id="doc-img" hidden />
          <p className="text-sm">
            Upload doctor <br />
            picture
          </p>
        </div>

        {/* Input Fields */}
        <div className="flex flex-col lg:flex-row lg:flex-wrap gap-6">
          <div className="flex-1 min-w-[200px]">
            <p className="mb-1">Doctor Name</p>
            <input
              onChange={(e)=>setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Name"
              required
              className="w-full px-3 py-2 rounded bg-gray-100"
            />
          </div>

          <div className="flex-1 min-w-[200px]">
            <p className="mb-1">Doctor Email</p>
            <input
              onChange={(e)=>setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email"
              required
              className="w-full px-3 py-2 rounded bg-gray-100"
            />
          </div>

          <div className="flex-1 min-w-[200px]">
            <p className="mb-1">Doctor Password</p>
            <input
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              required
              className="w-full px-3 py-2 rounded bg-gray-100"
            />
          </div>

          <div className="flex-1 min-w-[200px]">
            <p className="mb-1">Experience</p>
            <select className="w-full px-3 py-2 rounded bg-gray-100" onChange={(e)=>setExperience(e.target.value)} value={experience}>
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i + 1} value={`${i + 1} Year`}>
                  {i + 1} Year
                </option>
              ))}
            </select>
          </div>

          <div className="flex-1 min-w-[200px]">
            <p className="mb-1">Fees</p>
            <input
              onChange={(e)=>setFees(e.target.value)}
              value={fees}
              type="number"
              placeholder="Fees"
              required
              className="w-full px-3 py-2 rounded bg-gray-100"
            />
          </div>

          <div className="flex-1 min-w-[200px]">
            <p className="mb-1">Speciality</p>
            <select className="w-full px-3 py-2 rounded bg-gray-100" onChange={(e)=>setSpeciality(e.target.value)}
              value={Speciality}>
              <option value="General Physician">General Physician</option>
              <option value="Gynecologist">Gynecologist</option>
              <option value="Dermatologist">Dermatologist</option>
              <option value="Pediatricians">Pediatricians</option>
              <option value="Neurologist">Neurologist</option>
              <option value="Gastroenterologist">Gastroenterologist</option>
            </select>
          </div>

          <div className="flex-1 min-w-[200px]">
            <p className="mb-1">Education</p>
            <input
              onChange={(e)=>setDegree(e.target.value)}
              value={degree}
              type="text"
              placeholder="Education"
              required
              className="w-full px-3 py-2 rounded bg-gray-100"
            />
          </div>

          <div className="flex-1 min-w-[200px]">
            <p className="mb-1">Address</p>
            <input
              onChange={(e)=>setAdress1(e.target.value)}
              value={address1}
              type="text"
              placeholder="Address 1"
              required
              className="w-full px-3 py-2 rounded mb-2 bg-gray-100"
            />
            <input
              onChange={(e)=>setAdress2(e.target.value)}
              value={address2}
              type="text"
              placeholder="Address 2"
              required
              className="w-full px-3 py-2 rounded bg-gray-100"
            />
          </div>
        </div>

        {/* About Doctor */}
        <div>
          <p className="mb-1">About Doctor</p>
          <textarea
            onChange={(e)=>setAbout(e.target.value)}
            value={about}
            placeholder="Write about doctor"
            rows={5}
            required
            className="w-full px-3 py-2 rounded bg-gray-100"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded hover:bg-blue-600 transition cursor-pointer"
          >
            Add Doctor
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddDoctor;
