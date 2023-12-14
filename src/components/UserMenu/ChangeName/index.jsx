import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import UploadProfilePicture from "../../../molecules/UploadProfilePicture";
import { useDispatch, useSelector } from "react-redux";
import { GetUser, UpdateUserName } from "../../../redux/actions/UserAction";

const ChangeNameContent = () => {
    const { dataUser } = useSelector((state) => state.userReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        if (dataUser === null) {
            dispatch(GetUser());
        }
    }, [dispatch, dataUser]);

    const [emailValue, setEmailValue] = useState("");
    const [nameValue, setNameValue] = useState("");

    useEffect(() => {
        if (dataUser && dataUser.length > 0) {
            setEmailValue(dataUser[0].email);
            setNameValue(dataUser[0].name);
        }
    }, [dataUser]);

    const handleUpdateName = async (e) => {
        e.preventDefault();
        await dispatch(UpdateUserName(nameValue));
    };

    return (
        <>
            <section className={`${styles.changeName} p-5`}>
                <div className="row justify-content-lg-center">
                    <div className="col col-md-8 col-lg-8">
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

                            <form onSubmit={handleUpdateName}>
                                <p className="poppins-medium font-paragraph mt-3 m-1 p-0 color-light">
                                    Nama Lengkap{" "}
                                    <span className="text-danger">*</span>
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
                                        value={nameValue}
                                        onChange={(e) =>
                                            setNameValue(e.target.value)
                                        }
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
                                        value={emailValue}
                                        disabled
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className={`${styles.submit} poppins-medium color-dark bgr-primary mt-3`}
                                >
                                    Simpan Perubahan
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ChangeNameContent;
