import { Component } from "react";

import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";



import errorGif from '../../img/error.gif'


import './notFoundPage.scss';




export default class NotFoundPage extends Component {


    render() {
        return (
            <div className="wrong-wrapper">
                <header className="wrong-header">
                    <NavigationMenu type='header'/>
                </header>
                <h1>This page doesn`t exist</h1>
                <img src={errorGif} alt="errorImg" className="err-img"/>
            </div>
        )
    }
}