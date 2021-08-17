import React from "react";
import Switch from "react-switch";
import { func, string } from "prop-types";
import { ReactComponent as MoonIcon } from "assets/icons/moon.svg";
import { ReactComponent as SunIcon } from "assets/icons/sun.svg";
import styled from "styled-components";

export const DarkThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <Switch
      onChange={toggleTheme}
      checked={theme === "dark" ? true : false}
      uncheckedIcon={<StyledMoonIcon />}
      checkedIcon={<StyledSunIcon />}
    ></Switch>
  );
};

DarkThemeToggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

const StyledSunIcon = styled(SunIcon)`
  width: 80%;
  height: 80%;
  padding: 0 0 0 0.2rem;
`;

const StyledMoonIcon = styled(MoonIcon)`
  width: 80%;
  height: 80%;
  padding: 0 0 0 0.2rem;
`;
