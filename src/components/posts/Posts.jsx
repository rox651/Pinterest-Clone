import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import PlaceholderImg from "../../assets/images-home/placeholder.webp";

import { useCustomFetch } from "../../hooks/useCustomFetch";
import { urlFor } from "../../lib";
import { Loading } from "./Loading";

export const Posts = () => {
   const { data, isLoading, isError, error } = useCustomFetch('*[_type == "post"]');

   if (isLoading) return <Loading />;
   if (isError) return <h3>{error.message}</h3>;

   return (
      <>
         <section className="relative  min-h-screen ">
            <div className="px-5  max-w-7xl mx-auto   grid sm:grid-cols-2 lg:grid-cols-3   gap-3 ">
               {data.map(post => {
                  return (
                     <div
                        key={post?.slug?.current}
                        className="overflow-hidden w-full h-full md:hover:scale-95 duration-300"
                     >
                        <LazyLoadImage
                           alt={post?.slug?.current}
                           src={urlFor(post.cover).url()}
                           placeholderSrc={PlaceholderImg}
                           className="relative aspect-square object-cover w-full sm:h-[500px] "
                        />
                     </div>
                  );
               })}
            </div>
         </section>
      </>
   );
};
