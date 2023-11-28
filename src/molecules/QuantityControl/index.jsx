import React, { useState } from "react";
import styles from "./style.module.css";

const QuantityControl = () => {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    return (
        <div className={styles.quantityContainer}>
            <button
                onClick={decreaseQuantity}
                className={styles.quantityController}
            >
                -
            </button>
            <span className="mx-2 color-light">{quantity}</span>
            <button
                onClick={increaseQuantity}
                className={styles.quantityController}
            >
                +
            </button>
        </div>
    );
};

export default QuantityControl;
