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
                    (product.name && product.name.toLowerCase().includes(searchTermLowerCase)) || (product.description && product.description.toLowerCase().includes(searchTermLowerCase))
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
                <img src="https://cdn.discordapp.com/attachments/1164510335114428526/1178009225717354636/image.png?ex=66083d95&is=65f5c895&hm=d9fa7e8c4c1239a3de17175f4b3cc9ba3558f595ed5aad650ed21c6d8e9ef2c1&" className="w-100 mb-5" />
                <div className="row">
                    <div className="col-sm-3 col-md-3 col-lg-3">
                        <FilterCategoryBox />
                    </div>
                    <div className="col-sm-9 col-md-9 col-lg-9">
                        <h3 className="poppins-bold font-paragraph color-light">Untuk Kamu</h3>
                        {filteredProduct.length > 0 ? <ProductContent dataProduct={filteredProduct} /> : <img src="https://cdn.discordapp.com/attachments/1164510335114428526/1180047261942689844/image.png?ex=66066d27&is=65f3f827&hm=6c9ca31c820f406dcd9831c5a3e9d2201e6450fe6a8a1b6d03547273b9160337&" className="product-not-found m-5" />}
                    </div>
                </div>
                <Footer />
            </div>
        </MainLayout>
    );
};

export default Product;
