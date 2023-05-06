"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import { useRouter } from "next/navigation";
import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";

interface MenuProps {
  currentUser?: SafeUser | null | undefined;
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

  console.log(currentUser?.image);
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
      rounded-xl border-[3px] border-yellow-500 p-2 text-yellow-500 transition duration-300
      hover:bg-yellow-500 hover:text-black hover:shadow-lg md:px-3"
      >
        <GiHamburgerMenu
          size={28}
          className={`${isOpen && "rotate-180"} transition duration-300`}
        />
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
            overflow-hidden rounded-lg
            text-black shadow-xl
            transition
            duration-500
            md:w-[40vw]
            lg:w-[15vw]
            ${isOpen ? "translate-y-0" : "-translate-y-[400px]"}
            ${isOpen ? "opacity-100" : "opacity-0"}
          `}
      >
        <div className="flex cursor-pointer flex-col">
          {currentUser && (
            <>
              <MenuItem
                onClick={() => {
                  router.push(`/dashboard/${currentUser.id}`);
                  toggleDropdown();
                }}
                label="Dashboard"
              />
              <MenuItem
                onClick={() => {
                  router.push("/feature-animal");
                  toggleDropdown();
                }}
                label="Feature An Animal"
              />
            </>
          )}
          <hr className="border-neutral-300" />
          <MenuItem
            onClick={() => {
              router.push("/find/animals");
              toggleDropdown();
            }}
            label="All Animals"
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
          {currentUser && (
            <>
              <MenuItem
                onClick={() => {
                  signOut();
                  router.push("/");
                }}
                label="Sign Out"
              />
            </>
          )}
          <hr className="border-neutral-300" />

          {/* When the user doesn't exist */}
          {!currentUser && (
            <>
              <MenuItem onClick={loginModal.open} label="Login" />
              <MenuItem onClick={registerModal.open} label="Sign Up" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default DropDownMenu;
