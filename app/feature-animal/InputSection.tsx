import Input2 from "../components/inputs/Input2";

interface InputSectionProps {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  errors: any;
  register: any;
  required?: boolean;
  min?: string;
  max?: string;
  textarea?: boolean;
}

const InputSection: React.FC<InputSectionProps> = ({
  id,
  label,
  type,
  placeholder,
  errors,
  register,
  required,
  min,
  max,
  textarea,
}) => {
  return (
    <div className="flex flex-col justify-between gap-1 sm:flex-row">
      <span className="text-md text-black">{label}</span>
      <div className="relative w-full sm:w-[450px] md:w-[550px] lg:w-[700px] xl:w-[900px]">
        {type === "number" ? (
          <Input2
            id={id}
            type="number"
            placeholder={placeholder}
            min={min}
            max={max}
            errors={errors}
            register={register}
            required={required}
            textarea={textarea}
          />
        ) : (
          <Input2
            id={id}
            type={type}
            placeholder={placeholder}
            errors={errors}
            register={register}
            required={required}
            textarea={textarea}
          />
        )}
      </div>
    </div>
  );
};
export default InputSection;
