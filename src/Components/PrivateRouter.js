import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";

const PrivateRouter = ({ component: Component }) => {
  const location = useLocation()

  //Create a private route that does not let user to go to other pages, if username has not been submitted
  return (
    <Route>
      {localStorage.getItem('username') != null ? <Component /> : <Redirect to={{ pathname: "/", state: { from: location, reason: "Create a user first." } }} />
      }
    </Route>
  );
};

export default PrivateRouter;