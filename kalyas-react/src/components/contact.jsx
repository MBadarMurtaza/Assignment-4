const Contact = () => {
  return (
    <>
      <div className="w-[1100px] mx-auto flex justify-between items-center mt-16 relative">
        <div className="w-[45%]">
          <h2 className="text-5xl font-bold text-black">
            Want to have a proffesional project?
          </h2>
          <h2 className="mt-10 text-4xl font-bold text-bold">
            Let's talk about it.
          </h2>
          <p className="text-sm font-light text-[#828282] mt-8">
            Est ultricies integer quis auctor elit sed vulputate mi. Lectus
            nulla at volutpat diam ut. Justo donec enim diam vulputate ut
            pharetra sit amet aliquam. Parturient montes nascetur ridiculus mus
            mauris vitae.
          </p>
          <p className="text-sm font-light text-[#828282] mt-8">
            Vel fringilla est ullamcorper eget nulla_ Uma duis convallis
            convallis tellus id interdum velit laoreet id. Donec adipiscing
            tristique risus nec feugiat. Egestas dui id ornare arcu odio ut sem
            nulla.
          </p>
        </div>
        <div className="w-[48%]">
          <form action="" method="post">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name*"
              className="border-[1px] border-black w-full px-4 py-3 placeholder:text-black placeholder:text-sm"
            />
            <div className="flex mt-3 justify-between">
              <input
                type="text"
                name="company"
                id="company"
                placeholder="Company name*"
                className="border-[1px] border-black w-[49%] px-4 py-3 text-black placeholder:text-black placeholder:text-sm"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email address*"
                className="border-[1px] border-black w-[49%] px-4 py-3 text-black placeholder:text-black placeholder:text-sm"
              />
            </div>
            <select
              name="services"
              id="services"
              placeholder="Select Services*"
              className="border-[1px] border-black w-full px-4 py-3 mt-3"
            >
              <option
                value="default"
                className="text-black text-sm font-extralight"
              >
                Select services*
              </option>
              <option value="seo">SEO</option>
              <option value="web">Web Design</option>
              <option value="back-end">Back End</option>
            </select>
            <textarea
              placeholder="Describe your project*"
              name="text-area"
              id="text-area"
              className="border-[1px] border-black mt-3 px-4 py-3 placeholder:text-black placeholder:text-sm w-full h-[171px]"
            ></textarea>
            <button
              type="submit"
              className="w-[1100px] mx-auto bg-[#fb414e] py-2 absolute left-0 -bottom-[4.25rem] font-bold text-[#f8f8f8] text-sm"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Contact;
