import { Link } from "react-router-dom";
import styled from "styled-components";
import ListItem from "@material-ui/core/ListItem";
import colors from "./colors";

export const MainContainer = styled.div`
  height: 100vh;
`;

export const BodyWithPadding = styled.div`
  padding: ${(props) => props.padding};
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
