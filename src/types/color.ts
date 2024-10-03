/**
 * Generate a color gradient based on a percentage
 * - 0%: #FF7070 or rgb(255, 112, 112)
 * - 50%: #FFBC6D or rgb(255, 188, 109)
 * - 100%: #6DFF8D or rgb(109, 255, 141)
 *
 * @param percentage
 * @returns color (hex)
 */
export const generateColorTesting = (
  percentage: number,
  alpha: number = 255
) => {
  let rgba = "";

  if (percentage <= 50) {
    const red = 255;
    const green = Math.round(112 + (percentage / 50) * 76);
    const blue = Math.round(112 + (percentage / 50) * 29);
    rgba = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  } else {
    const red = Math.round(255 - ((percentage - 50) / 50) * 146);
    const green = Math.round(188 + ((percentage - 50) / 50) * 67);
    const blue = Math.round(109 + ((percentage - 50) / 50) * 32);
    rgba = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  }

  return convertRGBAToHex(rgba);
};

export const getColorTesting = (percentage: number) => {
  if (percentage >= 80) {
    return "#6DFF8D";
  } else if (percentage >= 50) {
    return "#FFBC6D";
  } else {
    return "#FF7070";
  }
};

export const convertRGBAToHex = (rgba: string) => {
  const rgbaArr = rgba.match(/\d+/g);
  const hex = `#${rgbaArr
    ?.map((v) => {
      const hex = Number(v).toString(16);
      return hex.length === 1 ? `0${hex}` : hex;
    })
    .join("")}`;

  return hex;
};
