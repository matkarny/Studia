import React from "react";
import ProductService from "../../services/product.service"
import "../Catalog/CatalogPage.css"
import ProductPage from "../Product/ProductPage"

class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "",
            searchText: ""
        };


        this.brandChange = (brand) => {
            this.setState({brand: brand});
        };

        this.handleSearch = (event) =>{
            this.setState({
                searchText: event.target.value
            })
        };
        this.cleaningHandler = () =>{
            this.setState({
                brand: "",
                searchText: ""
            });
            this.refs.search.value = ""
        }
    }
        render() {
const { searchText } = this.state;
   const product = ProductService.getProducts();

            const searchTextLower = searchText.toLowerCase();

   let filteredProduct = product.filter(product => product.manufacture === this.state.brand);
            if(this.state.brand === "") {
                filteredProduct = product
            }
            let searchedProduct = filteredProduct.filter(product =>product.name.toLowerCase().includes(searchTextLower) || product.manufacture.toLowerCase().includes(searchTextLower));



        return (
            <div className="container">
                <h1 className="header-big">Catalog</h1>

                <div className="catalog">

                    <div className="column-left">
                        <div className="filter">
                            <div className="filter-header">
                                <h4>Search</h4>
                                <a href ="#" ref="search" className="clear" onClick={this.cleaningHandler}>Clear</a>
                            </div>
                            <div>
                                <input type="text" placeholder="search..." onChange={this.handleSearch}/>
                            </div>
                            <h4>Manufacturer</h4>
                            <div>
                                <div>
                                    <input type="radio" name="manufacturere" id="all" value="all" onClick={() => this.brandChange("")} defaultChecked={this.state.brand===""}/>
                                    <label htmlFor="all">All</label>
                                </div>
                                <div>
                                    <input type="radio"  name="manufacturere" id="apple" value="apple" onClick={() => this.brandChange("Apple") } checked={this.state.brand==="Apple"} />
                                    <label htmlFor="apple">Apple</label>
                                </div>
                                <div>
                                    <input type="radio" name="manufacturere" id="dell" value="dell" onClick={() => this.brandChange("Dell")} checked={this.state.brand==="Dell"}/>
                                    <label htmlFor="dell">Dell</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="column-right">
                        <ProductPage list={searchedProduct}/>
                    </div>
                </div>

            </div>
        )
    }
}

export default Catalog
