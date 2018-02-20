import React from "react";
import Header from "./Header.jsx";
import Body from "./Body.jsx";

import ConnectedForm from "../containers/connectedForm";
import general from "../styles/general.scss";

const App = () => (
    <React.Fragment>
        <Header />
        <Body />
    </React.Fragment>
);

export default App;
