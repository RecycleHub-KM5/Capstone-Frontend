import React from "react";
import MainLayout from "../../layout/MainLayout";
import Navbar from "../../components/GlobalComponent/Navbar";
import Footer from "../../components/GlobalComponent/Footer";
import DetailProductContent from "../../components/DetailProduct/DetailProductContent";
import SuggestProduct from "../../components/DetailProduct/SuggestProduct";

const DetailProduct = () => {
    return (
        <MainLayout>
            <div className="container">
                <Navbar />
                <DetailProductContent />
                <SuggestProduct />
                <Footer />
            </div>
        </MainLayout>
    );
};

export default DetailProduct;
