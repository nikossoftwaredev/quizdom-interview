import React from "react";
import { Grid } from "@material-ui/core";
import { Text } from "../styles/genericStyles";
import colors from "../styles/colors";
import { kelvinToCelsius, timeFromTimeZone } from "../utils/weather";

const DayData = ({ weatherData = {} }) => {
  return (
    <Grid container justify="center" align="center" direction="column">
      <Grid item>
        <img
          alt="Weather Icon"
          src={`http://openweathermap.org/img/wn/${weatherData?.current?.weather[0].icon}@2x.png`}
        />
      </Grid>
      <Grid item>
        <Text variant="h2" component="span">
          {kelvinToCelsius(weatherData.current.temp)}
        </Text>
        <Text variant="h3" component="span">
          <sup>℃</sup>
        </Text>
      </Grid>
      <Grid item>
        <Text variant="h4" align="center">
          Athens, GR
        </Text>
      </Grid>
      <Grid item>
        <Text variant="h6" align="center">
          {timeFromTimeZone(weatherData.timezone)}
        </Text>
      </Grid>
      <Grid item style={{ display: "flex", justifyContent: "space-around" }}>
        <Text textcolor={colors.gray} align="center" component="span">
          Feels like {kelvinToCelsius(weatherData.current.feels_like)}℃
        </Text>
        <Text textcolor={colors.gray} align="center" component="span">
          Humidity {weatherData.current.humidity} %
        </Text>
      </Grid>
    </Grid>
  );
};

export default DayData;
