import React, { Component } from 'react';
import BookItem from './BookItem.js';
import { Pagination } from 'antd';

class BookList extends Component {
  render() {
    let booksData = this.props.books
    let bookItems = booksData.map((item) => {
      return (<BookItem key={item.id} {...item}></BookItem>)
    });
    return (
      <div>
        <ul className="list-group">
          {bookItems}
        </ul>
        {
          booksData.length ? 
          <Pagination
            showQuickJumper 
            size="small"
            pageSize={this.props.pageSize}
            current={this.props.currentPage}
            total={this.props.total}
            onChange={this.props.changePage}
          /> : null
        }
      </div>
    );
  }

}

export default BookList;