import React from 'react';
import '../components/Para.scss'; // Import your stylesheet here

function ParallaxComponent() {
  return (
    <div className="parallax_container">
      <div className="parallax_layer_1 basic_setting"></div>
      <div className="parallax_layer_2 basic_setting"></div>
      <div className="parallax_layer_3 basic_setting"></div>
      <div className="parallax_layer_4 basic_setting"></div>
      <button className="parallax_layer_5 basic_setting"></button>
      <div className="footer">
        Image Source:
        <a href="http://www.pixiv.net/" target="_blank" rel="noopener noreferrer">http://www.pixiv.net/</a>
      </div>
    </div>
  );
}


export default ParallaxComponent;