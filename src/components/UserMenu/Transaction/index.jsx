import React from "react";
import styles from "./style.module.css";

const History = ({ dataTransaction }) => {
    const formatPrice = (price) => {
        return `Rp${price.toLocaleString("id-ID")}`;
    };

    return (
        <>
            <section className={`${styles.history} p-4`}>
                <div className="wrapper">
                    <h3 className="history-title poppins-semibold color-light font-subtitle mb-3">
                        Riwayat Transaksi
                    </h3>

                    {dataTransaction &&
                        dataTransaction.map((item) => (
                            <div className="row" key={item.id}>
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
                                                        src={
                                                            item.product_detail
                                                                .image
                                                        }
                                                        className={
                                                            styles.historyImg
                                                        }
                                                        alt="Product"
                                                    />
                                                </div>
                                                <div className="col-sm-11 col-md-11 col-lg-11 d-flex flex-column ">
                                                    <div className="history-detail-header d-flex justify-content-between">
                                                        <h3 className="detail-header color-line font-paragraph">
                                                            Nama Produk
                                                        </h3>
                                                        <h3 className="detail-header color-line font-paragraph ms-5">
                                                            Waktu Pembayaran
                                                        </h3>
                                                        <h3 className="detail-header color-line font-paragraph ms-5">
                                                            Jumlah
                                                        </h3>
                                                        <h3 className="detail-header color-line font-paragraph">
                                                            Harga Produk
                                                        </h3>
                                                    </div>
                                                    <div className="history-detail-body d-flex justify-content-between mt-2">
                                                        <h3 className="detail-body color-light font-paragraph">
                                                            {
                                                                item
                                                                    .product_detail
                                                                    .name
                                                            }
                                                        </h3>
                                                        <h3 className="detail-body color-light font-paragraph">
                                                            {item.createdAt}
                                                        </h3>
                                                        <h3 className="detail-body color-light font-paragraph">
                                                            {item.quantity}
                                                        </h3>
                                                        <h3 className="detail-body color-light font-paragraph">
                                                            {formatPrice(
                                                                item
                                                                    .product_detail
                                                                    .product
                                                                    .price
                                                            )}
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
                                                {formatPrice(item.total_price)}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </section>
        </>
    );
};

export default History;
