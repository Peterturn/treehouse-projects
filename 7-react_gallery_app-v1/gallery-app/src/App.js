//React Imports
import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
//Fetch/get middleware import
import axios from 'axios';

//JS Imports
import { apiKey } from './Key';
import SearchForm from './SearchForm';
//Button Navigation
import Nav from './Nav';
//Photo Contianer
import Gallery from './Gallery';



 class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      kitty: [],
      dog: [],
      computer: [],
      loading: true
    };
  } 

  //Life Cycle Methode that mounts original fetch
  componentDidMount() {
    this.performSearch();
    this.searchPuppy();
    this.searchComputer();
    this.searchKitty();
    }

  //Fetch Search results and set loading state to false
  performSearch = ( query = 'flags') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${ query }&per_page=24&page=1&format=json&nojsoncallback=1`)
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

  searchPuppy = ( query = 'puppy' ) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${ query }&per_page=24&page=1&format=json&nojsoncallback=1`)
  .then(response => {
    this.setState({
      dog: response.data.photos.photo,
      loading: false,
    });
  })
     .catch(error => {
     console.log('Error fetching and parsing data', error);
     });
  }

  searchComputer = ( query = 'computer' ) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${ query }&per_page=24&page=1&format=json&nojsoncallback=1`)
  .then(response => {
    this.setState({
      computer: response.data.photos.photo,
      loading: false,
    });
  })
     .catch(error => {
     console.log('Error fetching and parsing data', error);
     });
  }
  
  searchKitty = ( query = 'kitty' ) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${ query }&per_page=24&page=1&format=json&nojsoncallback=1`)
  .then(response => {
    this.setState({
      kitty: response.data.photos.photo,
      loading: false,
    });
  })
     .catch(error => {
     console.log('Error fetching and parsing data', error);
     });
  }

  //Render Compononts and pass props
  render (){
    console.log(this.state.photos);
    return (
       <BrowserRouter>
        <div className="container">
          <SearchForm onSearch={this.performSearch}/>
          <Nav />
          <Switch>
            <Route exact path="/" component={() => <Gallery value={this.state.photos}/>} />
            <Route path="/search/:tags" component={() => <Gallery value={this.state.photos}/>} />
            <Route  path="/cats" component={() => <Gallery value={this.state.kitty} />} />
            <Route  path="/dogs" component={() => <Gallery value={this.state.dog} />} />
            <Route  path="/computers" component={() => <Gallery value={this.state.computer} />} />

          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
