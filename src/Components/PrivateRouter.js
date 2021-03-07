import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";

const PrivateRouter = ({component: Component}) => {
const location = useLocation()

  return (
    <Route>
      {localStorage.getItem('username') != null ? <Component /> : <Redirect to={{ pathname: "/", state: { from: location, reason: "Create a user first." } }} />
      }
    </Route>
  );
};

export default PrivateRouter;