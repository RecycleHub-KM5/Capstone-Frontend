import React from "react";
import MainLayout from "../../layout/MainLayout";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const ProductContent = ({ dataProduct }) => {
    const formatPrice = (price) => {
        return `Rp${price.toLocaleString("id-ID")}`;
    };

    return (
        <MainLayout>
            {dataProduct && (
                <div className={`${styles.gridContainer} mb-5`}>
                    {dataProduct.map((item) => (
                        <div className={styles.gridItem} key={item.id}>
                            <Link
                                to={`/products/${item.id}`}
                                className="text-decoration-none"
                            >
                                <div className="card-img">
                                    <img src={item.thumbnail} alt="" />
                                </div>
                                <div
                                    className={`${styles.cardBody} d-flex flex-column justify-content-spacebetween`}
                                >
                                    <div className="wrapper">
                                        <h4 className="card-title poppins-medium font-paragraph color-light">
                                            {item.name}
                                        </h4>
                                        <p
                                            className={`${styles.cardDescription} poppins-regular font-smaller mt-2`}
                                        >
                                            {item.description}
                                        </p>
                                    </div>
                                    <h4 className="price poppins-medium font-paragraph color-light mt-4">
                                        {formatPrice(item.price)}
                                    </h4>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </MainLayout>
    );
};

export default ProductContent;
