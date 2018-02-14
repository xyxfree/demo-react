import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }
  handleChange(e){
    let {value} = e.target;
    this.setState({
      val: value
    })
  }
  handleSearch(){
    this.props.searchBooks(this.state.val);
  }
  handleKeyUp(e){
    if(e.keyCode === 13) this.handleSearch()
  }
  render() {
    return (
      <div className="input-group input-group-lg">
        <span className="input-group-addon">搜索图书信息:</span>
        <input
          type="text"
          className="form-control"
          placeholder="Search book name"
          value={this.state.val}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
        />
        <span className="input-group-btn">
          <button
            className="btn btn-default"
            type="button"
            onClick={this.handleSearch}
          >
            <span className="glyphicon glyphicon-search"></span>
          </button>
        </span>
      </div>
    );
  }

}

export default SearchBar;