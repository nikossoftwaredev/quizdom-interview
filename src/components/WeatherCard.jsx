import React from "react";
import { Text, StyledCard } from "../styles/genericStyles";
import { kelvinToCelsius, addTimeDifference } from "../utils/weather";
import { Grid } from "@material-ui/core";

const WeatherCard = ({ data, type }) => {
  return (
    <StyledCard>
      <Grid container justify="center" align="center" direction="column">
        <Grid item>
          <Text variant="subtitle1" align="center">
            {addTimeDifference(data.dt, type)}
          </Text>
        </Grid>
        <Grid item>
          <img
            alt="Weather Icon"
            width="36px"
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          />
        </Grid>
        <Grid item>
          <Text variant="h5" component="span">
            {kelvinToCelsius(type === "day" ? data.temp.day : data.temp)}
          </Text>
          <Text variant="h6" component="span">
            <sup>℃</sup>
          </Text>
        </Grid>
      </Grid>
    </StyledCard>
  );
};

export default WeatherCard;
