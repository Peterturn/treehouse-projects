import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm';
import Nav from './Nav';
import Gallery from './Gallery';
//import { apiKey } from './Key';

 class App extends Component {
  
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    };
  } 

    getSearchData = () => {
      fetch(`http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC`)
        .then(response => response.json())
        .then(responseData => {
          this.setState({ photos: responseData.data });
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
