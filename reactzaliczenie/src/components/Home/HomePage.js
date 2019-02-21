import React from "react";
import ProductService from "../../services/product.service"
import ProductPage from "../Product/ProductPage"
import './HomePage.css'

const HomePage = () => {
    const product = ProductService.getProducts();
    const featuredLaptops = product.filter(product => product.category==="desktop"&&product.featured);
    const featuredTablets = product.filter(product => product.category==="tablet"&&product.featured);
    return (

        <div>
            <div className="container">
                <h1 className="header-big">Welcome to our store</h1>

                <h2 className="header-small">Desktops</h2>
                <ProductPage list={featuredLaptops} />

                <h2 className="header-small">Tablets</h2>
                <ProductPage list={featuredTablets} />
            </div>
        </div>
    );
};

export default HomePage;



