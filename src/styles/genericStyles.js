import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "./colors";
import { Card, Tab, Tabs, Typography, withStyles } from "@material-ui/core";

export const MainContainer = styled.div`
  height: 100vh;
`;

export const BodyWithPadding = styled.div`
  padding: ${(props) => props.padding};
`;

export const Text = styled(Typography)`
  color: white;
  font-family: Roboto, Arial, sans-serif;
  font-weight: normal;
  font-style: normal;

  color: ${(props) => props.textcolor};
`;

export const LinkStyled = styled(Link)`
  color: ${colors.green};

  &:hover {
    color: ${colors.green};
  }
`;

export const StyledCardList = styled.div`
  display: flex;
  overflow-x: auto;

  @media only screen and (min-width: 600px) {
    justify-content: center;
    align-items: center;
  }
`;
export const StyledCard = styled.div`
  background-color: ${colors.orange};
  border-radius: 30px;
  margin-right: 16px;
  padding: 8px 24px 8px 24px;
`;

export const StyledTabs = withStyles({
  indicator: {
    background: colors.orange,
  },
})(Tabs);

export const StyledTab = withStyles({
  root: {
    fontFamily: "Roboto",
    opacity: 1,
    color: colors.gray,
    "&$:selected": {
      color: colors.orange,
    },
    "&:hover": {
      color: colors.orange,
    },
    "&:focus": {
      color: colors.orange,
    },
  },
})(Tab);
