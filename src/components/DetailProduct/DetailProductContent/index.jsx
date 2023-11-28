import React, { useState } from "react";
import MainLayout from "../../../layout/MainLayout";
import styles from "./style.module.css";
import RatingStars from "../../../molecules/RatingStars";
import ProductDetailGallery from "../../../molecules/ProductDetailGallery";
import QuantityControl from "../../../molecules/QuantityControl";
import FavoriteButton from "../../../molecules/FavoriteButton";

const DetailProductContent = () => {
    const [showNoteForm, setShowNoteForm] = useState(false);
    const [note, setNote] = useState("");

    const handleToggleNoteForm = () => {
        setShowNoteForm(!showNoteForm);
    };

    const handleAddNote = () => {
        console.log("Catatan ditambahkan:", note);
        setShowNoteForm(false);
        setNote("");
    };

    const handleCancelNote = () => {
        setShowNoteForm(false);
        setNote("");
    };

    return (
        <MainLayout>
            <div className={`${styles.contentContainer} mt-5`}>
                <h5 className="poppins-bold font-subtitle color-light">
                    Bunga Plastik
                </h5>
                <RatingStars />
                <hr className="color-line" />
                <div className="row">
                    <div className="col-sm-5 col-md-5 col-xl-5">
                        <ProductDetailGallery />
                    </div>
                    <div className="col-sm-7 col-md-7 col-xl-7">
                        <h3
                            className={`font-subtitle color-light poppins-medium ${styles.subtitle}`}
                        >
                            Rp25.000 - Rp50.000
                        </h3>
                        <hr className={`color-line ${styles.line}`} />
                        <div className={`wrapper ${styles.flexWrapper} d-flex`}>
                            <h3
                                className={`text-placeholder color-placeholder poppins-regular font-smaller ${styles.textPlaceholder}`}
                            >
                                Deskripsi :
                            </h3>
                            <h3
                                className={`description color-light poppins-regular ms-1 font-smaller ${styles.textDescription}`}
                            >
                                Cocok ditempatkan di tembok sebagai pajangan
                            </h3>
                        </div>
                        <hr className={`color-line ${styles.line}`} />
                        <h3 className="text-placeholder color-placeholder poppins-regular font-smaller">
                            Atur Jumlah :
                        </h3>
                        <div className="wrapper d-flex">
                            <QuantityControl />
                            <button
                                className={`${styles.cart} color-light d-flex justify-content-center align-items-center ms-2`}
                            >
                                <p className="my-auto font-smaller poppins-medium mx-2">
                                    + Keranjang
                                </p>
                            </button>
                            <button
                                className={`${styles.buy} bgr-primary color-dark d-flex justify-content-center align-items-center ms-2`}
                            >
                                <i className="fa-solid fa-cart-shopping fa-xs"></i>
                                <p className="my-auto font-smaller poppins-medium mx-2">
                                    Beli Sekarang
                                </p>
                            </button>
                        </div>
                        <div className="wrapper d-flex mt-3">
                            <FavoriteButton />
                            <div className="vr color-light"></div>
                            <button
                                className={`${styles.shareBtn} d-flex justify-content-center align-items-center mx-2`}
                            >
                                <i className="fa-solid fa-share-nodes fa-xs"></i>
                                <p className="my-auto ms-2 poppins-regular font-smaller">
                                    Bagikan
                                </p>
                            </button>
                            <div className="vr color-light"></div>
                            <button
                                className={`${styles.shareBtn} d-flex justify-content-center align-items-center ms-2`}
                                onClick={handleToggleNoteForm}
                            >
                                <i className="fa-regular fa-pen-to-square fa-xs"></i>
                                <p className="my-auto ms-2 poppins-regular font-smaller">
                                    Tambah Catatan
                                </p>
                            </button>
                        </div>

                        {showNoteForm && (
                            <div className="mt-2">
                                <textarea
                                    className={`${styles.noteForm} poppins-regular font-smaller`}
                                    placeholder="Tambahkan catatan..."
                                    value={note}
                                    onChange={(e) => setNote(e.target.value)}
                                />
                                <div className="wrapper d-flex mt-1">
                                    <button
                                        onClick={handleCancelNote}
                                        className={`${styles.cancelButton} poppins-medium font-smaller color-placeholder me-2`}
                                    >
                                        Batal
                                    </button>
                                    <button
                                        onClick={handleAddNote}
                                        className={`${styles.addButton} poppins-medium font-smaller`}
                                    >
                                        Tambah
                                    </button>
                                </div>
                            </div>
                        )}

                        <hr className={`color-line ${styles.line}`} />
                        <div className="wrapper d-flex justify-content-start align-items-center mt-3">
                            <i className="fa-solid fa-location-dot fa-xs color-placeholder me-2"></i>
                            <p className="poppins-light font-smaller color-placeholder my-auto me-1">
                                Dikirim Dari
                            </p>
                            <strong className="poppins-regular font-smaller color-light">
                                Kab. Bandung
                            </strong>
                        </div>
                        <div className="wrapper d-flex justify-content-start align-items-center mt-1">
                            <i className="fa-solid fa-truck fa-xs color-placeholder me-1"></i>
                            <p className="poppins-regular font-smaller color-light my-auto">
                                Ongkir reguler 14rb - 20rb
                            </p>
                        </div>

                        <hr className={`color-line ${styles.line}`} />
                        <div className="wrapper d-flex justify-content-start align-items-center mt-3">
                            <p className="poppins-light font-smaller color-placeholder my-auto me-1">
                                Nama :
                            </p>
                            <p className="poppins-light font-smaller color-primary my-auto me-1">
                                Bunga Putih
                            </p>
                        </div>
                        <div className="wrapper d-flex justify-content-start align-items-center mt-1">
                            <p className="poppins-light font-smaller color-placeholder my-auto me-1">
                                Bahan :
                            </p>
                            <p className="poppins-light font-smaller color-primary my-auto me-1">
                                Plastik botol teh gelas, sedotan
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default DetailProductContent;
