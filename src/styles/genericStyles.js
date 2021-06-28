import { Link } from "react-router-dom";
import styled from "styled-components";
import ListItem from "@material-ui/core/ListItem";
import colors from "./colors";
import { Typography } from "@material-ui/core";

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

export const StyledListItem = styled(ListItem)`
  margin-top: ${(props) => (props.lastchild ? "auto" : "")};

  background-color: ${(props) => (props.selected ? "gray" : "")};
`;
