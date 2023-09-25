import { useSanityClient, groq } from "astro-sanity";
import imageUrlBuilder from "@sanity/image-url";

const client = useSanityClient();
const builder = imageUrlBuilder(client);

export const getProducts = async () => {
  const query = groq`*[_type == "product"]{ _id, title, "slug": slug.current, currentPrice, originalPrice, description, tags[]->{ title, color }, mainImage, isFeatured }`;
  const products = await client.fetch(query);

  return products.map((product) => ({
    ...product,
    mainImageUrl: builder.image(product.mainImage).url(),
  }));
};

export const getFeaturedProducts = async () => {
  const query = groq`*[_type == "product" && isFeatured]{ _id, title, "slug": slug.current, currentPrice, originalPrice, description, tags[]->{ title, color }, mainImage }`;
  const products = await client.fetch(query);

  return products.map((product) => ({
    ...product,
    mainImageUrl: builder.image(product.mainImage).url(),
  }));
};
