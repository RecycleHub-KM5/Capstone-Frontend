import { Analytics } from "@vercel/analytics/react";
import ReactGA from "react-ga";
import { BrowserRouter } from "react-router-dom";
import Router from "./config/router";
ReactGA.initialize("G-Q0Z9NKF8NL");

// Boostrap
import "./assets/plugins/bootstrap/css/bootstrap.min.css";
import "./assets/plugins/bootstrap/js/bootstrap.bundle.min.js";

// Fontawesome
import "./assets/plugins/fontawesome/css/all.min.css";
import "./assets/plugins/fontawesome/js/all.min.js";

// CSS Global
import "./assets/css/style.css";

function App() {
    return (
        <>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
            <Analytics />
        </>
    );
}

export default App;
