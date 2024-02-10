import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

const MainLayout = (props) => {
    const location = useLocation();
    useEffect(() => {
        ReactGA.pageview(location.pathname + location.search);
    }, [location]);

    return (
        <>
            <section className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 g-0">
                        {props.children}
                    </div>
                </div>
            </section>
        </>
    );
};

export default MainLayout;
