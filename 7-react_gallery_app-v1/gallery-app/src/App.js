import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './SearchForm';
import Nav from './Nav';
import Gallery from './Gallery';

import { apiKey } from './Key';

 class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    };
  } 

    getSearchData() {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cat&per_page=10&page=1&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        photos: response.data.photos.photo,
        loading: false,
      });
    })
    //  .catch(error => {
    //  console.log('Error fetching and parsing data', error);
    //  });
    }
  render (){
    console.log(this.state.photos);
    return (
      <div className="container">
        <SearchForm />
        <Nav />
        <Gallery />

      </div>
    )
  }
    
  
}

export default App;
