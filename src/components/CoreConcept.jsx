import React from "react";


// Here instead of using CoreConcept(props)  we will DESTRUCTURE the data.js
// file and use the actual terms in the file to reference the data
// the names must match the data names in the .js file.
// OBJECT DEstructuring:
export function CoreConcept({ image, title, description }) {
    return (
        <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description} </p>
        </li>
    );
    }
