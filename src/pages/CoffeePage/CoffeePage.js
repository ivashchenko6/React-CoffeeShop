import { Component } from "react";

import './coffeePage.scss'
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";
import Divider from "../../components/Divider/Divider";

import girl from '../../img/our-coffee-page/girl.png'
import Filter from "../../components/filter/Filter";
import GoodItem from "../../components/GoodItem/GoodItem";

export default class Coffee extends Component {


    render() {
        
        const items = this.props.coffeeList.map((item, i) => {
            return <GoodItem key={i} type='product' {...item}/>
        })
        return (
            <>
                <section className="promo__coffee">
                    <header className="promo__coffee-header">
                        <NavigationMenu type='header'/>
                    </header>


                    <h1 className="promo__coffee-title">Our Coffee</h1>
                </section>
            
                <section className="about__coffee">
                    <div className="about__coffee-wrapper">
                        <img src={girl} alt="about-img" className="about__coffee-img" />
                    
                        <div className="about__coffee-text">
                            <h3 className="about__coffee-title">
                                About our beans
                            </h3>

                            <Divider />

                            <p className="about__coffee-paragraph">
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br></br><br></br>Afraid at highly months do things on at. Situation recommend objection do intention so questions.<br></br>As greatly removed calling pleased improve an. Last ask him cold feel<br></br>met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.
                            </p>
                        </div>
                    </div>


                    <div className="line"></div>

                </section>

                <Filter changeFilter={this.props.changeFilter}/>
                

                <section className="goods">
                    <div className="goods-wrapper">
                        <ul className="goods-list">
                            {items}
                        </ul>
                    </div>
                </section>


                <footer className="coffee-footer">
                    <NavigationMenu type='footer' color="black"/>
                    <Divider color="black"/>

                </footer>
            </>
        )
    }
}