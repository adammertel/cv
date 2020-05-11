import "react-bulma-components/dist/react-bulma-components.min.css";
import * as React from "react";
import ReactDOM from "react-dom";

import App from "./app";

const el = document.getElementById("app");
console.log(el);

ReactDOM.render(<App />, el);
