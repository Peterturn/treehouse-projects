import React from 'react';
import Photo from './Photo';
import NoPhotos from './NoPhotos';

function Gallery (props){
  const results = props.value;
  let photos;

  if (results.length>0){
    photos = results.map(pic => 
      <Photo 
      farm={pic.farm}
      server={pic.server}
      id={pic.id}
      secret={pic.secret}
      key={pic.id}
      />
     )}
     else{
       photos= <NoPhotos />}
  
  
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