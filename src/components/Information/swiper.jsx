import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const InformationSwiper = () => {
    return (
        <div className="col-12">
            <Swiper className="mySwiper" slidesPerView={3} spaceBetween={30}>
                <SwiperSlide>
                    <div class="card-container d-flex flex-column">
                        <div class="card-head">
                            <img src="https://cdn.discordapp.com/attachments/1164510335114428526/1164510421210890310/image.png?ex=66054657&is=65f2d157&hm=4449fd1515e93a8bfed2f442624be3bbc194ab735e7d762546d74c3f53eb9b9d&" />
                        </div>
                        <div class="card-body">
                            <p class="font-paragraph lh-base mt-3 poppins-regular color-light">Sampah yang tidak dikelola dengan baik dapat memiliki dampak negatif yang serius terhadap lingkungan, kesehatan manusia, dan masyarakat secara umum, Sampah yang dibiarkan berserakan atau dibuang sembarangan dapat mencemari tanah, air, dan udara. Produk-produk kimia berbahaya dalam sampah dapat merembes ke dalam tanah dan air, mengkontaminasi sumber daya alam dan memengaruhi kehidupan hewan serta tumbuhan.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card-container d-flex flex-column">
                        <div class="card-head">
                            <img src="https://cdn.discordapp.com/attachments/1164510335114428526/1164513037626122280/image.png?ex=660548c7&is=65f2d3c7&hm=141742fc4da4ccc67ee6d73e5944d13bcd5f4a3042ebecd301486133e30d23b8&" />
                        </div>
                        <div class="card-body">
                            <p class="font-paragraph lh-base mt-3 poppins-regular color-light">Sampah yang berserakan menciptakan pemandangan yang tidak menarik dan kotor. Ini bisa mencakup tumpukan sampah di tepi jalan, pantai, taman, atau daerah wisata lainnya. Kehadiran sampah yang mencolok dapat mengganggu pengalaman wisatawan yang mencari lingkungan yang bersih, indah, dan rapi, jika berupa sampah tajam atau bahan berbahaya, dapat menjadi bahaya bagi orang-orang yang mengunjungi tempat tersebut.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card-container d-flex flex-column">
                        <div class="card-head">
                            <img src="https://cdn.discordapp.com/attachments/1164510335114428526/1164513456725164053/image.png?ex=6605492b&is=65f2d42b&hm=4c2d3f4960abb475b86262b73fb9cfe6b94c35e5540c9f733cb3c07ab2d34e25&" />
                        </div>
                        <div class="card-body">
                            <p class="font-paragraph lh-base mt-3 poppins-regular color-light">CO2 adalah gas rumah kaca utama yang dihasilkan dari pembakaran sampah. Ketika bahan organik seperti plastik, kertas, dan limbah makanan terbakar, mereka melepaskan karbon dioksida ke atmosfer. Karbon dioksida adalah penyebab utama perubahan iklim dan pemanasan gl.obal., yang kedua adalah Metana yang merupakan gas rumah kaca yang lebih kuat daripada karbon dioksida dalam menangkap panas dari matahari.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card-container d-flex flex-column">
                        <div class="card-head">
                            <img src="https://cdn.discordapp.com/attachments/1164510335114428526/1164516415282348052/image.png?ex=66054bed&is=65f2d6ed&hm=0487c84844609d9bf4f1f6d5ae5289eacdcfb54c86bee51870611028624ab522&" />
                        </div>
                        <div class="card-body">
                            <p class="font-paragraph lh-base mt-3 poppins-regular color-light">Selanjutnya hasil uang yang diperoleh dari penjualan barang daur ulang akan kami sumbangkan pada Panti Asuhan & Orang yang membutuhkan, proses pemberian hasil ini juga bisa anda lihat lebih lengkap di menu "informasi".</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default InformationSwiper;
