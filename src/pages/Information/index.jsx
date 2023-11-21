import React from "react";
import MainLayout from "../../layout/MainLayout";

const Information = () => {
    return (
        <MainLayout>
            <div>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Informasi - RecycleHub</title>
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
            crossorigin="anonymous"
        />
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"
        />
        <link rel="stylesheet" href="../assets/css/core.css" />
        <link rel="stylesheet" href="../assets/css/style-global.css" />
        <link rel="stylesheet" href="../assets/css/informasi.css" />
    </head>

    <body>
        <header>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-12">
                        <nav class="navbar navbar-expand-lg">
                            <div class="container-fluid">
                                <a
                                    class="navbar-brand color-light poppins-bold"
                                    href="#"
                                    >RecycleHub</a
                                >
                                <button
                                    class="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarNav"
                                    aria-controls="navbarNav"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <img src="../assets/icons/bar.svg" />
                                </button>
                                <div
                                    class="collapse navbar-collapse"
                                    id="navbarNav"
                                >
                                    <div class="wrapper">
                                        <ul class="navbar-nav">
                                            <li class="nav-item">
                                                <a
                                                    class="nav-link color-light poppins-medium font-paragraph ms-3"
                                                    aria-current="page"
                                                    href="../index.html"
                                                    >Home</a
                                                >
                                            </li>
                                            <li class="nav-item">
                                                <a
                                                    class="nav-link color-light poppins-medium font-paragraph ms-3"
                                                    href="gallery.html"
                                                    >Galeri</a
                                                >
                                            </li>
                                            <li class="nav-item">
                                                <a
                                                    class="nav-link active color-light poppins-medium font-paragraph ms-3"
                                                    href="#"
                                                    >Informasi</a
                                                >
                                            </li>
                                            <li class="nav-item">
                                                <a
                                                    class="nav-link color-light poppins-medium font-paragraph ms-3 me-5"
                                                    href="produk.html"
                                                    >Produk</a
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                    <div
                                        class="wrapper ms-3"
                                        id="btn-wrapper-auth"
                                    >
                                        <a
                                            href="../pages/login.html"
                                            id="btn-login"
                                            class="poppins-semiBold"
                                            >Masuk</a
                                        >
                                        <button
                                            id="btn-register"
                                            class="poppins-semiBold"
                                            onclick="window.location.href='../pages/register.html';"
                                        >
                                            Daftar
                                        </button>
                                    </div>
                                    <div
                                        class="wrapper btn-wrapper-none ms-3"
                                        id="btn-wrapper-user"
                                    >
                                        <button id="btn-user">
                                            <h3
                                                class="poppins-medium font-paragraph mt-2"
                                            >
                                                Hallo, User
                                            </h3>
                                            <img
                                                src="https://i.ibb.co/gZyqXvV/dummy-ava.png"
                                                alt=""
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        <div class="bgheader">
            <div class="container">
                <section id="tema">
                    <div class="left-header">
                        <h1 class="font-jumbo">
                            PENYEBAB<br />
                            PENUMPUKAN <br />
                            SAMPAH
                        </h1>
                        <p id="description">
                            beberapa penyebab penumpukan sampah diantaranya :
                            penggunaan barang sekali pakai, Kuangnya pendidikan
                            lingkungan, Kurangnya Tempat pembuangan akhir, dan
                            Pertumbuhan Penduduk.
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
                            <small class="poppins-regular lh-base"
                                >Barang-barang sekali pakai adalah produk yang
                                dirancang untuk digunakan sekali saja atau hanya
                                dalam jangka waktu singkat sebelum dibuang.
                                Beberapa contoh barang sekali pakai yang umum
                                termasuk kantong plastik, gelas plastik, sendok
                                garpu plastik, peralatan makanan sekali pakai,
                                dan banyak jenis kemasan plastik.
                            </small>
                        </div>
                    </div>
                    <div class="card-causes causes-2">
                        <div class="content-causes">
                            <h1 class="no-causes">02</h1>
                            <h3 class="poppins-medium font-subtitle">
                                Kurangnya <br />Pendidikan Lingkungan
                            </h3>
                            <small class="poppins-regular lh-base"
                                >kurangnya pendidikan lingkungan merupakan salah
                                satu penyebab utama penumpukan sampah.
                                Pendidikan lingkungan yang kurang atau tidak
                                memadai dapat mengakibatkan kesadaran yang
                                rendah tentang pentingnya menjaga lingkungan dan
                                praktik pengelolaan sampah yang berkelanjutan
                            </small>
                        </div>
                    </div>
                </div>
                <div class="bot-causes">
                    <div class="card-causes causes-3">
                        <div class="content-causes">
                            <h1 class="no-causes">03</h1>
                            <h3 class="poppins-medium font-subtitle">
                                Kurangnya <br />Tempat Pembuangan Akhir
                            </h3>
                            <small class="poppins-regular lh-base"
                                >kurangnya tempat pembuangan akhir (TPA) atau
                                fasilitas pengelolaan sampah yang memadai
                                merupakan salah satu penyebab utama penumpukan
                                sampah. Ketika tidak ada infrastruktur yang
                                cukup untuk menangani sampah yang dihasilkan
                                oleh masyarakat, maka sampah dapat menumpuk di
                                berbagai tempat yang tidak sesuai, seperti di
                                pinggir jalan, lahan kosong, sungai, atau bahkan
                                di lingkungan alam.</small
                            >
                        </div>
                    </div>
                    <div class="card-causes causes-4">
                        <div class="content-causes">
                            <h1 class="no-causes">04</h1>
                            <h3 class="poppins-medium font-subtitle">
                                Pertumbuhan Penduduk
                            </h3>
                            <small class="poppins-regular lh-base"
                                >pertumbuhan penduduk merupakan salah satu
                                faktor utama penyebab penumpukan sampah.
                                Pertumbuhan penduduk yang cepat dalam suatu
                                daerah dapat menghasilkan peningkatan jumlah
                                sampah yang dihasilkan oleh masyarakat.</small
                            >
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
                        <div class="col-sm-12 col-md-12 col-lg-12">
                            <div class="slider-container">
                                <div class="swiper-wrapper d-flex">
                                    <div class="swiper-slide slider-item">
                                        <div
                                            class="card-container d-flex flex-column"
                                        >
                                            <div class="card-head">
                                                <img
                                                    src="https://cdn.discordapp.com/attachments/1164510335114428526/1164510421210890310/image.png?ex=654379d7&is=653104d7&hm=c9be6202856e2d016f844865e81c9fd59d921aa0525b482979c91a1b06f79eda&"
                                                />
                                            </div>
                                            <div class="card-body">
                                                <p
                                                    class="font-paragraph lh-base mt-3 poppins-regular color-light"
                                                >
                                                    Sampah yang tidak dikelola
                                                    dengan baik dapat memiliki
                                                    dampak negatif yang serius
                                                    terhadap lingkungan,
                                                    kesehatan manusia, dan
                                                    masyarakat secara umum,
                                                    Sampah yang dibiarkan
                                                    berserakan atau dibuang
                                                    sembarangan dapat mencemari
                                                    tanah, air, dan udara.
                                                    Produk-produk kimia
                                                    berbahaya dalam sampah dapat
                                                    merembes ke dalam tanah dan
                                                    air, mengkontaminasi sumber
                                                    daya alam dan memengaruhi
                                                    kehidupan hewan serta
                                                    tumbuhan.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="swiper-slide slider-item">
                                        <div
                                            class="card-container d-flex flex-column"
                                        >
                                            <div class="card-head">
                                                <img
                                                    src="https://cdn.discordapp.com/attachments/1164510335114428526/1164513037626122280/image.png?ex=65437c47&is=65310747&hm=1ffe8a3c8b7000bbf0611529d282a48add9d7b36c4c83fcccccde27c8c5d048c&"
                                                />
                                            </div>
                                            <div class="card-body">
                                                <p
                                                    class="font-paragraph lh-base mt-3 poppins-regular color-light"
                                                >
                                                    Sampah yang berserakan
                                                    menciptakan pemandangan yang
                                                    tidak menarik dan kotor. Ini
                                                    bisa mencakup tumpukan
                                                    sampah di tepi jalan,
                                                    pantai, taman, atau daerah
                                                    wisata lainnya. Kehadiran
                                                    sampah yang mencolok dapat
                                                    mengganggu pengalaman
                                                    wisatawan yang mencari
                                                    lingkungan yang bersih,
                                                    indah, dan rapi, jika berupa
                                                    sampah tajam atau bahan
                                                    berbahaya, dapat menjadi
                                                    bahaya bagi orang-orang yang
                                                    mengunjungi tempat tersebut.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="swiper-slide slider-item">
                                        <div
                                            class="card-container d-flex flex-column"
                                        >
                                            <div class="card-head">
                                                <img
                                                    src="https://cdn.discordapp.com/attachments/1164510335114428526/1164513456725164053/image.png?ex=65437cab&is=653107ab&hm=ae5a67bf5607562cc1378862d604009b1254be540459dd7578c160af4c8f7257&"
                                                />
                                            </div>
                                            <div class="card-body">
                                                <p
                                                    class="font-paragraph lh-base mt-3 poppins-regular color-light"
                                                >
                                                    CO2 adalah gas rumah kaca
                                                    utama yang dihasilkan dari
                                                    pembakaran sampah. Ketika
                                                    bahan organik seperti
                                                    plastik, kertas, dan limbah
                                                    makanan terbakar, mereka
                                                    melepaskan karbon dioksida
                                                    ke atmosfer. Karbon dioksida
                                                    adalah penyebab utama
                                                    perubahan iklim dan
                                                    pemanasan gl.obal., yang
                                                    kedua adalah Metana yang
                                                    merupakan gas rumah kaca
                                                    yang lebih kuat daripada
                                                    karbon dioksida dalam
                                                    menangkap panas dari
                                                    matahari.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="swiper-slide slider-item">
                                        <div
                                            class="card-container d-flex flex-column"
                                        >
                                            <div class="card-head">
                                                <img
                                                    src="https://cdn.discordapp.com/attachments/1164510335114428526/1164516415282348052/image.png?ex=65437f6d&is=65310a6d&hm=1a8a98cff4c323efd39c4ae4a841a989abc11778b89c11b014503f49d5e487a3&"
                                                />
                                            </div>
                                            <div class="card-body">
                                                <p
                                                    class="font-paragraph lh-base mt-3 poppins-regular color-light"
                                                >
                                                    Selanjutnya hasil uang yang
                                                    diperoleh dari penjualan
                                                    barang daur ulang akan kami
                                                    sumbangkan pada Panti Asuhan
                                                    & Orang yang membutuhkan,
                                                    proses pemberian hasil ini
                                                    juga bisa anda lihat lebih
                                                    lengkap di menu "informasi".
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                    <h3>
                                        Penggunaan Barang Yang dapat di Daur
                                        Ulang
                                    </h3>
                                </div>
                                <div>
                                    <img
                                        src="https://cdn.discordapp.com/attachments/1153638653332029440/1162290517699219467/icon2.png?ex=653b6665&is=6528f165&hm=2f2f4835bfc339157e6725d3a8e707db51d755d3351a3a91416d01d58982d434&"
                                        alt="icon2"
                                    />
                                    <h3>
                                        Pemberian Edukasi Pendidikan lingkungan
                                    </h3>
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
                                    <h3>
                                        Menggunakan produk produk yang ramah
                                        lingkungan
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="sectionakhir">
                <p class="ajakan">
                    <strong
                        >MARI BERSAMA KITA BANGGA<br />
                        MENGGUNAKAN PRODUK DAUR ULANG
                    </strong>
                </p>
                <a href="produk.html" class="tombol">Produk daur ulang</a>
            </section>
        </div>
        <footer class="mt-5">
            <div class="container">
                <div class="footer-container">
                    <div class="footer-left col-sm-7 col-md-10 col-lg-10">
                        <h3 class="footer-header poppins-medium">
                            Tentang RecycleHub
                        </h3>
                        <p class="footer-desc" id="description">
                            RecycleHub bertujuan untuk mengurangi sampah dengan
                            menyajikan konten edukasi dan daur ulang untuk masa
                            depan yang lebih baik di generasi selanjutnya.
                        </p>
                        <div class="input-container">
                            <input
                                type="text"
                                placeholder="Masukkan Email..."
                                class="font-paragraph poppins-regular"
                            />
                            <button
                                type="submit"
                                class="poppins-bold font-paragraph"
                            >
                                Kirim
                            </button>
                        </div>
                        <div class="footer-row">
                            <ul class="no-indent">
                                <li>
                                    <a
                                        href="gallery.html"
                                        class="color-light font-paragraph"
                                        >Galeri</a
                                    >
                                </li>
                                <li>Informasi</li>
                                <li>Produk</li>
                                <li>Bantuan</li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-right col-sm-5 col-md-2 col-lg-2 my-">
                        <p class="footer-credit poppins-regular">
                            Copyright ©2023, RecycleHub.
                        </p>
                    </div>
                </div>
            </div>
        </footer>

        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
            crossorigin="anonymous"
        ></script>
        <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
        <script src="../assets/js/script-global.js"></script>
        <script src="../assets/js/script-navbar.js"></script>
        <script>
            var swiper = new Swiper(".slider-container", {
                slidesPerView: "auto",
                spaceBetween: 30,
            });
        </script>
    </body>
</html>

            </div>
        </MainLayout>
    );
};

export default Information;
