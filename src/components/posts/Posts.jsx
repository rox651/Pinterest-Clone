import { LazyLoadImage } from "react-lazy-load-image-component";
import { useInView } from "react-intersection-observer";
import "react-lazy-load-image-component/src/effects/blur.css";

import { useCustomFetch } from "../../hooks/useCustomFetch";
import { urlFor } from "../../lib";
import { Loading } from "./Loading";

export const Post = () => {
   const { data, isLoading, isError, error } = useCustomFetch('*[_type == "post"]');

   const { ref, inView } = useInView({
      rootMargin: "-150px",
      threshold: 1,
      triggerOnce: true,
   });

   if (isLoading) return <Loading />;
   if (isError) return <h3>{error.message}</h3>;

   return (
      <>
         <section className="relative  min-h-screen ">
            <div ref={ref} className="px-5  max-w-7xl mx-auto columns-[280px]  ">
               {inView &&
                  data.map(post => {
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
