import { BrowserRouter } from "react-router-dom";
import Router from "./assets/config/router";

// CSS Global
import "./assets/css/style.css";

// Boostrap
import "./assets/plugins/bootstrap/css/bootstrap.min.css";
import "./assets/plugins/bootstrap/js/bootstrap.bundle.min.js";

// Fontawesome
import "./assets/plugins/fontawesome/css/all.min.css";
import "./assets/plugins/fontawesome/js/all.min.js";

function App() {
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
}

export default App;
