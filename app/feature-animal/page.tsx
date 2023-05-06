"use client";

import { FieldValues, useForm } from "react-hook-form";
import Container from "../components/Container";
import ImageUpload from "../components/inputs/ImageUpload";
import Input2 from "../components/inputs/Input2";
import InputSection from "./InputSection";
import HeadlessSelect from "./HeadlessSelect";

const FeatureAnimalPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FieldValues>({
    defaultValues: {
      imgSrc: "",
      title: "",
      content: "",
      slug: "",
      category: "",
      published: false,
    },
  });

  return (
    <Container small>
      {/* Heading */}
      <div className="flex flex-col justify-center gap-1 py-6">
        <p className="text-2xl font-semibold text-neutral-900 md:text-3xl">
          Feature An Animal
        </p>
        <p className="text-sm font-light text-neutral-600">
          Everybuddy deserves a fur buddy!
        </p>
        <hr />
      </div>

      {/* Image Upload */}
      <ImageUpload />

      {/* Animal Info */}
      <div className="flex flex-col gap-3">
        {/* Name */}
        <InputSection
          id="name"
          label="Name"
          placeholder="Name"
          errors={errors}
          register={register}
          required
        />

        {/* Species */}
        <InputSection
          id="species"
          label="Species"
          placeholder="ex. Penguin"
          errors={errors}
          register={register}
          required
        />

        {/* Breed */}
        <InputSection
          id="breed"
          label="Breed"
          placeholder="Optional"
          errors={errors}
          register={register}
        />

        {/* Age */}
        <InputSection
          id="age"
          label="Age"
          type="number"
          min="1"
          max="50"
          placeholder="Optional"
          errors={errors}
          register={register}
          required
        />

        {/* Personality */}
        <div className="flex flex-col justify-between gap-1 sm:flex-row">
          <div className="flex items-center">
            <span className="text-md text-black">Personality</span>
          </div>
          <div className="relative w-full sm:w-[450px] md:w-[550px] lg:w-[700px] xl:w-[900px]">
            <HeadlessSelect />
          </div>
        </div>
      </div>
    </Container>
  );
};
export default FeatureAnimalPage;
