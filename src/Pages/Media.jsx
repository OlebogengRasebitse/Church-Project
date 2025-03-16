import React from 'react';
import './Media.css';

const images = [
    "https://images.unsplash.com/photo-1643487563696-95398e3b1290?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7156182/pexels-photo-7156182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6647004/pexels-photo-6647004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/30608214/pexels-photo-30608214/free-photo-of-beautiful-wedding-ceremony-moment-captured.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
]

const Media = () => {
    return (
        <div>
            <h3>Gallery</h3>
            <div className='gallery'>
            {images.map((src, index) => (
                    <img key={index} src={src} alt={`Gallery image ${index + 1}`} />
                ))}
            </div>
        </div>
    );
}
export default Media;