import React from "react";
import styles from "./style.module.css";

const History = () => {
    return (
        <>
            <section className={`${styles.history} p-4`}>
                <div className="wrapper">
                    <h3 className="history-title poppins-semibold color-light font-subtitle">
                        Riwayat Transaksi
                    </h3>

                    <div className="row">
                        <div className="col-12 mt-3">
                            <div
                                className={`${styles.historyCard} px-4 py-3 rounded shadow-sm`}
                            >
                                <div className="transaction-header d-flex justify-content-between">
                                    <h3 className="category my-auto color-light font-paragraph">
                                        Produk Daur Ulang
                                    </h3>
                                    <h3 className="category my-auto color-primary font-paragraph">
                                        Berhasil
                                    </h3>
                                </div>
                                <hr className="color-light" />
                                <div className="history-body mb-2">
                                    <div className="row">
                                        <div className="col-sm-1 col-md-1 col-lg-1">
                                            <img
                                                src="https://media.discordapp.net/attachments/1164510335114428526/1176751080860819507/image.png?ex=657001d8&is=655d8cd8&hm=5f391b795f159547c91665cba6c4afd002e9afff73e8b9dab5cf0fcbf1b83ff1&=&format=webp&width=409&height=409"
                                                className={styles.historyImg}
                                            />
                                        </div>
                                        <div className="col-sm-11 col-md-11 col-lg-11 d-flex flex-column ">
                                            <div className="history-detail-header d-flex justify-content-between">
                                                <h3 className="detail-header color-line font-paragraph">
                                                    Nama Produk
                                                </h3>
                                                <h3 className="detail-header color-line font-paragraph">
                                                    Waktu Pembayaran
                                                </h3>
                                                <h3 className="detail-header color-line font-paragraph">
                                                    Harga Produk
                                                </h3>
                                            </div>
                                            <div className="history-detail-body d-flex justify-content-between">
                                                <h3 className="detail-body color-light font-paragraph">
                                                    Boneka
                                                </h3>
                                                <h3 className="detail-body color-light font-paragraph">
                                                    8 September 2023, 14:42 WIB
                                                </h3>
                                                <h3 className="detail-body color-light font-paragraph">
                                                    Rp100.000
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="color-light" />
                                <div className="history-footer d-flex justify-content-between">
                                    <h3 className="placeholder-price color-light font-paragraph poppins-semibold">
                                        Total Pembayaran
                                    </h3>
                                    <h3 className="price-total color-primary font-paragraph poppins-semibold">
                                        Rp100.000
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default History;
