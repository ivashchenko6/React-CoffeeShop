import { Component } from "react";


import './goodItem.scss';
export default class GoodItem extends Component {


    render() {

        const {type, price, name, src, country} = this.props;
        let itemClasses = "good-item"
        if(type === 'product') {
            itemClasses+= ' good-item__product';
        }
        

        //Todo: Разобраться с карточкой и переверстать её немного
        //Todo: проблема с паддингом у карточки
        //Todo: Сделать фильтрацию и поиск по слову 
        return (

            <li className={itemClasses}>
                <img src={src} alt="good" className="good-item__img"/>

                <div className="good-item__text">
                    <div className="good-item__name">{name}</div>
                    <div className="good-item__country">{country}</div>
                    <div className="good-item__price">{price}$</div>
                </div>
            </li>
        )
    }
}