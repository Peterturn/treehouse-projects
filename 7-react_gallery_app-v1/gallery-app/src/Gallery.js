import React from 'react';
import Photo from './Photo';

function Gallery (props){
  const jsonData = props.data;
  let photos = jsonData.map(gif => 
      <Photo url={`https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`}/>
     )
  
  
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