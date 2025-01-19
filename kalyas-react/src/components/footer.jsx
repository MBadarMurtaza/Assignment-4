import react from "react";

const Footer = () => {
  return (
    <>
      <footer className="w-full mt-48 bg-[#202b2f] py-20 mb-0">
        <div className="flex justify-between w-[1100px] h-auto mx-auto mt-10">
          <div className="text-white font-bold text-4xl font-Noto">
            <a href="#">
              Kallyas<big className="text-[#fb414e]">.</big>
            </a>
          </div>
          <div className="w-[500px] flex items-center justify-start">
            <ul className="flex justify-around text-white w-full">
              <li>
                <a
                  href="#"
                  className="hover:border-b-2 hover:border-b-[#fb414e] pb-[4px]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:border-b-2 hover:border-b-[#fb414e] pb-[4px]"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:border-b-2 hover:border-b-[#fb414e] pb-[4px]"
                >
                  Works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:border-b-2 hover:border-b-[#fb414e] pb-[4px]"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:border-b-2 hover:border-b-[#fb414e] pb-[4px]"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:border-b-2 hover:border-b-[#fb414e] pb-[4px]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex mt-20 w-[1100px] mx-auto justify-between text-white">
          <h5 className="font-extrabold ">Contact</h5>
          <h5 className="font-extrabold ">Subscribe to newsletter</h5>
        </div>
        <div className="mt-7 w-[1100px] mx-auto text-white flex justify-between">
          <div className="w-[50%] text-[#e3e5e3] text-sm font-semibold">
            <p>758 E, Beechwood Lane Bay Shore, NY 1 1706</p>
            <p>youremail@address.com, +1-202-555-0158</p>
          </div>
          <div className="w-[50%] flex">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your e-mail address:"
              className=" w-[75%] px-4 py-1 text-black active:border-none placeholder:text-sm"
            />
            <button
              type="submit"
              className="w-[25%] bg-[#fb414e] text-white font-bold"
            >
              Submit
            </button>
          </div>
        </div>
        <div className="flex justify-between w-[1100px] mx-auto mt-20">
          <div className="w-[50%]">
            <div className="grid grid-cols-4 w-[60%] gap-0 place-items-start">
              <a href="#">
                <img className="w-[25%]" src="/images/instagram.png" alt="" />
              </a>
              <a href="#">
                <img className="w-[25%]" src="/images/facebook.png" alt="" />
              </a>
              <a href="#">
                <img className="w-[25%]" src="/images/twitter.png" alt="" />
              </a>
              <a href="#">
                <img className="w-[25%]" src="/images/linkedin.png" alt="" />
              </a>
            </div>
          </div>
          <div className="w-[50%] text-end text-[#8b8d8d] text-[13px] font-semibold">
            <p>&copy; 2019.All rights reserved Buy Kellyas Wordpress Theme.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;