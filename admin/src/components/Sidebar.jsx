import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  const aToken = useSelector((state) => state.admin.aToken);

  return (
    <div className="min-h-screen bg-white border-r">
      {aToken && (
        <ul className="text-[#515151] mt-5">
          <NavLink
            to={"/admin"}
            className={({isActive}) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 ${
                isActive ? "bg-[#F2F3FF] border-primary border-r-4" : ""
              }`
            }
          >
            <img src={assets.home_icon} alt="home_icon" />
            <p>Dashboard</p>
          </NavLink>

          <NavLink
            to={"/all-appointments"}
            className={({isActive}) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 ${
                isActive ? "bg-[#F2F3FF] border-primary border-r-4" : ""
              }`
            }
          >
            <img src={assets.appointment_icon} alt="appointment_icon" />
            <p>Appointments</p>
          </NavLink>

          <NavLink
            to={"/add-doctor"}
            className={({isActive}) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 ${
                isActive ? "bg-[#F2F3FF] border-primary border-r-4" : ""
              }`
            }
          >
            <img src={assets.add_icon} alt="add_icon" />
            <p>Add Doctor</p>
          </NavLink>

          <NavLink
            to={"/doctor-list"}
            className={({isActive}) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 ${
                isActive ? "bg-[#F2F3FF] border-primary border-r-4" : ""
              }`
            }
          >
            <img src={assets.people_icon} alt="people_icon" />
            <p>Doctor List</p>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
