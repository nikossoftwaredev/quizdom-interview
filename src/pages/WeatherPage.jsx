import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiGET, getApiResource } from "../redux/slices/apiSlice";
import { Card, Typography } from "@material-ui/core";

//api.openweathermap.org/data/2.5/weather?q={city name}

const WeatherPage = () => {
  const dispatch = useDispatch();
  const [ready, setReady] = useState(false);

  const weatherData = useSelector((state) => getApiResource(state, "weather"));

  useEffect(() => {
    dispatch(apiGET({ path: "weather", query: { q: "Athens" } })).then(() =>
      setReady(true)
    );
  }, [dispatch]);

  return (
    <div>
      Weather Page
      {ready ? (
        <Card>{weatherData?.weather[0].description}</Card>
      ) : (
        <Typography>Fetching Data</Typography>
      )}
    </div>
  );
};

export default WeatherPage;
