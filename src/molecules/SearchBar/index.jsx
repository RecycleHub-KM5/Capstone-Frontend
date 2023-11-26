import React from "react";
import styles from "./style.module.css";

const SearchBar = () => {
    return (
        <>
            <center>
                <div
                    className={`${styles.searchContainer} input-group mt-5 mb-5`}
                >
                    <input
                        type="text"
                        className={`${styles.input} form-control`}
                        placeholder="Cari produk di RecycleHub"
                    />
                    <div className="input-group-btn">
                        <button
                            className={`btn btn-default ${styles.btnSearch} color-light`}
                            type="submit"
                        >
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                </div>
            </center>
        </>
    );
};

export default SearchBar;
