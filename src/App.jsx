import { BrowserRouter } from "react-router-dom";
import Router from "./config/router";
import { inject } from "@vercel/analytics";

// Boostrap
import "./assets/plugins/bootstrap/css/bootstrap.min.css";
import "./assets/plugins/bootstrap/js/bootstrap.bundle.min.js";

// Fontawesome
import "./assets/plugins/fontawesome/css/all.min.css";
import "./assets/plugins/fontawesome/js/all.min.js";

// CSS Global
import "./assets/css/style.css";
import { useEffect } from "react";

function App() {
    useEffect(() => {
        inject();
    }, []);

    return (
        <>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </>
    );
}

export default App;
