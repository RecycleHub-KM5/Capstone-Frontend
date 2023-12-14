import React, { useEffect, useState } from "react";
import MainLayout from "../../layout/MainLayout";
import Navbar from "../../components/GlobalComponent/Navbar";
import Footer from "../../components/GlobalComponent/Footer";
import DetailProductContent from "../../components/DetailProduct/DetailProductContent";
import SuggestProduct from "../../components/DetailProduct/SuggestProduct";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
    GetDetailProduct,
    GetProduct,
} from "../../redux/actions/ProductAction";

const DetailProduct = () => {
    const { dataDetailProduct, dataProduct } = useSelector(
        (state) => state.productReducer
    );
    const dispatch = useDispatch();
    const { param } = useParams();

    useEffect(() => {
        console.log(param);
        if (param) {
            dispatch(GetDetailProduct(param));
        }
    }, [dispatch, param]);

    useEffect(() => {
        if (dataProduct === null) {
            dispatch(GetProduct());
        }
    }, [dispatch, dataProduct]);

    return (
        <MainLayout>
            <div className="container">
                <Navbar />
                {dataDetailProduct && (
                    <DetailProductContent product={dataDetailProduct} />
                )}
                <SuggestProduct dataProduct={dataProduct} />
                <Footer />
            </div>
        </MainLayout>
    );
};

export default DetailProduct;
