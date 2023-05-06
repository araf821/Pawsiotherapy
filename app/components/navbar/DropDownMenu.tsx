"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";

const DropDownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<any>(null);
  const menuBtnRef = useRef<any>(null);

  const handleClickOutside = useCallback((e: any) => {
    if (!dropdownRef?.current?.contains(e.target)) {
      if (!menuBtnRef?.current?.contains(e.target)) {
        setIsOpen(false);
      }
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, [handleClickOutside]);

  const toggleDropdown = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div
        ref={menuBtnRef}
        onClick={toggleDropdown}
        className="flex cursor-pointer flex-row items-center gap-3
      rounded-full border-[1px] border-neutral-200 p-4 transition hover:shadow-lg
      md:px-2 md:py-1"
      >
        <AiOutlineMenu size={24} className="text-yellow-400" />
        <div className="hidden md:block">
          <Avatar />
        </div>
      </div>

      <div
        className={`
            text-md
            absolute
            right-0 top-20 z-50 w-[60vw] min-w-[250px]
            max-w-[500px]
            overflow-hidden rounded-xl
            text-black shadow-lg
            transition
            duration-300
            md:w-[40vw]
            lg:w-[15vw]
            ${isOpen ? "translate-y-0" : "-translate-y-56"}
            ${isOpen ? "opacity-100" : "opacity-0"}
          `}
      ></div>
    </div>
  );
};
export default DropDownMenu;
