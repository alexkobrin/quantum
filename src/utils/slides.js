/**
 * URL to a sample image.
 *
 * @type {string}
 */
export const IMAGE_URL = "https://source.unsplash.com/random/800x450";

/**
 * Return an object containing data of sample images.
 *
 * @param {number} length - Optional. A number of slides.
 * @param {number} sig    - Optional. The signature for getting a different image.
 *
 * @return {Object} - An object containing data of sample images.
 */

return Array.apply(null, Array(length)).map((value, index) => {
  index = sig || index;

  return {
    src: `${IMAGE_URL}?sig=${index}`,
    alt: `Image ${index}`
  };
});
