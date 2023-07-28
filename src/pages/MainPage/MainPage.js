import { Component } from "react";



import Divider from "../../components/Divider/Divider";
import GoodItem from "../../components/GoodItem/GoodItem";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";


import './mainPage.scss';


export default class MainPage extends Component {

    
    render() {
        
        
        const items = this.props.bestGoods.map((item, i) => {
            return <GoodItem key={i} type='best' {...item} />
        })
        return (
            
            <>
                <section className="promo__main">
                    <header className="promo__main-header">
                        <NavigationMenu type="header" color="white"/>
                    </header>

                    <h1 className="promo__main-title">Everything You Love About Coffee</h1>
                    <Divider color="white" marginBottom={35}/>
                    

                    <h2 className="promo__main-subtitle">We makes every day full of energy and taste</h2>

                    <h2 className="promo__main-subtitle">Want to try our beans?</h2>
                
                    <a href="#" className="promo__main-btn">More</a>                
                </section>


                <section className="about">
                    <h3 className="about__title">About Us</h3>

                    <Divider color="black" marginBottom={41}/>

                    <p className="about__paragraph">
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.
                    </p>

                    <p className="about__paragraph">
                        Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies now.
                    </p>
                </section>


                <section className="best">
                    <h3 className="best__title">Our best</h3>

                    <ul className="best__goods-list">
                        {items}
                    </ul>
                </section>

                <footer className="main-footer">
                    <NavigationMenu type='footer' color="black"/>

                    <Divider color="black"/>
                </footer>


            </>
        )
    }
}   