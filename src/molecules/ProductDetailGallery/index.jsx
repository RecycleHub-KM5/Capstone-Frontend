import React, { useEffect, useState } from "react";
import styles from "./style.module.css";

const ProductDetailGallery = ({ data }) => {
    const [mainImage, setMainImage] = useState(
        data.length > 0 ? data[0].image : ""
    );

    const handleThumbnailHover = (thumbnail) => {
        setMainImage(thumbnail);
    };

    useEffect(() => {
        setMainImage(data.length > 0 ? data[0].image : "");
    }, [data]);

    return (
        <div className="product-gallery">
            <div className="row">
                <div className="col-sm-2 col-md-2 col-xl-2">
                    <div className={styles.thumbnailContainer}>
                        {data.map((item) => (
                            <img
                                key={item.id}
                                src={item.image}
                                className={`${styles.thumbnail} my-1`}
                                onMouseEnter={() =>
                                    handleThumbnailHover(item.image)
                                }
                            />
                        ))}
                    </div>
                </div>
                <div className="col-sm-10 col-md-10 col-xl-10 p-0">
                    <div
                        className={`main-image-container ${styles.imageContainer}`}
                    >
                        <img src={mainImage} className={styles.mainImage} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailGallery;
