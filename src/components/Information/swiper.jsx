import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const InformationSwiper = () => {
  return (
    <div className="col-12">
      <Swiper className="mySwiper" slidesPerView={3} spaceBetween={30}>
        <SwiperSlide>
          <div class="card-container d-flex flex-column">
            <div class="card-head">
              <img src="https://cdn.discordapp.com/attachments/1164510335114428526/1164510421210890310/image.png?ex=654379d7&is=653104d7&hm=c9be6202856e2d016f844865e81c9fd59d921aa0525b482979c91a1b06f79eda&" />
            </div>
            <div class="card-body">
              <p class="font-paragraph lh-base mt-3 poppins-regular color-light">
                Sampah yang tidak dikelola dengan baik dapat memiliki dampak
                negatif yang serius terhadap lingkungan, kesehatan manusia, dan
                masyarakat secara umum, Sampah yang dibiarkan berserakan atau
                dibuang sembarangan dapat mencemari tanah, air, dan udara.
                Produk-produk kimia berbahaya dalam sampah dapat merembes ke
                dalam tanah dan air, mengkontaminasi sumber daya alam dan
                memengaruhi kehidupan hewan serta tumbuhan.
              </p>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div class="card-container d-flex flex-column">
            <div class="card-head">
              <img src="https://cdn.discordapp.com/attachments/1164510335114428526/1164513037626122280/image.png?ex=65437c47&is=65310747&hm=1ffe8a3c8b7000bbf0611529d282a48add9d7b36c4c83fcccccde27c8c5d048c&" />
            </div>
            <div class="card-body">
              <p class="font-paragraph lh-base mt-3 poppins-regular color-light">
                Sampah yang berserakan menciptakan pemandangan yang tidak
                menarik dan kotor. Ini bisa mencakup tumpukan sampah di tepi
                jalan, pantai, taman, atau daerah wisata lainnya. Kehadiran
                sampah yang mencolok dapat mengganggu pengalaman wisatawan yang
                mencari lingkungan yang bersih, indah, dan rapi, jika berupa
                sampah tajam atau bahan berbahaya, dapat menjadi bahaya bagi
                orang-orang yang mengunjungi tempat tersebut.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card-container d-flex flex-column">
            <div class="card-head">
              <img src="https://cdn.discordapp.com/attachments/1164510335114428526/1164513456725164053/image.png?ex=65437cab&is=653107ab&hm=ae5a67bf5607562cc1378862d604009b1254be540459dd7578c160af4c8f7257&" />
            </div>
            <div class="card-body">
              <p class="font-paragraph lh-base mt-3 poppins-regular color-light">
                CO2 adalah gas rumah kaca utama yang dihasilkan dari pembakaran
                sampah. Ketika bahan organik seperti plastik, kertas, dan limbah
                makanan terbakar, mereka melepaskan karbon dioksida ke atmosfer.
                Karbon dioksida adalah penyebab utama perubahan iklim dan
                pemanasan gl.obal., yang kedua adalah Metana yang merupakan gas
                rumah kaca yang lebih kuat daripada karbon dioksida dalam
                menangkap panas dari matahari.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card-container d-flex flex-column">
            <div class="card-head">
              <img src="https://cdn.discordapp.com/attachments/1164510335114428526/1164516415282348052/image.png?ex=65437f6d&is=65310a6d&hm=1a8a98cff4c323efd39c4ae4a841a989abc11778b89c11b014503f49d5e487a3&" />
            </div>
            <div class="card-body">
              <p class="font-paragraph lh-base mt-3 poppins-regular color-light">
                Selanjutnya hasil uang yang diperoleh dari penjualan barang daur
                ulang akan kami sumbangkan pada Panti Asuhan & Orang yang
                membutuhkan, proses pemberian hasil ini juga bisa anda lihat
                lebih lengkap di menu "informasi".
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default InformationSwiper;
