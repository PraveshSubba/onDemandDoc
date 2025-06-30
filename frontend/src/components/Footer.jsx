import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* left-section */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="assets_logo" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Book appointments with trusted doctors anytime, anywhere. We connect
            you with qualified healthcare professionals to ensure timely care
            and expert medical advice. Your health, our priority.
          </p>
        </div>
        {/* mid-section */}
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* right-section */}
        <div>
          <p className="text-xl font-medium mb-5" >GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91 9945678784</li>
            <li>ondemanddoc@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* copyright */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">© 2023 onDemandDoc - All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
