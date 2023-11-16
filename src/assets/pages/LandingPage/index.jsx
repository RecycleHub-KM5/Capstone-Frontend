import React from "react";
import styles from "./style.module.css";
import MainLayout from "../../layout/MainLayout";
import Navbar from "../../components/GlobalComponent/Navbar";
import Footer from "../../components/GlobalComponent/Footer";
import LPTagline from "../../components/LandingPage/Tagline";
import LPHero from "../../components/LandingPage/Hero";
import LPImpact from "../../components/LandingPage/Impact";
import LPFactor from "../../components/LandingPage/Factor";
import LPSolution from "../../components/LandingPage/Solution";

const LandingPage = () => {
    return (
        <MainLayout>
            <div className="container">
                <section className={styles.hero1}>
                    <Navbar />
                    <LPTagline />
                </section>

                <LPHero />
                <LPImpact />
                <LPFactor />
                <LPSolution />
                <Footer />
            </div>
        </MainLayout>
    );
};

export default LandingPage;
