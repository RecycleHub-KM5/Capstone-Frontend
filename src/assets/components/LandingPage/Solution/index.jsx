import React from "react";
import styles from "./style.module.css";

const LPSolution = () => {
    return (
        <section className={`${styles.solution} mt-5`}>
            <h1 className="solution-title poppins-bold font-title color-light text-center mt-5">
                Solusi Pencemaran <br />
                Sampah
            </h1>
            <div className="solution-content">
                <hr className="line" />
                <div className={styles.solutionRow}>
                    <p className={`${styles.solutionDesc} poppins-bold`}>
                        / Tindakan Individu
                    </p>
                    <p className={`${styles.solutionDesc} poppins-bold`}>
                        Praktik Pengelolaan Sampah yang Berkelanjutan
                    </p>
                    <p className={`${styles.solutionDesc} poppins-medium`}>
                        Setiap individu dapat memulai dengan mempraktikkan
                        pengelolaan sampah yang berkelanjutan, seperti
                        memisahkan sampah organik dan non-organik, mendaur
                        ulang, dan mengurangi pembuangan sampah ke tempat
                        pembuangan sampah ilegal.
                    </p>
                </div>
                <hr className="line" />
                <div className={styles.solutionRow}>
                    <p className={`${styles.solutionDesc} poppins-bold`}>
                        / Tindakan Komunitas
                    </p>
                    <p className={`${styles.solutionDesc} poppins-bold`}>
                        Kampanye Pembersihan Komunitas
                    </p>
                    <p className={`${styles.solutionDesc} poppins-medium`}>
                        Komunitas dapat mengorganisir kampanye pembersihan
                        berkala di daerah mereka untuk membersihkan sampah dan
                        mengedukasi masyarakat tentang pentingnya menjaga
                        lingkungan bersih.
                    </p>
                </div>
                <hr className="line" />
                <div className={styles.solutionRow}>
                    <p className={`${styles.solutionDesc} poppins-bold`}>
                        / Tindakan Pemerintah
                    </p>
                    <p className={`${styles.solutionDesc} poppins-bold`}>
                        Kebijakan Pengurangan Plastik Sekali Pakai
                    </p>
                    <p className={`${styles.solutionDesc} poppins-medium`}>
                        Pemerintah dapat mengenakan pajak atau melarang
                        penggunaan plastik sekali pakai, serta mendorong
                        penggunaan alternatif ramah lingkungan.
                    </p>
                </div>
                <hr className="line" />
            </div>
        </section>
    );
};

export default LPSolution;
