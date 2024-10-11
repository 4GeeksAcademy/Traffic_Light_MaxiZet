//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";

import TrafficLight from "./component/traficLight.jsx";

//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<TrafficLight/>);

