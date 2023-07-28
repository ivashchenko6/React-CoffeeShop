import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import MainPage from "../../pages/MainPage/MainPage";
import CoffeePage from "../../pages/CoffeePage/CoffeePage";

import solimo from '../../img/main-page/best-goods/solimo-good.png';
import presto from '../../img/main-page/best-goods/presto-good.png';
import aromistico from '../../img/main-page/best-goods/aromistico-good.png';


import './app.scss';



export default class App extends Component {

    state = {
        coffeeList: [
            {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, src: aromistico},
            {name: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: 6.99, src: aromistico},
            {name: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: 6.99, src: aromistico},
            {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, src: aromistico},
            {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, src: aromistico},
            {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, src: aromistico},
            
        ],
        bestGoods: [
            {src: solimo, name: 'Solimo Coffee Beans 2 kg',  price: 10.73},
            {src: presto, name: 'Presto Coffee Beans 1 kg',  price: 15.99},
            {src: aromistico, name: 'AROMISTICO Coffee 1 kg',  price: 6.99}
        ],
        filter: 'all'
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


    searchByTerm = (term) => {

    }

    changeFilter = (filter) => {
        this.setState({filter});
    }

    render() {
        const {coffeeList, bestGoods, filter} = this.state;

        const items = this.filterByCountry(coffeeList, filter);

        return (

            <BrowserRouter>
            
                <Routes>
                    <Route path="/" element={<MainPage bestGoods={bestGoods} />}/>
                    <Route path="list" element={<CoffeePage coffeeList={items} changeFilter={this.changeFilter}/>}/>


                </Routes>
            </BrowserRouter>

            
        )
    }



}