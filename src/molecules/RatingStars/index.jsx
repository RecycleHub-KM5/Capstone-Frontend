import React from "react";
import styles from "./style.module.css";

const RatingStars = () => {
    return (
        <div className="d-flex align-items-center">
            <div className="ratings me-2">
                <i className={`fa fa-star ${styles.ratingColor}`}></i>
                <i className={`fa fa-star ${styles.ratingColor}`}></i>
                <i className={`fa fa-star ${styles.ratingColor}`}></i>
                <i className={`fa fa-star ${styles.ratingColor}`}></i>
                <i className={`fa fa-star ${styles.ratingColor}`}></i>
            </div>
            <h5 className="review-count poppins-regular font-smaller color-primary my-auto">
                (5 customer review)
            </h5>
        </div>
    );
};

export default RatingStars;
