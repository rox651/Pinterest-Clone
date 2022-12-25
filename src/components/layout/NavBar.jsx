import clsx from "clsx";
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";

import { dataLinks } from "../../data";
import { NavBarLink } from "./NavBarLink";

export const NavBar = () => {
   const [isOpenMenu, setIsOpenMenu] = useState(false);
   return (
      <>
         <BiMenuAltRight
            onClick={() => setIsOpenMenu(!isOpenMenu)}
            className=" text-3xl cursor-pointer lg:hidden"
         />
         <nav
            className={clsx(
               !isOpenMenu && "hidden",
               "absolute top-12 z-10 right-5 overflow-hidden  px-2 py-2 shadow-md shadow-gray-800 lg:shadow-none  bg-blue-500 lg:bg-transparent w-[150px] lg:w-auto  rounded-md lg:rounded-none flex lg:flex flex-col  lg:flex-row lg:static gap-5  justify-center  lg:items-center text-base"
            )}
         >
            {dataLinks.map(link => (
               <NavBarLink key={link.name} link={link} />
            ))}
            <div className=" grid gap-2 lg:inline-block lg:space-x-2 order-1">
               <a className=" font-bold  lg:font-normal w-full text-blue-500 lg:text-white text-center py-2 bg-white lg:bg-blue-500 lg:px-6 lg:rounded-3xl lg:py-2 lg:hover:bg-blue-400 transition-colors cursor-pointer">
                  Log In
               </a>
               <a className=" font-bold  lg:font-normal w-full text-blue-500 lg:text-white text-center py-2 bg-white lg:bg-blue-500 lg:px-6 lg:rounded-3xl lg:py-2 lg:hover:bg-blue-400 transition-colors cursor-pointer">
                  Sign Up
               </a>
            </div>
         </nav>
      </>
   );
};
