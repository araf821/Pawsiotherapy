"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import { useRouter } from "next/navigation";
import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { User } from "@prisma/client";

interface MenuProps {
  currentUser?: User | null | undefined;
}

const DropDownMenu: React.FC<MenuProps> = ({ currentUser }) => {
  const router = useRouter();

  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

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

  console.log(currentUser?.image)
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
      rounded-lg border-[2px] border-yellow-500 p-2 transition hover:shadow-lg
      md:px-3"
      >
        <GiHamburgerMenu size={28} className="text-yellow-500 " />
        <div className="hidden md:block">
          <Avatar src={currentUser?.image} />
        </div>
      </div>

      <div
        className={`
            text-md
            absolute
            right-0 top-20 z-50 w-[60vw] min-w-[250px]
            max-w-[500px]
            overflow-hidden rounded-xl
            text-black shadow-xl
            transition
            duration-300
            md:w-[40vw]
            lg:w-[15vw]
            ${isOpen ? "translate-y-0" : "-translate-y-[600px]"}
            ${isOpen ? "opacity-100" : "opacity-100"}
          `}
      >
        <div className="flex cursor-pointer flex-col">
          <MenuItem
            onClick={() => {
              router.push(`/dashboard/${""}`);
              toggleDropdown();
            }}
            label="Dashboard"
          />
          <hr className="border-neutral-300" />
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
          <hr className="border-neutral-300" />
          <MenuItem
            onClick={() => {
              router.push("/feature-animal");
              toggleDropdown();
            }}
            label="Feature An Animal"
          />
          <MenuItem
            onClick={() => {
              router.push(`/listings/${""}`);
              toggleDropdown();
            }}
            label="View Your Listings"
          />
          <MenuItem
            onClick={() => {
              router.push(`/sessions/${""}`);
              toggleDropdown();
            }}
            label="View Your Sessions"
          />
          <hr className="border-neutral-300" />
          <MenuItem onClick={() => {}} label="Sign Out" />

          {/* When the user doesn't exist */}
          <MenuItem onClick={loginModal.open} label="Login" />
          <MenuItem onClick={registerModal.open} label="Sign Up" />
        </div>
      </div>
    </div>
  );
};
export default DropDownMenu;
