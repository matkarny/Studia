import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Menu from './components/Menu/Menu'
import HomePage from './components/Home/HomePage'
import Catalog from "./components/Catalog/CatalogPage";
import AboutPage from "./components/About/AboutPage";
import Footer from "./components/Footer/Footer"


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Menu />
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/catalog" component={Catalog}/>
                        <Route path="/about" component={AboutPage}/>
                    </Switch>
                    <Footer />
                </div>
            </Router>
                   );
  }
}

export default App;
