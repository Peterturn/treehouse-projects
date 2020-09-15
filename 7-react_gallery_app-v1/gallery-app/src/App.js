import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm';
import Nav from './Nav';
import Gallery from './Gallery';
import axios from 'axios';
import { apiKey } from './Key';

 class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      loading: true
    };
  } 

  getSearchData(query = "cats") {
    console.log('hi');
   axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
   .then(response => {
     console.log(response.data);
     this.setState({
       photos: response.data.photos.photo,
       loading: true
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
        <Gallery />

      </div>
    )
  }
    
  
}

export default App;
