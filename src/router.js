import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 
import PreviewProduct from "./containers/PreviewProduct";
import CreateProduct from "./containers/CreateProduct";

const AppRouter = () => (
  <Router>
    <Switch>
              <Route path="/" exact component={CreateProduct} />
              <Route path="/preview/:id" exact component={PreviewProduct} /> 
              </Switch>
  </Router>
);

export default AppRouter;