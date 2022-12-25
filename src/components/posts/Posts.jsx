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
            <div className="px-5  max-w-7xl mx-auto columns-[280px]  ">
               {data.map(post => {
                  return (
                     <LazyLoadImage
                        key={post?.slug?.current}
                        alt={post?.slug?.current}
                        className="mb-5  transition-transform duration-300 z-0 relative"
                        src={urlFor(post.cover).url()}
                        effect="blur"
                        useIntersectionObserver={true}
                     />
                  );
               })}
            </div>
         </section>
      </>
   );
};
