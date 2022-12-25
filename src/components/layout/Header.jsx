import { Link } from "react-router-dom";
import { NavBar } from "./NavBar";

export const Header = () => {
   return (
      <header className=" z-50 sticky top-0 bg-black/80 backdrop-blur-sm">
         <div className="px-5 h-16 max-w-7xl mx-auto flex justify-between items-center">
            <h2 className="text-2xl lg:text-3xl font-black">
               <Link to="/">Pinterest Clone</Link>
            </h2>
            <NavBar />
         </div>
      </header>
   );
};
