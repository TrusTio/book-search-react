import React from "react";
import { googleProvider } from "components/services/firebase/authMethods";
import { socialMediaAuth } from "components/services/firebase/auth";
import styled from "styled-components";
import { Card } from "react-bootstrap";
import { GoogleLoginButton } from "react-social-login-buttons";

export const LoginPage = () => {
  const signIn = async (provider) => {
    const res = await socialMediaAuth(provider);
    console.log(res);
  };

  return (
    <LoginContainer>
      <LoginBox>
        <GoogleLoginButton onClick={() => signIn(googleProvider)} />
      </LoginBox>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  width: 100vw !important;
  height: 80vh !important;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginBox = styled(Card)`
  height: 45%;
  width: 20%;
  background-color: ${(props) => props.theme.loginCardBody};

  display: flex;
  align-items: center;
  justify-content: center;
`;
