import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import Login from "../container/login/Login";
import Dangky from '../container/dangky/Dangky';
import { useDispatch } from "react-redux";

export default function NestingExample() {
    return (
        <Router>
          <div>
            <Switch>
              <Route path="/dangnhap" component="" />
              <Route path="/dangky" component="" />
              
              </Switch>
              <Switch>
          <Route path="/dangnhap">
            <Ldangnhap />
          </Route>
          <Route path="/dangky">
            <Dangky />
          </Route>
          </Switch>
          </div>
        </Router>
      );
}



function Ldangnhap() {
    let { url } = useRouteMatch();
    return (
      <Login url={url} />
    );
  }