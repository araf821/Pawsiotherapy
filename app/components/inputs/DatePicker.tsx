"use client";

import Button from "../Button";

const DatePicker = () => {
  const today = new Date().toLocaleDateString();

    
  
  return (
    <div className="mx-auto mb-16 flex w-full flex-col items-center justify-center p-4 text-black">
      <div className="w-full max-w-[600px] rounded-md bg-white p-1">
        <input
          type="date"
          id="start"
          value={today}
          min={today}
          max="2023-12-31"
          className={`
        peer
        w-full
        rounded-md border-2
        bg-white
        p-4
        pt-6 font-light outline-none
        transition
        ${errors[id] ? "border-red-700" : "border-neutral-300"}
        ${errors[id] ? "focus:border-red-700" : "focus:border-black"}
        `}
        />
      </div>
      <div className="mt-6 w-full max-w-[600px]">
        <Button label="asdfasdf" onClick={() => {}} />
      </div>
    </div>
  );
};
export default DatePicker;
