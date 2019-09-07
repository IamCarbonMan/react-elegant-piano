import React from "react";
import ReactDOM from "react-dom";

import Key from "./key.jsx";
import "./styles.css";

const pianoKeys = new Array(88).fill(undefined);

const App = () => <ul>{pianoKeys.map(Key)}</ul>;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
