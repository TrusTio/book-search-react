import React, { useState } from "react";
import styled from "styled-components";
import { Popover } from "react-tiny-popover";
import { Button, Container, Image } from "react-bootstrap";
import { logOut } from "components/services/firebase/auth";

export const ProfilePopover = ({ user, children }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const logOutOnClick = async (provider) => {
    await logOut(provider);
    window.location.reload();
  };

  const popoverContent = () => (
    <PopupContainer>
      <PopupUserImage src={user?.photoURL} alt="asd" roundedCircle />
      <PopupUsername> {user?.displayName}</PopupUsername>
      <PopupUserEmail> {user?.email}</PopupUserEmail>
      <ThemeToggle>{children}</ThemeToggle>
      <LogoutButton variant="danger" onClick={logOutOnClick}>
        Logout
      </LogoutButton>
    </PopupContainer>
  );

  return (
    <Popover
      isOpen={isPopoverOpen}
      positions={["bottom", "left", "right", "top"]} // preferred positions by priority
      content={popoverContent}
      onClickOutside={() => setIsPopoverOpen(false)}
    >
      <UserImage
        src={user?.photoURL}
        alt="asd"
        roundedCircle
        onClick={() => setIsPopoverOpen(!isPopoverOpen)}
      />
    </Popover>
  );
};

const UserImage = styled(Image)`
  width: 2.5rem;
  height: 2.5rem;

  &:hover {
    border: 3px solid ${(props) => props.theme.profileIconHoverBorder};
  }
`;

const PopupContainer = styled(Container)`
  background-color: ${(props) => props.theme.profilePopupBody};
  color: ${(props) => props.theme.text};
  text-align: center;
  border-radius: 5px;
  padding: 1rem 1rem 1rem 1rem;
`;

const PopupUserImage = styled(Image)`
  width: 4rem;
  height: 4rem;
  margin: 0.5rem 0.5rem 0.5rem 0.5rem;
`;

const PopupUsername = styled.div`
  margin: 0.5rem 0.5rem 0.5rem 0.5rem;
  font-weight: bold;
`;

const PopupUserEmail = styled.div`
  margin: 0.5rem 0.5rem 0.5rem 0.5rem;
`;

const ThemeToggle = styled.div`
  margin: 0.5rem 0.5rem 0.5rem 0.5rem;
`;

const LogoutButton = styled(Button)`
  margin: 0.5rem 0.5rem 0.5rem 0.5rem;
`;
