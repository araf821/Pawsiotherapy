import FaqSection from "./FaqSection";

const AssuranceSection = () => {
  return (
    <div className="mx-auto w-full max-w-[2520px] bg-gray-800 pb-20 pt-3 sm:px-6 md:px-10 xl:px-20">
      <div className="my-6 flex flex-col px-2 py-10">
        <div className="flex flex-col gap-2 text-center ">
          <p className="text-xl font-semibold text-white sm:text-2xl md:text-3xl lg:text-5xl">
            We Are Here For You
          </p>
          <p className="text-md font-light text-neutral-400 sm:text-lg lg:text-lg">
            And we&rsquo;re here to stay!
          </p>
        </div>
        <FaqSection />
      </div>
    </div>
  );
};
export default AssuranceSection;
