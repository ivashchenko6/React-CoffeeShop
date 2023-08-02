import { Component } from "react";
import Divider from "../../components/Divider/Divider";


import product from '../../img/our-coffee-page/gooods/about-it.jpg'
import './productPage.scss';
export default class ProductPage extends Component {
    render() {
        const {openedGood: {country, price}} = this.props
        return (
            <section className="about__product">
                <div className="about__product-wrapper">
                    <img src={product} alt="product" />

                    <div className="about__product-text">
                        <h3 className="about__product-title">About It</h3>
                        <Divider color="black"/>

                        <div className="about__product-country"><span>Country</span>: {country}</div>
                        <div className="about__product-description">
                            <span>Description</span>: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                        <div className="about__product-price">
                            Price: <span>{price}$</span>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}