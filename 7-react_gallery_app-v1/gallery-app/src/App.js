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

  componentDidMount() {
  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=computer&per_page=24&page=1&format=json&nojsoncallback=1`)
  .then(response => {

    this.setState({
      photos: response.data.photos.photo,
      loading: false,
    });
  })
     .catch(error => {
     console.log('Error fetching and parsing data', error);
     });
    }
  
  render (){
    console.log(this.state.photos);
    return (
      <div className="container">
        <SearchForm />
        <Nav />
        <Gallery value={this.state.photos}/>

      </div>
    )
  }
    
  
}

export default App;
