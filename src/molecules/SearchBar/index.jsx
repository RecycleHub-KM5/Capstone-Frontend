import React, { useState } from "react";
import styles from "./style.module.css";

const SearchBar = ({ onSearch }) => {
    const [searchInput, setSearchInput] = useState("");

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleSearch = () => {
        onSearch(searchInput);
    };

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
                        value={searchInput}
                        onChange={handleInputChange}
                    />
                    <div className="input-group-btn">
                        <button
                            className={`btn btn-default ${styles.btnSearch} color-light`}
                            type="button"
                            onClick={handleSearch}
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
