import FaqSection from "./FaqSection";

const AssuranceSection = () => {
  return (
    <div className="mx-auto w-full max-w-[2520px] bg-white py-4 sm:px-6 md:px-10 xl:px-20">
      <div className="my-6 flex flex-col px-2">
        <div className="flex flex-col gap-1 text-center ">
          <p className="text-2xl font-semibold text-zinc-800 sm:text-3xl md:text-4xl lg:text-5xl">
            We Are Here For You
          </p>
          <p className="text-md font-light md:text-lg">
            <span className="p-1 bg-zinc-800 text-white rounded-lg">

            And we&rsquo;re here to stay!
            </span>
          </p>
        </div>
        <FaqSection />
      </div>
    </div>
  );
};
export default AssuranceSection;
