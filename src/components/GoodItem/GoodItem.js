import { Component } from "react";


import './goodItem.scss';
import { Link } from "react-router-dom";
export default class BestItem extends Component {


    render() {

        const {price, name, src} = this.props;

        return (

            <li className="good-item">
                <img src={src} alt="good" className="good-item__img"/>

                <div className="good-item__text">
                    <div className="good-item__name">{name}</div>
                    
                    <div className="good-item__price">{price}$</div>
                </div>
            </li>
        )
    }
}
//TODO: Переделать карточки товар и организовать переход на страницу о подробно о товаре, передавать туда данные нажатой карточки
//TODO: Пофиксить header and footer, чтобы текст был в один ряд

export class GoodItem extends Component {


    render() {

        const {price, name, src, country, onOpenProduct} = this.props;
        

        
        return (

            <li className='good-item__product' onClick={onOpenProduct}>
                <Link to={'product'} >
                    <img src={src} alt="good" className="good-item__img"/>

                    <div className="good-item__text">
                        <div className="good-item__name">{name}</div>
                        <div className="good-item__country">{country}</div>
                        <div className="good-item__price">{price}$</div>
                    </div>
                
                </Link>
            </li>
        )
    }
}