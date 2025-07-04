import { assets } from "../assets/assets";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/slices/adminSlice";
import { backendUrl } from "../config/backend";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [state, setState] = useState("Admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (state === "Admin") {
        const { data } = await axios.post(backendUrl + "/api/admin/login", {
          email,
          password,
        });

        if (data.success) {
          dispatch(setToken(data.token));
        } else {
          toast.error(data.message);
        }
      } else {

      }
    } catch (error) {}
  };

  return (
    <form className="min-h-[80vh] flex items-center" onSubmit={onSubmitHandler}>
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 rounded-xl text-[#5E5E5E] text-sm shadow-lg">
        <p className="text-2xl font-semibold m-auto ">
          <span className="primary">{state}</span> Login
        </p>
        <div className="w-full">
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            type="email"
            required
            placeholder="email"
          />
        </div>

        <div className="w-full">
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            type="password"
            required
            placeholder="password"
          />
        </div>
        <button
          type="submit"
          onClick={() => {}}
          className="bg-primary text-white w-full py-1.5 rounded-md text-base cursor-pointer"
        >
          login
        </button>
        {state === "Admin" ? (
          <p>
            Doctor Login?{" "}
            <span
              className="primary cursor-pointer underline"
              onClick={() => setState("Doctor")}
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Admin Login?{" "}
            <span
              className="primary cursor-pointer underline"
              onClick={() => setState("Admin")}
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
