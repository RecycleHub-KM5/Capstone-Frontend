import React from "react";
import MainLayout from "../../layout/MainLayout";
import Navbar from "../../components/GlobalComponent/Navbar";
import Footer from "../../components/GlobalComponent/Footer";
import "../../assets/css/informasi.css";
import InformationSwiper from "../../components/Information/swiper";
import { Link } from "react-router-dom";

const Information = () => {
    const status = localStorage.getItem("status_login");

    return (
        <MainLayout>
            <div className="container">
                <Navbar />
            </div>
            <div class="bgheader">
                <div class="container">
                    <section id="tema">
                        <div class="left-header">
                            <h1 class="font-jumbo">
                                PENYEBAB
                                <br />
                                PENUMPUKAN <br />
                                SAMPAH
                            </h1>
                            <p id="description">beberapa penyebab penumpukan sampah diantaranya : penggunaan barang sekali pakai, Kuangnya pendidikan lingkungan, Kurangnya Tempat pembuangan akhir, dan Pertumbuhan Penduduk.</p>
                        </div>
                    </section>
                </div>
            </div>

            <div class="background-long">
                <div class="container container-causes">
                    <div class="top-causes">
                        <div class="card-causes causes-1">
                            <div class="content-causes">
                                <h1 class="no-causes">01</h1>
                                <h3 class="poppins-medium font-subtitle">Penggunaan Barang Sekali Pakai</h3>
                                <small class="poppins-regular lh-base">Barang-barang sekali pakai adalah produk yang dirancang untuk digunakan sekali saja atau hanya dalam jangka waktu singkat sebelum dibuang. Beberapa contoh barang sekali pakai yang umum termasuk kantong plastik, gelas plastik, sendok garpu plastik, peralatan makanan sekali pakai, dan banyak jenis kemasan plastik.</small>
                            </div>
                        </div>
                        <div class="card-causes causes-2">
                            <div class="content-causes">
                                <h1 class="no-causes">02</h1>
                                <h3 class="poppins-medium font-subtitle">
                                    Kurangnya <br />
                                    Pendidikan Lingkungan
                                </h3>
                                <small class="poppins-regular lh-base">kurangnya pendidikan lingkungan merupakan salah satu penyebab utama penumpukan sampah. Pendidikan lingkungan yang kurang atau tidak memadai dapat mengakibatkan kesadaran yang rendah tentang pentingnya menjaga lingkungan dan praktik pengelolaan sampah yang berkelanjutan</small>
                            </div>
                        </div>
                    </div>
                    <div class="bot-causes">
                        <div class="card-causes causes-3">
                            <div class="content-causes">
                                <h1 class="no-causes">03</h1>
                                <h3 class="poppins-medium font-subtitle">
                                    Kurangnya <br />
                                    Tempat Pembuangan Akhir
                                </h3>
                                <small class="poppins-regular lh-base">kurangnya tempat pembuangan akhir (TPA) atau fasilitas pengelolaan sampah yang memadai merupakan salah satu penyebab utama penumpukan sampah. Ketika tidak ada infrastruktur yang cukup untuk menangani sampah yang dihasilkan oleh masyarakat, maka sampah dapat menumpuk di berbagai tempat yang tidak sesuai, seperti di pinggir jalan, lahan kosong, sungai, atau bahkan di lingkungan alam.</small>
                            </div>
                        </div>
                        <div class="card-causes causes-4">
                            <div class="content-causes">
                                <h1 class="no-causes">04</h1>
                                <h3 class="poppins-medium font-subtitle">Pertumbuhan Penduduk</h3>
                                <small class="poppins-regular lh-base">pertumbuhan penduduk merupakan salah satu faktor utama penyebab penumpukan sampah. Pertumbuhan penduduk yang cepat dalam suatu daerah dapat menghasilkan peningkatan jumlah sampah yang dihasilkan oleh masyarakat.</small>
                            </div>
                        </div>
                    </div>
                </div>
                <section>
                    <div class="container">
                        <h3 class="subjudul font-title">
                            Dampak Negatif <span> penumpukan Sampah</span>
                        </h3>
                        <div class="row">
                            <InformationSwiper />
                        </div>
                    </div>
                </section>

                <section id="solusi">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 col-md-6 col-lg-6">
                                <h1 class="solusi">
                                    SOLUSI <br />
                                    PERMASALAHAN <br />
                                    SAMPAH
                                </h1>
                            </div>
                            <div class="col-sm-12 cok-md-6 col-lg-6">
                                <div class="point-solusi">
                                    <div>
                                        <img src="https://cdn.discordapp.com/attachments/1164510335114428526/1218863613616328776/image.png?ex=66093632&is=65f6c132&hm=4b3a30c2edfc0a81dd5a6fd19b69e53e14832470cbf04d91dbe08f61fd748366&" alt="icon1" />
                                        <h3>Penggunaan Barang Yang dapat di Daur Ulang</h3>
                                    </div>
                                    <div>
                                        <img src="https://cdn.discordapp.com/attachments/1164510335114428526/1218863647338791002/image.png?ex=6609363a&is=65f6c13a&hm=d38eff578d849ce98aae0be4cef0a562fc3c23a0db168a594e5c84150788bb58&" alt="icon2" />
                                        <h3>Pemberian Edukasi Pendidikan lingkungan</h3>
                                    </div>
                                    <div>
                                        <img src="https://cdn.discordapp.com/attachments/1164510335114428526/1218863663654637578/image.png?ex=6609363e&is=65f6c13e&hm=ec3d8d938a1a3f7d222a9b6cfacd96da0db87a32711683ba768d8ad96dc72b42&" alt="icon3" />
                                        <h3>Pengelolaan Sampah yang Efisien</h3>
                                    </div>
                                    <div>
                                        <img src="https://cdn.discordapp.com/attachments/1164510335114428526/1218863681316585482/image.png?ex=66093643&is=65f6c143&hm=6e266b3f09be30f31065ff6d729494073637ae05aee86ba4ab6f0bef4b3ea25d&" alt="icon4" />
                                        <h3>Menggunakan produk produk yang ramah lingkungan</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="sectionakhir">
                    <p class="ajakan">
                        <strong>
                            MARI BERSAMA KITA BANGGA
                            <br />
                            MENGGUNAKAN PRODUK DAUR ULANG
                        </strong>
                    </p>
                    <Link to={status ? "/products" : "/login"} class="tombol">
                        Produk daur ulang
                    </Link>
                </section>
            </div>
            <div className="container">
                <Footer />
            </div>
        </MainLayout>
    );
};

export default Information;
