import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";
import { backendUrl } from "../config/backend";
import { toast } from "react-toastify";
import { getDoctorsData } from "../redux/slices/doctorsSlice";
import axios from "axios";
import { useDispatch } from "react-redux";

const Appointment = () => {
  const { docId } = useParams();
  const doctors = useSelector((state) => state.doctors.list);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const token = useSelector((state) => state.doctors.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currency = useSelector((state) => state.doctors.currencySymbol);
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = () => {
    const doctorInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(doctorInfo);
  };

 const getAvailableSlots = () => {
  setDocSlots([]);

  //getting current date
  let today = new Date();

  for (let i = 0; i < 7; i++) {
    //getting date with index
    let currentDate = new Date(today);
    currentDate.setDate(today.getDate() + i);

    if (i === 0 && today.getHours() >= 21) {
      continue; // Skip today
    }

    //setting end time of the date with index
    let endTime = new Date(currentDate);
    endTime.setHours(21, 0, 0, 0);
    
    //  Check if today's date and handle hours properly
    if (today.getDate() === currentDate.getDate()) {
      currentDate.setHours(
        today.getHours() >= 10 ? today.getHours() + 1 : 10,
        today.getMinutes() > 30 ? 0 : 30,
        0,
        0
      );
    } else {
      currentDate.setHours(10, 0, 0, 0);
    }

    let timeSlots = [];

    while (currentDate < endTime) {
      let formattedTime = currentDate.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      let day = currentDate.getDate();
      let month = currentDate.getMonth() + 1;
      let year = currentDate.getFullYear();

      const slotDate = day + "_" + month + "_" + year;
      const slotTime = formattedTime;

      // Safer check for slotsBooked
      const isSlotAvailable = !(
        docInfo?.slotsBooked?.[slotDate]?.includes(slotTime) ?? false
      );

      if (isSlotAvailable) {
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });
      }

      //increment time by 30 minutes
      currentDate.setMinutes(currentDate.getMinutes() + 30);
    }

    // Fix: Only add if there are slots
    if (timeSlots.length > 0) {
      setDocSlots((prev) => [...prev, timeSlots]);
    }
  }
};
  const bookAppointment = async () => {
    if (!token) {
      toast.warn("Login to book Appointment");
      return navigate("/login");
    }
    try {
      const date = docSlots[slotIndex][0].datetime;
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();

      const slotDate = day + "_" + month + "_" + year;

      const { data } = await axios.post(
        backendUrl + "/api/user/book-appointment",
        {
          docId,
          slotDate,
          slotTime,
        },
        {
          headers: { token },
        }
      );

      if (data.success) {
        toast.success(data.message);
        dispatch(getDoctorsData());
        navigate("/my-appointments");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots();
    }
  }, [docInfo]);

  useEffect(() => {
    //console.log("docSlots", docSlots);
  }, [docSlots]);

  return (
    docInfo && (
      <div>
        {/* doctor info */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-primary w-full sm:max-w-72 rounded-lg"
              src={docInfo.image}
              alt="doc_image"
            />
          </div>

          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            {/* doc info */}
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name}
              <img
                className="w-5"
                src={assets.verified_icon}
                alt="verified_icon"
              />
            </p>
            <div className="flex item-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>

            {/* about */}
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About <img src={assets.info_icon} alt="info_icon" />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>
            <p className="text-gray-500 font-medium mt-4">
              Appointment fee:{" "}
              <span className="text-gray-600">
                {currency}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>

        {/* Booking slots */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Booking Slots</p>
          <div className="flex gap-4 items-center w-full overflow-x-scroll mt-4">
            {docSlots.length &&
              docSlots.map((item, index) => (
                <div
                  onClick={() => setSlotIndex(index)}
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                    slotIndex === index
                      ? "bg-primary text-white"
                      : "border border-gray-200"
                  }`}
                  key={index}
                >
                  <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>

          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
            {docSlots.length &&
              docSlots[slotIndex].map((item, index) => (
                <p
                  onClick={() => setSlotTime(item.time)}
                  className={`tex-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer  ${
                    item.time === slotTime
                      ? "bg-primary text-white"
                      : "text-gray-300 border border-gray-300"
                  }`}
                  key={index}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>

          <button
            onClick={bookAppointment}
            className="bg-primary rounded-full text-white text-sm font-light px-14 py-3 my-6 cursor-pointer"
          >
            Book an appointment
          </button>
        </div>
        {/* Related Doctors */}
        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      </div>
    )
  );
};

export default Appointment;
