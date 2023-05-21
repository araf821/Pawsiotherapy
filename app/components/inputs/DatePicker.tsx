"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { SafeUser } from "@/app/types";
import { useRouter } from "next/navigation";

interface DatePickerProps {
  currentUser?: SafeUser | null;
  provider?: SafeUser | null;
  animalId: string;
}

const DatePicker: React.FC<DatePickerProps> = ({
  animalId,
  currentUser,
  provider,
}) => {
  const [date, setDate] = useState("");

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      date: Date,
      providerId: provider?.id,
      bookerId: currentUser?.id,
      animalId: animalId,
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    axios
      .post("/api/sessions", {
        ...data,
      })
      .then(() => {
        toast.success("Success!");
        router.push("/dashboard");
        reset();
      })
      .catch(() => {
        toast.error("Something went wrong.");
      });
  };

  return (
    <div className="mx-auto mb-16 flex w-full flex-col items-center justify-center p-4 text-black">
      <div className="w-full max-w-[600px] rounded-md bg-white p-1">
        <input
          id="date"
          {...register("date", { required: "Date is required!" })}
          type="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
          max="2023-12-31"
          className={`
        w-full
        rounded-md border-2
        bg-white
        p-3
        font-medium outline-none
        transition
        ${errors["date"] ? "border-red-700" : "border-neutral-300"}
        ${errors["date"] ? "focus:border-red-700" : "focus:border-black"}
        `}
        />
      </div>
      <div className="mt-6 w-full max-w-[600px]">
        <button
          onClick={handleSubmit(onSubmit)}
          className="flex w-full max-w-[600px] items-center justify-center rounded-lg bg-white p-3 font-semibold tracking-wide outline-none transition hover:bg-yellow-300 active:-translate-y-2"
        >
          Submit
        </button>
      </div>
    </div>
  );
};
export default DatePicker;
