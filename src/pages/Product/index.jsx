import React, { useEffect, useState } from "react";
import MainLayout from "../../layout/MainLayout";
import Navbar from "../../components/GlobalComponent/Navbar";
import SearchBar from "../../molecules/SearchBar";
import FilterCategoryBox from "../../molecules/FilterCategoryBox";
import ProductContent from "../../components/Product";
import Footer from "../../components/GlobalComponent/Footer";
import { useDispatch, useSelector } from "react-redux";
import { GetProduct } from "../../redux/actions/ProductAction";
import "./style.css";

const Product = () => {
    const { dataProduct } = useSelector((state) => state.productReducer);
    const [filteredProduct, setFilteredProduct] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        if (dataProduct === null) {
            dispatch(GetProduct());
        } else {
            setFilteredProduct(dataProduct);
        }
    }, [dispatch, dataProduct]);

    const searchProduct = (searchTerm) => {
        const searchTermLowerCase = searchTerm.toLowerCase();
        setSearchInput(searchTermLowerCase);

        if (dataProduct) {
            const filteredData = dataProduct.filter(
                (product) =>
                    // product.name.toLowerCase().includes(searchTermLowerCase) ||
                    // product.description
                    //     .toLowerCase()
                    //     .includes(searchTermLowerCase)
                    (product.name &&
                        product.name
                            .toLowerCase()
                            .includes(searchTermLowerCase)) ||
                    (product.description &&
                        product.description
                            .toLowerCase()
                            .includes(searchTermLowerCase))
            );
            setFilteredProduct(filteredData);
        }
    };

    useEffect(() => {
        if (dataProduct) {
            searchProduct(searchInput);
        }
    }, [searchInput, dataProduct]);

    return (
        <MainLayout>
            <div className="container">
                <Navbar />
                <SearchBar onSearch={searchProduct} />
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
                        {filteredProduct.length > 0 ? (
                            <ProductContent dataProduct={filteredProduct} />
                        ) : (
                            <img
                                src="https://cdn.discordapp.com/attachments/1164510335114428526/1180047261942689844/image.png?ex=657bffa7&is=65698aa7&hm=79285c8384cfbed4913736e6d7a9712d75618d3014f0d5cd904f8c7c99f24ce3&"
                                className="product-not-found m-5"
                            />
                        )}
                    </div>
                </div>
                <Footer />
            </div>
        </MainLayout>
    );
};

export default Product;
