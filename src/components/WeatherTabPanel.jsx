import React from "react";
import { StyledTabs, StyledTab } from "../styles/genericStyles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import HourList from "./HourList";
import DayList from "./DayList";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const WeatherTabPanel = ({ weatherData = {} }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <StyledTabs
        centered
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
      >
        <StyledTab sel={+(value === 0)} label="Today" />
        <StyledTab sel={+(value === 1)} label="5 Days" />
      </StyledTabs>
      <TabPanel value={value} index={0}>
        <HourList />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DayList />
      </TabPanel>
    </div>
  );
};

export default WeatherTabPanel;
