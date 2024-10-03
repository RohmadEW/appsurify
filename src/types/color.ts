/**
 * Generate a color gradient based on a percentage
 * - 0%: #FF7070 or rgb(255, 112, 112)
 * - 50%: #FFBC6D or rgb(255, 188, 109)
 * - 100%: #6DFF8D or rgb(109, 255, 141)
 *
 * @param percentage
 * @returns color
 */
export const generateColorTesting = (percentage: number) => {
  if (percentage <= 50) {
    const red = 255;
    const green = Math.round(112 + (percentage / 50) * 76);
    const blue = Math.round(112 + (percentage / 50) * 29);
    return `rgb(${red}, ${green}, ${blue})`;
  } else {
    const red = Math.round(255 - ((percentage - 50) / 50) * 146);
    const green = Math.round(188 + ((percentage - 50) / 50) * 67);
    const blue = Math.round(109 + ((percentage - 50) / 50) * 32);
    return `rgb(${red}, ${green}, ${blue})`;
  }
};
