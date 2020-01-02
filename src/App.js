import React, { Fragment, useEffect } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import AppNavbar from "./components/layout/AppNavbar";
import Footer from "./components/layout/AppNavbar";
import AddBeverageModal from "./components/layout/AddBeverageModal";
import { Provider } from "react-redux";
import store from "./store";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import Beverages from "./components/beverages/Beverages";
const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <Fragment>
        <AppNavbar />
      </Fragment>
    </Provider>
  );
};

export default App;
