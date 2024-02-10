import { BrowserRouter, useLocation } from "react-router-dom";
import Router from "./config/router";
import { Analytics } from "@vercel/analytics/react";
import ReactGA from "react-ga";

// Boostrap
import "./assets/plugins/bootstrap/css/bootstrap.min.css";
import "./assets/plugins/bootstrap/js/bootstrap.bundle.min.js";

// Fontawesome
import "./assets/plugins/fontawesome/css/all.min.css";
import "./assets/plugins/fontawesome/js/all.min.js";

// CSS Global
import "./assets/css/style.css";
import { useEffect, useState } from "react";

function App() {
    ReactGA.initialize("G-Q0Z9NKF8NL");

    const [formData, setFormData] = useState({
        browser_type: "",
        created_at: "",
        client_info_browser: "",
    });

    const handleSubmit = async (e) => {
        try {
            const response = await fetch(
                "https://api-recyclehub.omdo.site/api/history",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        browser_type: getBrowserType(),
                        created_at: formData.created_at,
                        client_info_browser: formData.client_info_browser,
                    }),
                }
            );

            if (response.ok) {
                console.log("Data sent successfully");
                // Do something after successful data submission
            } else {
                console.error("Error sending data:", response.statusText);
            }
        } catch (error) {
            console.error("Error sending data:", error.message);
        }
    };

    const getBrowserType = () => {
        const userAgent = navigator.userAgent;

        if (userAgent.indexOf("Firefox") !== -1) {
            return "Mozilla Firefox";
        } else if (userAgent.indexOf("Chrome") !== -1) {
            return "Google Chrome";
        } else if (userAgent.indexOf("Safari") !== -1) {
            return "Apple Safari";
        } else if (userAgent.indexOf("Edge") !== -1) {
            return "Microsoft Edge";
        } else if (
            userAgent.indexOf("MSIE") !== -1 ||
            userAgent.indexOf("Trident/") !== -1
        ) {
            return "Internet Explorer";
        } else {
            return "Unknown Browser";
        }
    };

    useEffect(() => {
        handleSubmit();
    }, []);

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
