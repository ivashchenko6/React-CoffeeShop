import { Component } from "react";







import './filter.scss';


export default class Filter extends Component {


    render() {

        return (

            <section className="filter">
                <div className="search-wrapper">
                    <p className="filter-text">Looking for</p>
                    <input type="text" className="search-input" placeholder="start typing here..."/>
                </div>

                <div className="countries-wrapper">
                    <p className="filter-text">Or Filter</p>
                    <div className="btns-wrapper">
                        <button className="btn-country" onClick={() => this.props.changeFilter('Brazil')}>Brazil</button>
                        <button className="btn-country" onClick={() => this.props.changeFilter('Kenya')}>Kenya</button>
                        <button className="btn-country" onClick={() => this.props.changeFilter('Columbia')}>Columbia</button>
                    </div>
                </div>
            </section>
        )
    }
}