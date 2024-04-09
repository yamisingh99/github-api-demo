import React from 'react';
import doc1 from './doc1.jpeg';
import doc2 from './doc2.jpeg';
import doc3 from './doc3.jpeg';
import doc4 from './doc4.jpeg';
import './About.css';

class About extends React.Component {
  render() {
    const backgroundImageUrl = "https://png.pngtree.com/background/20210709/original/pngtree-medical-gradient-color-doctors-picture-image_917752.jpg";

    return (
      <div className="slider-container min-h-screen flex justify-center items-center" style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-screen-lg mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 font-serif">Surgical Procedures Gallery</h1>

          <div className="slider">
            <div className="slide">
              <img src={doc1} alt="Document 1" />
            </div>
            <div className="slide">
              <img src={doc2} alt="Document 2" />
            </div>
            <div className="slide">
              <img src={doc3} alt="Document 3" />
            </div>
            <div className="slide">
              <img src={doc4} alt="Document 4" />
            </div>
          </div>
          <p>Slide here for more images --> </p>
        </div>
      </div>
    );
  }
}

export default About;
