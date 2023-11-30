import React from "react";
import MainLayout from "../../../../layout/MainLayout";
import Sidebar from "../../../../components/GlobalComponent/Sidebar";
import "./style.css";

const ChangePassword = () => {
  return (
    <MainLayout>
      <div className="row">
        <div className="col-sm-2 col-md-2 col-lg-2">
          <Sidebar />
        </div>
        <div className="col-sm-10 col-md-10 col-lg-10">
          <div className="containerMain">
            <div className="row justify-content-lg-center">
              <div className="col col-md-8 col-lg-8">
                <div className="akun">
                  <h1 className="poppins-semiBold color-light font-subtitle">
                    Akun
                  </h1>
                </div>
                <div className="containerPass justify-content-center p-3">
                  <div className="detail-ubh-pass px-4">
                    <div className="ubah-password mb-3 mt-3">
                      <h2 className="poppins-semiBold color-light font-subtitle">
                        Ubah Password
                      </h2>
                    </div>
                    <div className="row">
                      <div className="col col-lg-12">
                        <div className="passCmd">
                          <p className=" py-3 px-3">
                            Isi jika ingin mengubah password.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* password input */}
                    <div className="row justify-content-lg-center">
                      <div className="col col-lg-12 inputan my-lg-3">
                        <div className="mb-4  my-3 formPass">
                          <label
                            htmlFor="password"
                            className="password color-light"
                          >
                            Masukkan Password Baru <span>*</span>
                          </label>
                          <input
                            type="password"
                            id="password"
                            className="inputan container-fluid my-2 py-3 rounded-3 color-dark"
                            placeholder="Masukkan password"
                          />
                        </div>
                        <div className="mb-2 formPass">
                          <label
                            htmlFor="password"
                            className="password color-light"
                          >
                            Konfirmasi Password <span>*</span>
                          </label>
                          <input
                            type="password"
                            id="password"
                            className="inputan container-fluid my-2 py-3 rounded-3 color-dark"
                            placeholder="Konfirmasi Password"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col col-lg-5 col-md-4">
                        <div className="btnSaveChange">
                          <button
                            type="button"
                            className="btn bgr-primary btn-save py-3 px-5 rounded-4 color-dark poppins-semiBold mb-3"
                          >
                            Simpan Perubahan
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ChangePassword;
