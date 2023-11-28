import React, { useState } from "react";
import styles from "./style.module.css";

const FavoriteButton = () => {
    const [isFavorited, setIsFavorited] = useState(false);

    const handleToggleFavorite = () => {
        setIsFavorited(!isFavorited);
    };

    return (
        <button
            className={`favorite-button me-2 ${styles.favoriteBtn}`}
            onClick={handleToggleFavorite}
        >
            {isFavorited ? (
                <i class="fa-solid fa-heart fa-xs"></i>
            ) : (
                <i className="fa-regular fa-heart fa-xs"></i>
            )}
            <p className="poppins-regular font-smaller my-auto">
                {isFavorited ? "Favorit" : "Favoritkan"}
            </p>
        </button>
    );
};

export default FavoriteButton;
