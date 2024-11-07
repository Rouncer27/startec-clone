import { getImage } from "astro:assets";
import h from "../../dist/_astro/CookieContent.BqH_0YAV";

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

export const optimizeSlider = async function (slider) {
  const optimizedSlidersImages = await Promise.all(
    slider.map(
      async (slide) => await getOptimizedImages(slide.image.node.sourceUrl),
    ),
  );

  const newOptimizedHeroSlider = slider.map((slide, index) => {
    return {
      ...slide,
      image: {
        node: {
          sourceUrl: optimizedSlidersImages[index]?.src,
          altText: slide.image.node.altText,
          options: optimizedSlidersImages[index]?.attributes,
        },
      },
    };
  });

  return newOptimizedHeroSlider;
};
