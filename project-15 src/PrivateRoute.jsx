import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import firebase from './Firebase';
import './App.css';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = firebase.auth().currentUser;

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/SignIn" />
      }
    />
  );
};

export default PrivateRoute;
