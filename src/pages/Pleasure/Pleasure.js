import { Component } from 'react';


import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';
import Divider from '../../components/Divider/Divider';

import cup from '../../img/pleasure/cup.png';

import './pleasure.scss';
import { GoodItem } from '../../components/GoodItem/GoodItem';
import { Outlet } from 'react-router-dom';


export default class Pleasure extends Component {

    render() {
        
        return (
            <>
                <section className="pleasure__main">
                    <header className="pleasure__main-header">
                        <NavigationMenu type="header"/>

                        <h1 className="pleasure__main-title">For your pleasure</h1>
                    </header>


                </section>


                <Outlet />


                <footer className="pleasure__footer">
                    <NavigationMenu type='footer'/>

                    <Divider color="black"/>
                </footer>
            </> 
        )
    }

}


export class MainPleasure extends Component {


    render() {
        const {coffeeList, onOpenProduct} = this.props;
        const items = coffeeList.map((item, i) => {
            return <GoodItem key={i} {...item} onOpenProduct={() => onOpenProduct(item)} />
        });
        
        return (
            <>
            
            <section className="pleasure__about">
                    <div className="pleasure__about-wrapper">
                        <img src={cup} alt="cup" className="pleasure__about-img" />
                        <div className="pleasure__about-text">
                            <h3 className="pleasure__about-title">
                                About our goods
                            </h3>

                            <Divider color="black" marginBottom={25}/>
                            <p className="pleasure__about-paragraph">
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br></br><br></br>Afraid at highly months do things on at. Situation recommend objection do intention so questions.<br></br>As greatly removed calling pleased improve an. Last ask him cold feel<br></br>met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.
                            </p>

                        </div>

                        
                    </div>
                    <div className="line"></div>
                </section>


                <section className="pleasure__goods">
                    <ul className="goods-list">
                        {items}
                    </ul>
                </section>
            </>
        )
    }
}