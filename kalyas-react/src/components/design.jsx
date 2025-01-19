import database from "../assets/data_base.png";
import frame from "../assets/frame_work.png";
import girl from "../assets/girl_sitting.png";

const Design = () => {
    return (
        <>
        <div className="flex w-[1400px] bg-[#f8f8f8] mx-auto -mt-5 pt-5jusitfy-between">
        <div className="w-[50%] place-items-center">
            <div className="w-[60%] mt-20">
                <h1 className="text-3xl font-bold text-[#1e1e1e]">Beautifully handcrafted
                    designs for your website</h1>
                <p className="mt-10 text-[#838383] text-sm font-extralight text-left">Enim ut tellus elementum sagittis
                    vitae et leo duis. Feugiat sed lectus vestibulum
                    mattis ullamcorper_ Aenean et tortor at risus viverra adipiscing at. Neque aliquam
                    vestibulum morbi blandit cursus risus at.</p>
                <div className="flex justify-between items-center mt-10">
                    <div className="w-[47%] mt-">
                        <img className="w-[30%]" src={database} alt="" />
                        <h4 className="mt-5 text-[#616161] font-bold text-md">Secured Database</h4>
                        <p className="mt-4 font-light text-[#828282] text-[12px]">Ullamcorper dignissim cras tincidunt vet
                            lobonis feugiat vivamus. Sed euismod nisi
                            porta lorem mollis turpis.</p>
                    </div>
                    <div className="w-[47%] mt-">
                        <img className="w-[30%]" src={frame} alt="" />
                        <h4 className="mt-5 text-[#616161] font-bold text-md">Modern Framework</h4>
                        <p className="mt-4 font-light text-[#828282] text-[12px]">Pharetra massa massa ultricies mi quis
                            hendrerit. Interdum consectetur libero
                            nisl tincidunt eget.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-[50%] justify-self-end h-full">
            <img src={girl} alt="" />
        </div>
    </div>
        </>
    )
}
export default Design;