import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <section className="tagline-footer mt-5">
                <div className="container d-flex justify-content-center">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <img
                                src="/images/footer-tagline.png"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <footer className="mt-5">
                <hr className="line" />
                <div className="footer-container">
                    <div className="footer-left col-sm-7 col-md-10 col-lg-10">
                        <h3 className="footer-header poppins-medium">
                            Tentang RecycleHub
                        </h3>
                        <p className="footer-desc">
                            RecycleHub bertujuan untuk mengurangi sampah dengan
                            menyajikan konten edukasi dan daur ulang untuk masa
                            depan yang lebih baik di generasi selanjutnya.
                        </p>
                        <div className="input-container">
                            <input
                                type="text"
                                placeholder="Masukkan Email..."
                                className="font-paragraph poppins-regular"
                            />
                            <button
                                type="submit"
                                className="poppins-bold font-paragraph"
                            >
                                Kirim
                            </button>
                        </div>
                        <div className="footer-row">
                            <ul className="no-indent">
                                <li>
                                    <Link
                                        to="/gallery"
                                        className="color-light font-paragraph"
                                    >
                                        Galeri
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/information"
                                        className="color-light font-paragraph"
                                    >
                                        Informasi
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/products"
                                        className="color-light font-paragraph"
                                    >
                                        Produk
                                    </Link>
                                </li>
                                <li>
                                    <Link className="color-light font-paragraph">
                                        Bantuan
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-right col-sm-5 col-md-2 col-lg-2 my-">
                        <p className="footer-credit poppins-regular">
                            Copyright ©2023, RecycleHub.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
