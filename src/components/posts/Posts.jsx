import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
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
            <div className="px-5  max-w-7xl mx-auto   grid grid-cols-2 lg:grid-cols-3  gap-3 ">
               {data.map(post => {
                  return (
                     <div className="overflow-hidden w-full h-full">
                        <LazyLoadImage
                           key={post?.slug?.current}
                           alt={post?.slug?.current}
                           src={urlFor(post.cover).url()}
                           className=" duration-300 z-0 relative aspect-square md:hover:scale-95 object-cover w-full h-full "
                           effect="blur"
                        />
                     </div>
                  );
               })}
            </div>
         </section>
      </>
   );
};
