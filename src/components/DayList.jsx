import React from "react";
import { useSelector } from "react-redux";
import { getApiResource } from "../redux/slices/apiSlice";
import WeatherCard from "./WeatherCard";
import { StyledCardList } from "../styles/genericStyles";

const DayList = () => {
  const dayData = useSelector((state) =>
    getApiResource(state, "onecall")
  ).daily;

  return (
    <StyledCardList>
      {dayData &&
        dayData
          .filter((hour, idx) => idx < 5)
          .map((data, idx) => <WeatherCard type="day" key={idx} data={data} />)}
    </StyledCardList>
  );
};

export default DayList;
