import React from 'react';
import sliderImg from '../img/slider-img.png'; // Adjust the path accordingly

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to Our Application</h1>
            <p>This is the home page. Feel free to explore!</p>
            <img src={sliderImg} alt="Slider showcasing featured content" />
        </div>
    );
};

export default Home;
