import { getImage } from "astro:assets";

export const getOptimizedImages = async function (image) {
  const optImage = await getImage({
    src: image,
    format: "webp",
    quality: 100,
    loading: "eager",
    inferSize: true,
  });

  return optImage;
};
