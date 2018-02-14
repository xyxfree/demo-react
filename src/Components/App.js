import React, { Component } from 'react';
import SearchBar from './SearchBar.js';
import BookList from './BookList.js';
import axios from 'axios';
import '../common/css/bootstrap.min.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      currentPage: 1,
      pageSize: 4
    };
    this.searchBooks = this.searchBooks.bind(this);
    this.changePage = this.changePage.bind(this);
  }
  componentDidMount() {
    this.searchBooks();
  }
  searchBooks(query){
    if(!query) query = 'node';
    axios.get('/v2/book/search', {
      params: {
        q: query,
        count: 100
      }
    })
    .then((res) => {
      let books = res.data.books.filter((item) => {
        return item.summary
      });
      this.setState({
        books,
        currentPage: 1
      })
    });
  }
  changePage(currentPage){
    this.setState({currentPage})
  }
  render() {
    let {pageSize, currentPage, books} = this.state;
    let total = books.length;
    let filterBooks = books.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <SearchBar val={this.state.query} searchBooks={this.searchBooks}/>
          </div>
          <div className="panel-body">
            <BookList
              books={filterBooks}
              currentPage={currentPage}
              pageSize={pageSize}
              total={total}
              changePage={this.changePage}
            />
          </div>
        </div>
      </div>
    );
  }

}

export default App;