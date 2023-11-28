import React, { useState } from "react";
import styles from "./style.module.css";

const ProductDetailGallery = () => {
    const thumbnailImages = [
        "https://media.discordapp.net/attachments/1164510335114428526/1176750376796557434/image.png?ex=65700130&is=655d8c30&hm=7cd16abfdcff5efa5edb54e8b2614fbd73f141fc92e7f27020ddef65b988e1d3&=&format=webp&width=409&height=364",
        "https://media.discordapp.net/attachments/1164510335114428526/1176751080860819507/image.png?ex=657001d8&is=655d8cd8&hm=5f391b795f159547c91665cba6c4afd002e9afff73e8b9dab5cf0fcbf1b83ff1&=&format=webp&width=409&height=409",
        "https://media.discordapp.net/attachments/1164510335114428526/1176753186921533490/image.png?ex=657003ce&is=655d8ece&hm=e336b4b2f74085bc7fc7f857c5312f3f37bf8fac0f468d877e0994cb7ce53fbc&=&format=webp&width=409&height=409",
    ];

    const [mainImage, setMainImage] = useState(thumbnailImages[0]);

    const handleThumbnailHover = (thumbnail) => {
        setMainImage(thumbnail);
    };

    return (
        <div className="product-gallery">
            <div className="row">
                <div className="col-sm-2 col-md-2 col-xl-2">
                    <div className={styles.thumbnailContainer}>
                        {thumbnailImages.map((thumbnail, index) => (
                            <img
                                key={index}
                                src={thumbnail}
                                alt={`Thumbnail ${index + 1}`}
                                className={`${styles.thumbnail} my-1`}
                                onMouseEnter={() =>
                                    handleThumbnailHover(thumbnail)
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
