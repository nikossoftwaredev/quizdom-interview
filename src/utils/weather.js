var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const kelvinToCelsius = (temp) => Math.round(temp - 273.15);

export const timeFromTimeZone = (timeZone) => {
  const options = {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
  };

  return new Date().toLocaleTimeString([], options);
};

export const addTimeDifference = (dt, type) => {
  return type === "day"
    ? days[new Date(dt * 1000).getDay()]
    : new Date(dt * 1000).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
};
