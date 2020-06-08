import React from 'react';
import './Overlay.css';

function Overlay(props) {
  const name = props.details.filename.split('/')[1];
  const url = props.details.filename.replace(/\//g, '_');
  
  const setOverlay = props.setOverlay;
 console.log(name);


  return (
    <div className="Overlay">
      <button
        onClick={() => {
          setOverlay(null);
        }}
      >Close</button>
      <img src={`hires/${url}`} alt="this is our description"/>
      <h1>{name}</h1>
      <p>This uMap is a digital archive of Vogue's Fall 2019 Ready to Wear Collection.
        In its current state images are clustered based on visual similiarity which include
        compositional similiarity as well. If objects have the same composition clothing articles
        are better grouped and highlighted for their visual similarity. 
        setting. 
      </p>
    </div>
  );

}

export default Overlay;