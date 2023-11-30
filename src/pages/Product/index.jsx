import React, { useEffect } from "react";
import MainLayout from "../../layout/MainLayout";
import Navbar from "../../components/GlobalComponent/Navbar";
import SearchBar from "../../molecules/SearchBar";
import FilterCategoryBox from "../../molecules/FilterCategoryBox";
import ProductContent from "../../components/Product";
import Footer from "../../components/GlobalComponent/Footer";
import { useDispatch, useSelector } from "react-redux";
import { GetProduct } from "../../redux/actions/ProductAction";

const Product = () => {
    const { dataProduct } = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        if (dataProduct === null) {
            dispatch(GetProduct());
        }
    }, [dispatch, dataProduct]);

    return (
        <MainLayout>
            <div className="container">
                <Navbar />
                <SearchBar />
                <img
                    src="https://media.discordapp.net/attachments/1164510335114428526/1178009225717354636/image.png?ex=65749595&is=65622095&hm=5791040347cd59b21483382fac926edab80b0f8491a69226f754a87ea02438fb&=&format=webp&width=1024&height=276"
                    className="w-100 mb-5"
                />

                <div className="row">
                    <div className="col-sm-3 col-md-3 col-lg-3">
                        <FilterCategoryBox />
                    </div>
                    <div className="col-sm-9 col-md-9 col-lg-9">
                        <h3 className="poppins-bold font-paragraph color-light">
                            Untuk Kamu
                        </h3>
                        <ProductContent dataProduct={dataProduct} />
                    </div>
                </div>

                <Footer />
            </div>
        </MainLayout>
    );
};

export default Product;
