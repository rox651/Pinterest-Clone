import { useEffect, useRef, useState } from "react";

export const useNearScreen = (distance, fromRef) => {
   const [show, setShow] = useState(false);

   useEffect(() => {
      const onChange = (entries, observer) => {
         const element = entries[0];

         if (element.isIntersecting) {
            setShow(true);
            observer.disconnect();
         }
      };

      const observer = new IntersectionObserver(onChange, {
         rootMargin: distance,
      });

      observer.observe(fromRef.current);

      return () => observer && observer.disconnect();
   });

   return show;
};
