import React from "react";
import Form from "./Form.jsx";
import { NavLink, Route, Switch } from "react-router-dom";

const Body = () =>
    <main>
        <Switch>
            <Route exact path="/" />
            <Route path="/sign-up" component={Form} />
        </Switch>
    </main>;


export default Body;
