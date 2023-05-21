"use client";

import Button from "@/app/components/Button";
import Heading from "@/app/components/Heading";
import ImageUpload from "@/app/components/inputs/ImageUpload";
import Input from "@/app/components/inputs/Input";
import { SafeUser } from "@/app/types";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";

interface SettingsProps {
  currentUser: SafeUser | null;
}

const SettingsClient: React.FC<SettingsProps> = ({ currentUser }) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      image: currentUser?.image,
      name: currentUser?.name,
    },
  });
  const image = watch("image");

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (data.name === currentUser?.name && data.image === currentUser?.image) {
      toast.error("You have not made any changes.");
      return;
    }

    axios
      .put("/api/user", {
        ...data,
        userId: currentUser?.id,
      })
      .then(() => {
        toast.success("Updated Changes");
        router.push("/dashboard");
        router.refresh();
        reset();
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  };

  return (
    <div className="flex w-full flex-col items-center gap-8">
      <Heading title="Profile Settings" center />
      <ImageUpload
        value={image}
        onChange={(value) => setCustomValue("image", value)}
        paddings="rounded-full p-8 md:p-12 lg:p-16"
        rounded
      />
      <p className="-mb-4 -mt-8 text-sm font-light">Click to Edit</p>
      <Input errors={errors} id="name" label="Name" register={register} />
      <Button
        outline
        label="Confirm Changes"
        onClick={handleSubmit(onSubmit)}
      />
    </div>
  );
};
export default SettingsClient;
