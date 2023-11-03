import React from "react";

function About(props) {
    const { imageSrc, aboutText } = props;
  
    // console.log(props);
    return (
      <aside>
        <img 
        src={imageSrc || "https://via.placeholder.com/215"} 
        alt="blog logo" 
        />
        <p>{aboutText}</p>
      </aside>
    );
  }

export default About;