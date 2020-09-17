import React from 'react';
import Photo from './Photo';
import NoPhotos from './NoPhotos';

function Gallery (props){
  const results = props.value;
  let photos;

  if (results.length>0){
    photos = results.map(gif => 
      <Photo 
      farm={results.farm}
      server={results.server}
      id={results.id}
      secret={results.secret}
      />
     )}else{
       photos= <NoPhotos/>}
  
  
  return(

        <div className="photo-container">
        <h2>Results</h2>
        <ul>
          {photos}
        </ul>
      </div>
    );
};

export default Gallery;