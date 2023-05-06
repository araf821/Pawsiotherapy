"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import { useRouter } from "next/navigation";

const DropDownMenu = () => {
  const router = useRouter();

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
      rounded-lg border-[2px] border-yellow-400 p-2 transition hover:shadow-lg
      md:px-3"
      >
        <GiHamburgerMenu size={28} className="text-yellow-400 " />
        <div className="hidden md:block">
          <Avatar src={null} />
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
      >
        <div className="flex cursor-pointer flex-col">
          <MenuItem
            onClick={() => {
              router.push(`/dashboard/${''}`);
              toggleDropdown();
            }}
            label="Dashboard"
          />
          <hr />
          <MenuItem
            onClick={() => {
              router.push("/find/animals");
              toggleDropdown();
            }}
            label="View All Animals"
          />
          <MenuItem
            onClick={() => {
              router.push("/find/cats");
              toggleDropdown();
            }}
            label="Find A Cat"
          />
          <MenuItem
            onClick={() => {
              router.push("/find/dogs");
              toggleDropdown();
            }}
            label="Find A Dog"
          />
          <hr />
          <MenuItem
            onClick={() => {
              router.push("/feature-animal");
              toggleDropdown();
            }}
            label="Feature An Animal"
          />
          <MenuItem
            onClick={() => {
              router.push(`/listings/${''}`);
              toggleDropdown();
            }}
            label="View Your Listings"
          />
          <MenuItem
            onClick={() => {
              router.push(`/sessions/${''}`);
              toggleDropdown();
            }}
            label="View Your Sessions"
          />
          <hr />
          <MenuItem onClick={() => {}} label="Sign Out" />

          {/* When the user doesn't exist */}
          <MenuItem onClick={() => {}} label="Login" />
          <MenuItem onClick={() => {}} label="Sign Up" />

        </div>
      </div>
    </div>
  );
};
export default DropDownMenu;
