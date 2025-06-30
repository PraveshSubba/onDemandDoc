import { useSelector, useDispatch } from "react-redux";
import { getAllDoctors, changeAvaibility } from "../../redux/slices/adminSlice";
import { useEffect } from "react";

const DoctorsList = () => {
  const dispatch = useDispatch();
  const atoken = useSelector((state) => state.admin.aToken);
  const doctors = useSelector((state) => state.admin.doctors);
  
  useEffect(() => {
    if (atoken) {
      dispatch(getAllDoctors());
    }
  }, [atoken]);

  return (
    <div className="m-5 max-h-[90vh] overflow-y-scroll">
      <h1 className="text-lg font-medium">All Doctors</h1>
      <div className="w-ful flex flex-wrap gap-4 pt-5 gap-y-6">
        {
          doctors.map((item, index)=>(
            <div key={index} className="border border-indigo-200 rounded-xl max-w-56 overflow-hidden cursor-pointer group">
              <img src={item.image} alt="image" className="bg-indigo-50 group-hover:bg-blue-500 transition-all duration-500"/>
              <div className="p-4">
                <p className="text-neutral-800 font-md text-lg">{item.name}</p>
                <p className="text-zinc-600 text-sm">{item.speciality}</p>
                <div className="mt-2 flex items-center gap-1 text-sm">
                  <input onChange={()=>dispatch(changeAvaibility(item._id))} type="checkbox" checked={item.available} className="cursor-pointer"/>
                  <p>Available</p>
                </div>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  );
};

export default DoctorsList;
