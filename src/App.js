import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import { gsap, CSSPlugin, Expo } from "gsap"
import "./App"
import Dashboard from "./pages/admin/Dashboard";
import Signup from "./pages/Signup";
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";
import AddProduct from "./pages/admin/AddJobs";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Signin from "./pages/Signin";
import Summary from "./pages/Summary";
import Protected from "./Protected";
import PageNotFound from "./PageNotFound";
import ForgatPassword from "./pages/ForgatPassword";
import ResetPassword from "./pages/ResetPassword";


function App() {



  return (
    <BrowserRouter >
      <Navbar />

      <Switch className="title-lines" >
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={Signup} />
        <Route
          path="/product-details/:id"
          component={ProductDetails}
        />
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={Signin} />
        <Route path="/summary" component={Summary} />
        <Route path="/forget-password" component={ForgatPassword} />
        <Route path="/user/password-reset/:id/:token" component={ResetPassword} />

        <Protected Compo={Dashboard} path="/dashboard" />
        <Protected Compo={AddProduct} path="/add-job" />
        <Route path="*" component={PageNotFound} />
      </Switch>

      {/* <FormValidation /> */}
    </BrowserRouter>
  );
}

export default App;

