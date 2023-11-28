import React from "react";
import styles from "./style.module.css";

const UploadProfilePicture = () => {
    return (
        <div className="row mt-3">
            <div className="col-sm-2 col-md-2 col-xl-2">
                <img src="https://media.discordapp.net/attachments/1164510335114428526/1178913480032657538/image.png?ex=6577dfbc&is=65656abc&hm=10cbf7b18d0c1e8c73d867faa6f6963942cc17b4242da83730a77195ee9ad8c1&=&format=webp&quality=lossless&width=112&height=112" />
            </div>
            <div className="col-sm-10 col-md-10 col-xl-10">
                <label
                    htmlFor="fileInput"
                    className={`${styles.inputFile} p-2 poppins-medium font-paragraph`}
                >
                    Pilih File
                    <input
                        type="file"
                        id="fileInput"
                        className="visually-hidden"
                        accept=".jpg, .jpeg, .png"
                    />
                </label>
                <p className="poppins-regular color-light font-smaller mt-2">
                    Gambar Profile Anda sebaiknya memiliki rasio 1:1
                    <br />
                    dan berukuran tidak lebih dari 2MB.
                </p>
            </div>
        </div>
    );
};

export default UploadProfilePicture;
