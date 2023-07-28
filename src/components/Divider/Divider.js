import { Component } from "react";

import whiteBeans from '../../icons/white-beans.png' 
import blackBeans from '../../icons/black-beans.png' 
import './divider.scss';


export default class Divider extends Component {


    render() {
        const {color, marginBottom} = this.props;

        let beansImg;
        let dividerClass = 'divider__item';
        

        if(color === 'white') {
            beansImg = whiteBeans;
            dividerClass += ' divider__item-white';
        } else {
            beansImg = blackBeans;
            dividerClass += ' divider__item-black';
        }

        return (
            <div className="divider-wrapper" style={{marginBottom}}>
                <div className={dividerClass}></div>
                <img src={beansImg} alt="beans" className="divider-beans" />
                <div className={dividerClass}></div>
            </div>
        )
    }
}