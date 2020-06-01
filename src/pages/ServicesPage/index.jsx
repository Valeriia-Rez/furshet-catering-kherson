import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SheffPovarNaDom from '../../components/SheffPovarNaDom';

const ServicesPage = ({ match }) => {
  return (
    <>
      <h1>ServicesPage</h1>
      <p>Services description</p>
      <Switch>
        <Route
          path={`${match.path}/sheff-povar-na-dom`}
          component={SheffPovarNaDom}
        />
      </Switch>
    </>
  );
};

export default ServicesPage;
