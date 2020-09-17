import React from 'react';
import Gif from './Gif';



const Gallery = props => {
  const urlBuild = `https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`;

  const jsonData = props.data;
  let gifs; 
  if(jsonData.length){
    gifs = jsonData.map(gif => 
      <Gif url={urlBuild}/>
     )
  } else {
    
  }
  
  
  return(
    
        <div className="photo-container">
        <h2>Results</h2>
        <ul>
          {gifs}
        </ul>
      </div>
    );
};

export default Gallery;