import Fast from "../assets/Fast_company.png";
import Southern from "../assets/Southern_company.png";
import Third from "../assets/3rd_company.png";
import Vips from "../assets/vips_company.png";
const Brand = () => {
  return (
    <>
      <div className="w-[1400px] mt-24 mx-auto bg-[#202b2f]">
        <div className="w-[1100px] mx-auto flex justify-between place-items-center py-20">
          <div className="w-[45%] h-full grid grid-cols-2 gap-4 place-items-center">
            <img src={Fast} alt="" className="w-[100%]" />
            <img src={Southern} alt="" className="w-[100%]" />
            <img src={Third} alt="" className="w-[100%]" />
            <img src={Vips} alt="" className="w-[100%]" />
          </div>
          <div className="w-[50%] h-full text-center">
            <h1 className="text-4xl font-bold text-[#e3e5e3] text-center">
              Clients with projects proudly crafted by our agency.
            </h1>
            <p className="font-extralight text-sm text-[#e3e5e3] mt-10">
              Aenean sed adipiscing diam donec. Est placerat in egestas erat_
              Cras fermentum odio eu feugiat pretium nibh ipsum consequat Enim
              eu turpis egestas pretium aenean pharetra magna ac placerat Lacus
              luctus accumsan tortor posuere.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
