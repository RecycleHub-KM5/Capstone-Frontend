import React, { useEffect, useState } from "react";
import MainLayout from "../../../layout/MainLayout";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const SuggestProduct = ({ dataProduct }) => {
    const [suggestedProducts, setSuggestedProducts] = useState([]);

    const formatPrice = (price) => {
        return `Rp${price.toLocaleString("id-ID")}`;
    };

    useEffect(() => {
        if (dataProduct && dataProduct.length > 0) {
            const getRandomElements = (arr, num) => {
                const shuffled = [...arr].sort(() => 0.5 - Math.random());
                return shuffled.slice(0, num);
            };

            const randomProducts = getRandomElements(dataProduct, 5);

            setSuggestedProducts(randomProducts);
        }
    }, [dataProduct]);

    return (
        <MainLayout>
            {suggestedProducts && (
                <div className={`${styles.gridContainer} mb-5 mt-3`}>
                    {suggestedProducts.map((item) => (
                        <div className={styles.gridItem} key={item.id}>
                            <Link
                                to={`/products/${item.id}`}
                                className="text-decoration-none"
                            >
                                <div className="card-img">
                                    <img src={item.thumbnail} />
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

export default SuggestProduct;
