import React from "react";
import MainLayout from "../../layout/MainLayout";
import styles from "./style.module.css";

const FilterCategoryBox = () => {
    return (
        <MainLayout>
            <div className={`${styles.box} color-light poppins-regular p-4`}>
                <h3 className="poppins-semibold font-paragraph color-light">
                    Kategori Produk
                </h3>
                <button
                    className={`${styles.btnFilter} poppins-regular font-paragraph color-light my-2`}
                >
                    Produk Daur Ulang Plastik
                </button>
                <button
                    className={`${styles.btnFilter} poppins-regular font-paragraph color-light my-2`}
                >
                    Produk Daur Ulang Kertas
                </button>
                <button
                    className={`${styles.btnFilter} poppins-regular font-paragraph color-light my-2`}
                >
                    Produk Daur Ulang Kardus
                </button>
            </div>
        </MainLayout>
    );
};

export default FilterCategoryBox;
