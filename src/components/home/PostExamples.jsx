import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { dataImagesHome } from "../../data";
import BgWave from "../../assets/images-home/wave.png"

export const PostExamples = () => {
   return (
      <>
         <section className="relative  min-h-screen  bg-cover bg-center bg-no-repeat"
         style={{
            backgroundImage: `url(${BgWave})`        }}>
            <div className="px-5  max-w-7xl mx-auto columns-[320px]  ">
               {dataImagesHome.map(post => {
                  return (
                     <LazyLoadImage
                        key={post.slug}
                        alt={post.slug}
                        className="mb-5  transition-transform duration-300 z-0 relative"
                        src={post.url}
                        effect="blur"
                        useIntersectionObserver={true}
                     />
                  );
               })}
            </div>
            <div className=" absolute  bottom-0 lg:h-32 pb-10  bg-black shadow-[0px_-48px_46px_33px_#000000d1] w-full ">
               <a className=" font-bold text-white text-center mx-auto block max-w-max bg-blue-500 px-6 rounded-3xl py-2 hover:bg-blue-400 transition-colors cursor-pointer">
                  Log in to see more
               </a>
            </div>
         </section>
      </>
   );
};
