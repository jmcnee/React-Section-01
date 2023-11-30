import React from 'react';

export default function Card({name, faculty, children }) {
    return (
        <div className='card'>
        <h2>{name}</h2>
        <h2>Faculty: {faculty}</h2>
        {children}
        </div>
        
    );
    
}