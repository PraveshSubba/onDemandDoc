import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div>
        <p className="text-center text-2xl pt-10 text-gray-500">
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt="about_image"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            OnDemand Doc is a digital healthcare platform designed to simplify
            the way patients connect with medical professionals. Whether it's a
            routine check-up, specialist consultation, or follow-up visit, we
            make scheduling seamless and accessible with just a few taps.
          </p>

          <p>
            Our platform brings together a trusted network of qualified doctors,
            real-time appointment availability, and secure teleconsultation
            options—empowering users to take control of their health, anytime
            and anywhere.
          </p>

          <b className="text-gray-800">Our Vision</b>

          <p>
            We envision a future where healthcare is convenient, personalized,
            and always within reach. OnDemand Doc aims to bridge the gap between
            patients and doctors through technology, ensuring timely care and a
            healthier tomorrow for all.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
          <b>Efficiency:</b>
          <p>
            Our platform streamlines the entire appointment process—from
            searching for the right specialist to confirming bookings in
            seconds. Say goodbye to long waiting times and hello to instant,
            reliable access to care.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
          <b>Convenience:</b>
          <p>
            Book appointments anytime, anywhere. With real-time availability,
            flexible time slots, and secure teleconsultation options, OnDemand
            Doc brings healthcare to your fingertips—literally.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
          <b>Personalization:</b>
          <p>
            We tailor your experience based on your health history and
            preferences, offering doctor suggestions, reminders, and services
            that fit your unique needs and lifestyle.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
