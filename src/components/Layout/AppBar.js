import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useAuth } from "contexts/AuthContext";
import styled from "styled-components";
import { ProfilePopover } from "components/Profile/ProfilePopover";

export const AppBar = ({ children }) => {
  const user = useAuth();

  if (user) {
    return (
      <CustomNavBar variant="dark">
        <CustomNavBar.Brand> Book Search</CustomNavBar.Brand>
        <Nav className="mr-auto"></Nav>

        <ProfilePopover user={user}> {children}</ProfilePopover>
      </CustomNavBar>
    );
  } else {
    return (
      <CustomNavBar variant="dark">
        <Navbar.Brand>Book Search</Navbar.Brand>

        <Nav className="mr-auto"></Nav>

        {children}
      </CustomNavBar>
    );
  }
};

const CustomNavBar = styled(Navbar)`
  background-color: ${(props) => props.theme.navbarBody};
  color: ${(props) => props.theme.text};
`;
