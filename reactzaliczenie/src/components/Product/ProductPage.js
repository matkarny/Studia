import React from "react"
import "../Product/ProductPage.css"

const ProductPage = ( {list} ) => {
    return (

        <div className="column-right">
            <div className="products">
                {list.map(product => (<div className="product">
                    <img src={product.image} alt={product.name} />
                    <p className="price">{product.amount}</p>
                    <h3>{product.name}</h3>

                </div>))
                }
            </div>
        </div>
    )
};

export default ProductPage
