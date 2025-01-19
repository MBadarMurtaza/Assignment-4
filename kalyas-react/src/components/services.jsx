import React from "react";
import settings from "../assets/settings.png";
import idea from "../assets/idea.png";
import graphicDesign from "../assets/graphic-design.png";
import laptop from "../assets/laptop.png";
import file from "../assets/file.png";
import user from "../assets/user.png";

const ServicesSection = () => {
  return (
    <>
    <div className="w-[1100px] mx-auto text-center mt-40 flex flex-col">
      <p className="text-[#fb414e] text-xl font-bold uppercase">Services</p>
      <h2 className="text-5xl font-bold mt-5">
        Best services for{" "}
        <strong className="text-[#fb414e] font-[700]">Visual Perfection</strong>
      </h2>
      <div className="text-sm text-[#8d8d8d] w-[600px] self-center mt-10">
        <p>
          Cras sed felis eget velit aliquet sagittis id consectetur. Lectus sit
          amet est placerat in egestas erat imperdiet sed. Amet nisl purus in
          mollis nunc sed id semper risus.
        </p>
      </div>
      <div className="grid w-full h-auto mt-28 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <ServiceCard
          img={settings}
          title="Strategy"
          description="Ullamcorper dignissim cras tincidunt vet lobortis feugiat vivamus. Sed euismod nisi pona lorem mollis turpis dui amet."
        />
        <ServiceCard
          img={idea}
          title="Marketing"
          description="Duis at consectetur lorem donec massa sapien faucibus et. Et malesuada fames ac turpis egestas maecenas pharetra."
        />
        <ServiceCard
          img={graphicDesign}
          title="Technology"
          description="Viverra nibh cras pulvinar mattis nunc sed blandit libero. Lorem ipsum dolor sit amet consectetur adipiscing."
        />
        <ServiceCard
          img={laptop}
          title="Ecommerce"
          description="Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Aliquam ut porttitor a sollicitudin."
        />
        <ServiceCard
          img={file}
          title="Branding"
          description="Orci a scelerisque purus semper eget. Ac ut consequat semper viverra nam libero justo lectus arcu bibendum at laoreet sit."
        />
        <ServiceCard
          img={user}
          title="SEO Identity"
          description="Etiam sit amet nisl purus in mollis nunc. Orci a scelerisque purus semper eget dolor diam quam nulla morbi non arcu."
        />
      </div>
    </div>
    </>
  );
};

const ServiceCard = ({ img, title, description }) => (
  <div className="flex flex-col items-center text-center hover:shadow-lg p-5">
    <img src={img} alt="" className="w-14 mb-5" />
    <h2 className="text-2xl font-bold mb-5">{title}</h2>
    <p className="text-sm text-[#8d8d8d]">{description}</p>
  </div>
);

export default ServicesSection;
