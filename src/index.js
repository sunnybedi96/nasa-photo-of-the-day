import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>, document.getElementById("root")
    )