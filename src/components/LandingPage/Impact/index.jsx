import React from "react";
import styles from "./style.module.css";

const LPImpact = () => {
    return (
        <section className="impact mt-5">
            <header>
                <h1
                    className={`${styles.impactTitle} poppins-bold font-title color-light text-center mt-5`}
                >
                    Dampak Sampah Pada Lingkungan
                </h1>
            </header>
            <div className={styles.gridContainer}>
                <div className={`${styles.gridItem} ${styles.item1}`}>
                    <img
                        src="https://i.ibb.co/0fTLMK0/botol.png"
                        className={styles.impactIcons}
                    />
                    <h4 className={`${styles.impactHeader} font-paragraph`}>
                        / Pencemaran Lingkungan
                    </h4>
                    <h3
                        className={`${styles.impactDesc} font-paragraph color-light`}
                    >
                        Sampah yang tidak dikelola dengan baik mencemari udara,
                        tanah, dan air.
                    </h3>
                </div>
                <div className={`${styles.gridItem} ${styles.item2}`}>
                    <img
                        src="https://i.ibb.co/CPjp60g/tupai.png"
                        className={styles.impactIcons}
                    />
                    <h4 className={`${styles.impactHeader} font-paragraph`}>
                        / Kehilangan Habitat
                    </h4>
                    <h3
                        className={`${styles.impactDesc} font-paragraph color-light`}
                    >
                        Tumpukan sampah merusak habitat alami dan mengancam
                        spesies.
                    </h3>
                </div>
                <div className={`${styles.gridItem} ${styles.item3}`}>
                    <img
                        src="https://i.ibb.co/NTQrjMj/tikus.png"
                        className={styles.impactIcons}
                    />
                    <h4 className={`${styles.impactHeader} font-paragraph`}>
                        / Kesehatan Masyarakat
                    </h4>
                    <h3
                        className={`${styles.impactDesc} font-paragraph color-light`}
                    >
                        Sampah dapat menyebabkan penyebaran penyakit dan masalah
                        kesehatan.
                    </h3>
                </div>
                <div className={`${styles.gridItem} ${styles.item4}`}>
                    <img
                        src="https://i.ibb.co/g9BjBFH/rumah.png"
                        className={styles.impactIcons}
                    />
                    <h4 className={`${styles.impactHeader} font-paragraph`}>
                        / Kerusakan Estetika
                    </h4>
                    <h3
                        className={`${styles.impactDesc} font-paragraph color-light`}
                    >
                        Sampah merusak penampilan lingkungan dan daerah wisata.
                    </h3>
                </div>
                <div className={`${styles.gridItem} ${styles.item5}`}>
                    <img
                        src="https://i.ibb.co/tKrTXyR/pohon.png"
                        className={styles.impactIcons}
                    />
                    <h4 className={`${styles.impactHeader} font-paragraph`}>
                        / Gangguan Ekosistem
                    </h4>
                    <h3
                        className={`${styles.impactDesc} font-paragraph color-light`}
                    >
                        Pengelolaan sampah yang buruk mengganggu keseimbangan
                        alam.
                    </h3>
                </div>
                <div className={`${styles.gridItem} ${styles.item6}`}>
                    <img
                        src="https://i.ibb.co/sqVmyvD/babi.png"
                        className={styles.impactIcons}
                    />
                    <h4 className={`${styles.impactHeader} font-paragraph`}>
                        / Kerugian Ekonomi
                    </h4>
                    <h3
                        className={`${styles.impactDesc} font-paragraph color-light`}
                    >
                        Masalah sampah menimbulkan biaya tinggi dan kerusakan
                        infrastruktur.
                    </h3>
                </div>
                <div className={`${styles.gridItem} ${styles.item7}`}>
                    <img
                        src="https://i.ibb.co/mS42zmW/udara.png"
                        className={styles.impactIcons}
                    />
                    <h4 className={`${styles.impactHeader} font-paragraph`}>
                        / Perubahan Iklim
                    </h4>
                    <h3
                        className={`${styles.impactDesc} font-paragraph color-light`}
                    >
                        Pembakaran sampah menghasilkan emisi gas rumah kaca.
                    </h3>
                </div>
            </div>
        </section>
    );
};

export default LPImpact;
