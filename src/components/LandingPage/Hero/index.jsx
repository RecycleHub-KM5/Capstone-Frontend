import React from "react";
import styles from "./style.module.css";
import "./common-style.css";
import { Link } from "react-router-dom";

const LPHero = () => {
    return (
        <section className="hero-2 mt-5">
            <div className="card-box hero-wrapper d-flex align-items-center">
                <div className="hero-text" id="flex-4">
                    <h1 className="hero-header poppins-bold font-title color-light">
                        Kenali lebih dalam permasalahan sampah
                    </h1>
                    <h4 className="hero-desc poppins-regular font-paragraph color-light lh-base mt-4">
                        Seperti yang kita ketahui, sampah merupakan salah satu
                        permasalahan yang sedang di selesaikan, namun seringkali
                        masyarakat masih membuang sampah sembarangan dan masih
                        banyak sampah yang tidak terkelola dengan baik.
                        RecycleHub hadir untuk membantu mengatasi permasalahan
                        sampah.
                    </h4>
                    <Link className={`${styles.btnCTA} mt-4`} to="/information">
                        <div className="wrapper d-flex align-items-center">
                            <p className="cta-text poppins-bold font-paragraph my-auto">
                                Pelajari lebih lanjut
                            </p>
                            <i className="fa-solid fa-arrow-right ms-2"></i>
                        </div>
                    </Link>
                </div>
                <div id="flex-2"></div>
                <div className={styles.heroImg} id="flex-6">
                    <img src="/images/hero-2.png" className="w-75" alt="" />
                </div>
            </div>
        </section>
    );
};

export default LPHero;
