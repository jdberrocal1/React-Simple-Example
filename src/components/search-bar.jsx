import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' }
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value = {this.state.term}
          onChange={this.onInputChange.bind(this)} />
      </div>
    );
  }

  onInputChange(e) {
    this.setState({ term: e.target.value });
    this.props.onSearch(this.state.term);
  }
}

export default SearchBar;