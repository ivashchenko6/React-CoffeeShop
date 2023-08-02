import { Component } from "react";


import './filter.scss';


export default class Filter extends Component {
    state = {
        term: ''
    }


    onInputTerm = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.updateSearch(term);
    }


    render() {
        
        return (
            
            <section className="filter">
                <div className="search-wrapper">
                    <p className="filter-text">Looking for</p>
                    <input type="text" value={this.state.term} onChange={this.onInputTerm} className="search-input" placeholder="start typing here..."/>
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