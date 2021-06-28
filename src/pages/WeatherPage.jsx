import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiGET, getApiResource } from "../redux/slices/apiSlice";
import colors from "../styles/colors";
import { Text, MainContainer } from "../styles/genericStyles";
import DayData from "../components/DayData";
import WeatherTabPanel from "../components/WeatherTabPanel";
import privateConfig from "../config/private.json";
import { CircularProgress } from "@material-ui/core";

const WeatherPage = () => {
  const dispatch = useDispatch();
  const [ready, setReady] = useState(false);

  const weatherData = useSelector((state) => getApiResource(state, "onecall"));

  // Weather is dynamically changes so I have to update my data every minute
  useEffect(() => {
    const interval = setInterval(
      () =>
        dispatch(
          apiGET({
            path: "onecall",
            query: {
              lat: privateConfig.COORDS.lat,
              lon: privateConfig.COORDS.lon,
            },
          })
        ),
      1000 * 60
    );

    return () => clearInterval(interval);
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      apiGET({
        path: "onecall",
        query: {
          lat: privateConfig.COORDS.lat,
          lon: privateConfig.COORDS.lon,
        },
      })
    ).then(() => setReady(true));
  }, [dispatch]);

  return (
    <MainContainer style={{ backgroundColor: colors.black }}>
      {ready ? (
        <>
          <DayData weatherData={weatherData} />
          <WeatherTabPanel />
        </>
      ) : (
        <div
          style={{
            display: "flex",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Text align="center">Fetching Data</Text>
          <CircularProgress color="secondary" />
        </div>
      )}
    </MainContainer>
  );
};

export default WeatherPage;
