import React from "react";
import MainLayout from "../../layout/MainLayout";
import Navbar from "../../components/GlobalComponent/Navbar";
import Footer from "../../components/GlobalComponent/Footer";
import "../../assets/css/informasi.css";
import InformationSwiper from "../../components/Information/swiper";


 

const Information = () => {
  
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
                <p id="description">
                  beberapa penyebab penumpukan sampah diantaranya : penggunaan
                  barang sekali pakai, Kuangnya pendidikan lingkungan, Kurangnya
                  Tempat pembuangan akhir, dan Pertumbuhan Penduduk.
                </p>
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
                  <h3 class="poppins-medium font-subtitle">
                    Penggunaan Barang Sekali Pakai
                  </h3>
                  <small class="poppins-regular lh-base">
                    Barang-barang sekali pakai adalah produk yang dirancang
                    untuk digunakan sekali saja atau hanya dalam jangka waktu
                    singkat sebelum dibuang. Beberapa contoh barang sekali pakai
                    yang umum termasuk kantong plastik, gelas plastik, sendok
                    garpu plastik, peralatan makanan sekali pakai, dan banyak
                    jenis kemasan plastik.
                  </small>
                </div>
              </div>
              <div class="card-causes causes-2">
                <div class="content-causes">
                  <h1 class="no-causes">02</h1>
                  <h3 class="poppins-medium font-subtitle">
                    Kurangnya <br />
                    Pendidikan Lingkungan
                  </h3>
                  <small class="poppins-regular lh-base">
                    kurangnya pendidikan lingkungan merupakan salah satu
                    penyebab utama penumpukan sampah. Pendidikan lingkungan yang
                    kurang atau tidak memadai dapat mengakibatkan kesadaran yang
                    rendah tentang pentingnya menjaga lingkungan dan praktik
                    pengelolaan sampah yang berkelanjutan
                  </small>
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
                  <small class="poppins-regular lh-base">
                    kurangnya tempat pembuangan akhir (TPA) atau fasilitas
                    pengelolaan sampah yang memadai merupakan salah satu
                    penyebab utama penumpukan sampah. Ketika tidak ada
                    infrastruktur yang cukup untuk menangani sampah yang
                    dihasilkan oleh masyarakat, maka sampah dapat menumpuk di
                    berbagai tempat yang tidak sesuai, seperti di pinggir jalan,
                    lahan kosong, sungai, atau bahkan di lingkungan alam.
                  </small>
                </div>
              </div>
              <div class="card-causes causes-4">
                <div class="content-causes">
                  <h1 class="no-causes">04</h1>
                  <h3 class="poppins-medium font-subtitle">
                    Pertumbuhan Penduduk
                  </h3>
                  <small class="poppins-regular lh-base">
                    pertumbuhan penduduk merupakan salah satu faktor utama
                    penyebab penumpukan sampah. Pertumbuhan penduduk yang cepat
                    dalam suatu daerah dapat menghasilkan peningkatan jumlah
                    sampah yang dihasilkan oleh masyarakat.
                  </small>
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
                      <img
                        src="https://cdn.discordapp.com/attachments/1153638653332029440/1162290517955063891/icon1.png?ex=653b6665&is=6528f165&hm=3be1c87d9b7e21b6727e0df0096593ca6ee2a8cf252e022ab18c6e7ffd77c491&"
                        alt="icon1"
                      />
                      <h3>Penggunaan Barang Yang dapat di Daur Ulang</h3>
                    </div>
                    <div>
                      <img
                        src="https://cdn.discordapp.com/attachments/1153638653332029440/1162290517699219467/icon2.png?ex=653b6665&is=6528f165&hm=2f2f4835bfc339157e6725d3a8e707db51d755d3351a3a91416d01d58982d434&"
                        alt="icon2"
                      />
                      <h3>Pemberian Edukasi Pendidikan lingkungan</h3>
                    </div>
                    <div>
                      <img
                        src="https://cdn.discordapp.com/attachments/1153638653332029440/1162290517485289532/icon3.png?ex=653b6665&is=6528f165&hm=03251946364c027772caaaff1689176bef1eccff174a20fad55ddf1267aa062b&"
                        alt="icon3"
                      />
                      <h3>Pengelolaan Sampah yang Efisien</h3>
                    </div>
                    <div>
                      <img
                        src="https://cdn.discordapp.com/attachments/1153638653332029440/1162290517271392348/icon4.png?ex=653b6665&is=6528f165&hm=b35769c91df215cb2f44be56937252e730c2cc61d58baf4b7eb87ae79809f34b&"
                        alt="icon4"
                      />
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
            <a href="produk.html" class="tombol">
              Produk daur ulang
            </a>
          </section>
        </div>
        <div className="container">
          <Footer />
        </div>
    </MainLayout>
  );
};

export default Information;
