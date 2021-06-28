export const kelvinToCelsius = (temp) => Math.round(temp - 273.15);

export const timeFromTimeZone = (timeZone) => {
  const date = new Date(new Date().getTime() - timeZone * 1000);
  return date.toTimeString().split(" ")[0];
};
