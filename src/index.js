import React from "react";
import ReactDOM from "react-dom"; // Correct import statement

import App from "./App/App";

const root = document.getElementById('root');

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    root
);
