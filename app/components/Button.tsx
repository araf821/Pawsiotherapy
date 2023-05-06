"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  outline?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  outline,
  icon: Icon,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        text-md
        relative
        w-full
        rounded-lg
        border-[3px]
        border-zinc-900
        py-3
        font-semibold
        tracking-widest
        text-zinc-800
        transition
        duration-300
        ${
          outline ? "hover:bg-zinc-800 hover:text-white" : "hover:bg-yellow-400"
        }
        ${outline ? "bg-white" : "bg-yellow-500"}        
  `}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      {label}
    </button>
  );
};
export default Button;
