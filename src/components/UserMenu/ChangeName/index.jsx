import React from "react";
import styles from "./style.module.css";
import UploadProfilePicture from "../../../molecules/UploadProfilePicture";

const ChangeNameContent = () => {
    return (
        <>
            <section className={`${styles.changeName} p-4`}>
                <h3
                    className={`${styles.title} poppins-semibold color-light font-subtitle`}
                >
                    Detail Profil
                </h3>

                <div className={`${styles.contentBox} p-4 mt-5`}>
                    <h3 className="poppins-medium color-light font-paragraph">
                        Foto Profil
                    </h3>
                    <UploadProfilePicture />

                    <p className="poppins-medium font-paragraph mt-3 m-1 p-0 color-light">
                        Nama Lengkap <span className="text-danger">*</span>
                    </p>
                    <div
                        className={`${styles.inputContainer} input-group mb-2 d-flex justify-content-center align-items-center`}
                    >
                        <i className="fa-solid fa-user color-placeholder mx-2"></i>
                        <input
                            type="text"
                            id="inputName"
                            className={`${styles.input} form-control`}
                            placeholder="Masukkan Nama Lengkap"
                        />
                    </div>

                    <p className="poppins-medium font-paragraph mt-3 m-1 p-0 color-light">
                        Email <span className="text-danger">*</span>
                    </p>
                    <div
                        className={`${styles.inputContainerDisabled} input-group mb-2 d-flex justify-content-center align-items-center`}
                    >
                        <i className="fa-solid fa-at color-placeholder mx-2"></i>
                        <input
                            type="text"
                            id="inputName"
                            className={`${styles.input} form-control`}
                            placeholder="Masukkan Email"
                            disabled
                        />
                    </div>
                    <button
                        className={`${styles.submit} poppins-medium color-dark bgr-primary mt-3`}
                    >
                        Simpan Perubahan
                    </button>
                </div>
            </section>
        </>
    );
};

export default ChangeNameContent;
