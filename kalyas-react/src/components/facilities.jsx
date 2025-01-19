import hood from "../assets/Hood.jpg";
import lap from "../assets/lap.jpg";
import nike from "../assets/nike.jpg";
import counting from "../assets/Counting.jpg";
import bag from "../assets/mobilePhone.jpg";
import earth from "../assets/earth.jpeg";
import dunlao from "../assets/nathan.jpg";
import believe from "../assets/believe.jpg";
const Facilities = () => {
  return (
    <>
      <div className="mt-20 text-sm text-[#8d8d8d] w-[600px] mx-auto">
        <ul className="list-none flex justify-around items-center">
          <li>
            <a
              href="#"
              className="hover:border-b-2 hover:border-black hover:text-black pb-1"
            >
              ALL
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:border-b-2 hover:border-black hover:text-black pb-1"
            >
              WEB
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:border-b-2 hover:border-black hover:text-black pb-1"
            >
              ADVERTISING
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:border-b-2 hover:border-black hover:text-black pb-1"
            >
              BRANDING
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:border-b-2 hover:border-black hover:text-black pb-1"
            >
              DESIGN
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:border-b-2 hover:border-black hover:text-black pb-1"
            >
              PHOTOGRAPHY
            </a>
          </li>
        </ul>
      </div>
      <div className="w-[1400px] mx-auto grid grid-cols-4 gap-2 mt-16">
        <div>
          <img src={hood} alt="" className="h-[260px] w-full" />
        </div>
        <div>
          <img src={lap} alt="" className="h-[260px] w-full" />
        </div>
        <div>
          <img src={nike} alt="" className="h-[260px] w-full" />
        </div>
        <div>
          <img src={counting} alt="" className="h-[260px] w-full" />
        </div>
        <div>
          <img src={bag} alt="" className="h-[260px] w-full" />
        </div>
        <div>
          <img src={earth} alt="" className="h-[260px] w-full" />
        </div>
        <div>
          <img src={dunlao} alt="" className="h-[260px] w-full" />
        </div>
        <div>
          <img src={believe} alt="" className="h-[260px] w-full" />
        </div>
      </div>
    </>
  );
};

export default Facilities;