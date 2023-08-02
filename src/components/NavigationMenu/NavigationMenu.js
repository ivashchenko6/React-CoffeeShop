import { Component } from "react";
import { Link } from "react-router-dom";

import whiteBeans from '../../icons/logoBeans.png';
import blackBeans from '../../icons/logoBlackBeans.png';


import './navigationMenu.scss';


export default class NavigationMenu extends Component {


    render() {
        const {type} = this.props;

        let navClasses = 'navigation';

        let navItemClass = 'navigation-item'
        let logo;
        if(type === 'header') {
            navClasses += ' navigation-header';
            logo = whiteBeans;
        } else {
            navClasses += ' navigation-footer';
            navItemClass += ' navigation-item_black';
            logo = blackBeans;
        }

        return (
            <nav className={navClasses}>
                <ul className="navigation-list">
                    <li className={navItemClass}>
                        <Link to="/" className="logo-link">
                            <div className="logo-wrapper">
                                <img src={logo} alt="logo" className="logo__img"/>
                                <div className="logo-text">Coffee house</div>
                            </div>
                        </Link>
                    </li>
                    <li className={navItemClass}>
                        <Link to="/list">Our coffee</Link>
                    </li>
                    <li className={navItemClass}>
                        <Link to="/pleasure">For your pleasure</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}