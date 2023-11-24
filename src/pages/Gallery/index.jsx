import React from "react";
import MainLayout from "../../layout/MainLayout";
import Navbar from "../../components/GlobalComponent/Navbar";
import Footer from "../../components/GlobalComponent/Footer";
import "./style.css";

const Gallery = () => {
    return (
        <MainLayout>
            <div className="container">
                <Navbar />

                <section className="gallery my-5">
                    <div className="container">
                        <h1 className="gallery-title poppins-bold font-jumbo color-light">
                            Galeri
                        </h1>
                        <h4 className="gallery-desc poppins-medium font-paragraph color-light">
                            Berbagai macam koleksi dari hasil daur ulang sampah
                        </h4>
                        <div className="image-wrapper mt-5">
                            <div className="row">
                                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                                    <img
                                        src="/images/gallery-1.png"
                                        className="w-100 shadow-1-strong rounded mb-4"
                                    />

                                    <img
                                        src="/images/gallery-4.png"
                                        className="w-100 shadow-1-strong rounded mb-4"
                                    />
                                </div>

                                <div className="col-lg-4 mb-4 mb-lg-0">
                                    <img
                                        src="/images/gallery-3.png"
                                        className="w-100 shadow-1-strong rounded mb-4"
                                    />

                                    <img
                                        src="/images/gallery-5.png"
                                        className="w-100 shadow-1-strong rounded mb-4"
                                    />
                                </div>

                                <div className="col-lg-4 mb-4 mb-lg-0">
                                    <img
                                        src="/images/gallery-2.png"
                                        className="w-100 shadow-1-strong rounded mb-4"
                                    />

                                    <img
                                        src="/images/gallery-6.png"
                                        className="w-100 shadow-1-strong rounded mb-4"
                                    />

                                    <img
                                        src="/images/gallery-7.png"
                                        className="w-100 shadow-1-strong rounded mb-4"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </MainLayout>
    );
};

export default Gallery;
