import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiGET, getApiResource } from "../redux/slices/apiSlice";
import colors from "../styles/colors";
import { Text, MainContainer } from "../styles/genericStyles";
import DayData from "../components/DayData";
import WeatherTabPanel from "../components/WeatherTabPanel";

//api.openweathermap.org/data/2.5/weather?q={city name}

const WeatherPage = () => {
  const dispatch = useDispatch();
  const [ready, setReady] = useState(false);

  const weatherData = useSelector((state) => getApiResource(state, "weather"));

  // Weather is dynamically changes so i have to update my data every second
  useEffect(() => {
    const interval = setInterval(
      () =>
        dispatch(apiGET({ path: "weather", query: { q: "Athens" } })).then(() =>
          setReady(true)
        ),
      1000
    );

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div>
      {ready ? (
        <MainContainer style={{ backgroundColor: colors.black }}>
          <DayData weatherData={weatherData} />
          <WeatherTabPanel />
        </MainContainer>
      ) : (
        <Text>Fetching Data</Text>
      )}
    </div>
  );
};

export default WeatherPage;
