import React, { Component } from 'react';

class BookItem extends Component {

  render() {
    return (
      <li className="list-group-item">
         <div className="media">
            <div className="media-left">
              <img className="media-object" src={this.props.image} alt="..."/>
            </div>
            <div className="media-body">
              <h4 className="media-heading">{this.props.title}</h4>
              <p>{this.props.summary}</p>
            </div>
          </div>
      </li>
    );
  }

}

export default BookItem;