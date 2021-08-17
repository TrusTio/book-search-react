import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useAuth } from "contexts/AuthContext";
import { LoginPage } from "pages/LoginPage";
import { BooksPage } from "pages/BooksPage";

export const AppRoutes = () => {
  const user = useAuth();

  if (user) {
    return (
      <Switch>
        <Route to="/books" exact component={BooksPage} />
        <Redirect to="/books" />
      </Switch>
    );
  } else {
    return (
      <Switch>
        <Route path="/login" exact component={LoginPage} />
        <Redirect to="/login" />
      </Switch>
    );
  }
};
