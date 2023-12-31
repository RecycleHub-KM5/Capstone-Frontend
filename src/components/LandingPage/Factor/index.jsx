import React from "react";
import styles from "./style.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const LPFactor = () => {
    return (
        <section className="factor spacing-section">
            <h1
                className={`${styles.factorTitle} poppins-bold font-title color-light my-5`}
            >
                Faktor-faktor penyebab <br />
                penumpukan sampah
            </h1>
            <div className={`card-box mt-4 ${styles.sliderContainer}`}>
                <div className="swiper-wrapper">
                    <Swiper
                        slidesPerView={"auto"}
                        pagination={false}
                        modules={[Pagination]}
                    >
                        <SwiperSlide className={styles.sliderItem}>
                            <div className="col-sm-7 col-md-7 col-lg-7 my-auto p-3">
                                <h1
                                    className={`${styles.factorTitle} poppins-bold font-title color-light`}
                                >
                                    KURANGNYA TPA
                                </h1>
                                <ul id="first-swiper-slide">
                                    <li
                                        className={`${styles.factorItem} color-light poppins-medium font-paragraph`}
                                    >
                                        Volume sampah sangat besar dan tidak
                                        diimbangi oleh daya tamping TPA sehingga
                                        melebihi kapasitasnya.
                                    </li>

                                    <li
                                        className={`${styles.factorItem} color-light poppins-medium font-paragraph`}
                                    >
                                        Lahan TPA semakin menyempit akibat
                                        tergusur oleh pengunaan lain.
                                    </li>
                                    <li
                                        className={`${styles.factorItem} color-light poppins-medium font-paragraph`}
                                    >
                                        Jarak TPA dan pusat sampah relatif jauh
                                        hingga waktu untuk menganggut sampah
                                        kurang efektif.
                                    </li>
                                    <li
                                        className={`${styles.factorItem} color-light poppins-medium font-paragraph`}
                                    >
                                        Fasilitas pengakutan sampah terbatas dan
                                        tidak mampu menganggut seluruh sampah.
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-5 col-md-5 col-lg-5">
                                <img
                                    src="/images/factor-1.png"
                                    className={styles.factorImg}
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={styles.sliderItem}>
                            <div className="col-sm-7 col-md-7 col-lg-7 my-auto p-3">
                                <h1
                                    className={`${styles.factorTitle} poppins-bold font-title color-light`}
                                >
                                    PRODUK SEKALI PAKAI
                                </h1>
                                <p
                                    className={`${styles.factorItem} font-paragraph color-light lh-base poppins-medium`}
                                >
                                    Salah satu faktor utama yang berkontribusi
                                    terhadap pemanasan global. Ketika industri
                                    menghasilkan energi atau memproduksi barang,
                                    mereka seringkali menggunakan bahan bahan
                                    bakar fosil seperti batu bara, minyak, dan
                                    gas alam. Proses pembakaran bahan bakar ini
                                    menghasilkan emisi gas rumah kaca, terutama
                                    karbon dioksida (CO2) dan metana (CH4)
                                </p>
                            </div>
                            <div className="col-sm-5 col-md-5 col-lg-5">
                                <img
                                    src="/images/factor-2.png"
                                    className={styles.factorImg}
                                />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default LPFactor;
