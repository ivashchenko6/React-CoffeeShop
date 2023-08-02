import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import MainPage from "../../pages/MainPage/MainPage";
import CoffeePage, { MainCoffeePage } from "../../pages/CoffeePage/CoffeePage";

import solimo from '../../img/main-page/best-goods/solimo-good.png';
import presto from '../../img/main-page/best-goods/presto-good.png';
import aromistico from '../../img/main-page/best-goods/aromistico-good.png';


import './app.scss';
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

import ProductPage from "../../pages/ProductPage/ProductPage";
import Pleasure, { MainPleasure } from "../../pages/Pleasure/Pleasure";


export default class App extends Component {

    state = {
        coffeeList: [
            {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, src: aromistico},
            {name: 'Presto Coffee 1 kg', country: 'Kenya', price: 6.99, src: presto},
            {name: 'Presto Coffee 1 kg', country: 'Columbia', price: 6.99, src: presto},
            {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, src: aromistico},
            {name: 'Solimo Coffee 1 kg', country: 'Brazil', price: 6.99, src: solimo},
            {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, src: aromistico},
            
        ],
        bestGoods: [
            {src: solimo, name: 'Solimo Coffee Beans 2 kg',  price: 10.73},
            {src: presto, name: 'Presto Coffee Beans 1 kg',  price: 15.99},
            {src: aromistico, name: 'AROMISTICO Coffee 1 kg',  price: 6.99}
        ],
        filter: 'all',
        term: '',
        openedGood: {},
        
    }

    filterByCountry = (items, filter) => {
        switch(filter) {

            case 'Brazil':
                return items.filter(item => item.country === 'Brazil');
            case 'Kenya':
                return items.filter(item => item.country === 'Kenya');
            case 'Columbia':
                return items.filter(item => item.country === 'Columbia');
            default:
                return items
        }
    }

    searchGood = (items, term) => {
        if(items.length === 0) {
            return items;
        }
        return items.filter(item => item.name.toLowerCase().includes(term.toLowerCase()));
    }

    updateSearch = (term) => {
        this.setState({term});
    }

    changeFilter = (filter) => {
        this.setState({filter});
    }

    onOpenProduct = (product) => {
        this.setState({
            openedGood: product
        })
    }
    

    render() {
        const {coffeeList, bestGoods, filter, term, openedGood} = this.state;

        const items = this.filterByCountry(this.searchGood(coffeeList, term), filter);
        //TODO: Пофиксить шапку и футер
        return (

            <BrowserRouter>
            
                <Routes>
                    <Route path="/" element={<MainPage bestGoods={bestGoods} />}/>
                    <Route path="list" element={<CoffeePage/>}>
                        <Route index element={<MainCoffeePage coffeeList={items} changeFilter={this.changeFilter} updateSearch={this.updateSearch} onOpenProduct={this.onOpenProduct}/>}/>
                        <Route path="product" element={<ProductPage openedGood={openedGood}/>}/>
                    </Route>
                    
                    <Route path="pleasure" element={<Pleasure/>}>
                        <Route index element={<MainPleasure coffeeList={items} onOpenProduct={this.onOpenProduct}/>}/>
                        <Route path="product" element={<ProductPage openedGood={openedGood}/>}/>
                    </Route>

                    
                    <Route path="*" element={<NotFoundPage />}/>

                </Routes>
            </BrowserRouter>

            
        )
    }



}