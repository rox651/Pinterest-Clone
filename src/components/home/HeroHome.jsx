import clsx from "clsx";
import BgWave from "../../assets/images-home/wave.png";

export const HeroHome = () => {
   const titles = ["Search", "Share", "Inspire"];

   return (
      <section
         className="relative  bg-cover bg-center bg-no-repeat"
         style={{
            backgroundImage: `url(${BgWave})`,
         }}
      >
         <div className="px-5  max-w-7xl mx-auto grid place-items-center place-content-center  min-h-[calc(100vh-4rem)] xl:min-h-[500px] ">
            <h1 className=" text-7xl md:text-[7rem] leading-[1.1] md:space-x-8 xl:text-9xl font-black  text-center">
               {titles.map((title, index) => (
                  <span
                     key={index}
                     className={clsx(
                        index % 2 !== 0 &&
                           "bg-gradient-to-r from-blue-800 via-blue-400 to-blue-500 text-transparent  bg-clip-text",
                        "block md:inline-block "
                     )}
                  >
                     {title}
                  </span>
               ))}
            </h1>
            <h3 className="mt-5 md:text-2xl text-center text-white/80 font-semibold">
               Welcome to our page about images! Here, you will find a wide variety of high-quality
               <br className="hidden lg:block"></br>
               images for all of your needs.
            </h3>
         </div>
      </section>
   );
};
