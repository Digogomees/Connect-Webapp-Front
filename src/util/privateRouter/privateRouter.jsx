import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";

export default function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
    return (
      <Route {...rest} render={(props) => (
        isAuthenticated ? <Component {...props} /> : <Redirect to='/admin' />
      )} />
    );
  }