import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

export const MainContent = ({ children }) => {
  return <MainContainer fluid>{children} </MainContainer>;
};

const MainContainer = styled(Container)`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
`;
