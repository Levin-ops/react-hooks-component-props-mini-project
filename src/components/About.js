import React from "react";

function About(imageUrl, aboutText){

    const defaultURL = `https://via.placeholder.com/215`;

    return (
        <aside>
            <img
            src={imageUrl || defaultURL}
            alt="blog logo"
            />
            <p>{aboutText}</p>
        </aside>
    )
}

export default About