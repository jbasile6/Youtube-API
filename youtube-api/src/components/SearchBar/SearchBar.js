import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
    }

    componentDidUpdate() {
        // console.log(this.state.search)
    }



    render() {
        return(
            <div className='search-bar'>
                <input 
                value={this.state.search}
                onChange={e => this.setState({
                    search: e.target.value
                })}
                />
            </div>
        )
    }
}


export default SearchBar;