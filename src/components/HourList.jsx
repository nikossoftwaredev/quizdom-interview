import React from "react";
import { useSelector } from "react-redux";
import { getApiResource } from "../redux/slices/apiSlice";
import WeatherCard from "./WeatherCard";
import { StyledCardList } from "../styles/genericStyles";

const HourList = () => {
  const hourData = useSelector((state) =>
    getApiResource(state, "onecall")
  ).hourly;

  return (
    <StyledCardList>
      {hourData &&
        hourData
          .filter((hour, idx) => idx < 5)
          .map((data, idx) => <WeatherCard key={idx} data={data} />)}
    </StyledCardList>
  );
};

export default HourList;
