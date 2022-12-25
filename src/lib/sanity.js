import SanityClientConstructor from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = SanityClientConstructor({
   projectId: import.meta.env.VITE_PROJECT_ID,
   dataset: import.meta.env.VITE_DATASET,
   apiVersion: "2021-03-25", // use current UTC date - see "specifying API version"!
   useCdn: true, // `false` if you want to ensure fresh data
});
const builder = imageUrlBuilder(client);

export const urlFor = source => {
   return builder.image(source);
};
