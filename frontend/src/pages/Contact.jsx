import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gary-500">
        <p>
          CONTACT <span className="text-gray-700 font-bold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.contact_image}
          alt="contact_image"
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600">OUR OFFICE</p>
          <p className="text-gray-500 ">
            3434,Rajnagar,Raipuan Station <br />
            Suite 564, Rajasthan, India
          </p>
          <p className="text-gray-500 ">
            Tel:(416) 555-9086 <br />
            Email: webdev@gmail.com
          </p>
          <p className="font-semibold text-lg text-gray-600">
            Careers at OnDemandDoc
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job opennings.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
