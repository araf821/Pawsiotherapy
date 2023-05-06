import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  placeholder?: string;
  textarea?: boolean;
  min?: string;
  max?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  type,
  required,
  register,
  errors,
  placeholder,
  textarea,
  min,
  max,
}) => {
  if (textarea) {
    <div className="relative w-full">
      <textarea
        id={id}
        {...register(id, { required })}
        placeholder={placeholder}
        rows={30}
        className={`
        w-full
        rounded-md border-2
        bg-white
        p-4 font-light outline-none
        transition
        ${errors[id] ? "border-red-700" : "border-neutral-300"}
        ${errors[id] ? "focus:border-red-700" : "focus:border-black"}
        `}
      />
    </div>;
  }

  return (
    <input
      id={id}
      {...register(id, { required })}
      placeholder={placeholder}
      type={type}
      min={min}
      max={max}
      className={`
        w-full
        rounded-md border-2
        bg-white
        p-2 font-light outline-none
        transition
        ${errors[id] ? "border-red-700" : "border-neutral-300"}
        ${errors[id] ? "focus:border-red-700" : "focus:border-black"}
        `}
    />
  );
};
export default Input;
