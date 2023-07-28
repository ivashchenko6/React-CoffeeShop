import { Component } from "react";
import { Link } from "react-router-dom";

import whiteLogo from '../../icons/white-logo.svg';
import blackLogo from '../../icons/black-brink-logo.svg';


import './navigationMenu.scss';


export default class NavigationMenu extends Component {


    render() {
        const {type} = this.props;

        let navClasses = 'navigation';

        let navItemClass = 'navigation-item'
        let logo;
        if(type === 'header') {
            navClasses += ' navigation-header';
            logo = whiteLogo;
        } else {
            navClasses += ' navigation-footer';
            navItemClass += ' navigation-item_black';
            logo = blackLogo;
        }

        return (
            <nav className={navClasses}>
                <ul className="navigation-list">
                    <li className={navItemClass}>
                        <Link to="/" className="logo-link">
                            <img src={logo} alt="logo" className="white-logo__img"/>
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