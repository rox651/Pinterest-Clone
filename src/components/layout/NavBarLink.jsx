import { Link } from "react-router-dom";

export const NavBarLink = ({ link: { name, href } }) => {
   return (
      <Link
         to={href}
         className=" order-2 lg:order-1 relative overflow-hidden hover:before:opacity-100 hover:before:translate-x-0 before:duration-200 before:transition-all before:-translate-x-full before:opacity-0 before:content-[''] before:absolute  before:block before:w-full before:h-[2px] before:bg-white before:bottom-0"
      >
         {name}
      </Link>
   );
};
