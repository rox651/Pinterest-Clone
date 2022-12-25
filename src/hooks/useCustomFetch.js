import { useQuery } from "@tanstack/react-query";
import { orderDateData } from "../helper/orderDateData";
import { client } from "../lib";

export const useCustomFetch = (query, params) => {
   const getData = async () => {
      const data = await client.fetch(query, params);
      return data;
   };

   const result = useQuery({
      queryKey: ["posts"],
      queryFn: getData,
      select: resp => orderDateData(resp),
   });

   return result;
};
