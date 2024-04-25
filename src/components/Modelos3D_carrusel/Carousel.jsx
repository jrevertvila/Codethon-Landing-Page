// src/Carousel.js
import React, { useEffect, useState } from 'react';
import './Carousel.css'

const CarouselIndicators = ({ images, activeIndex, onClick }) => {
    return (
        <div className="carousel__indicators">
            {images.map((_, index) => (
                <span
                    key={index}
                    className={`carousel__indicator ${index === activeIndex ? 'active' : ''
                        }`}
                    onClick={() => onClick(index)}
                />
            ))}
        </div>
    );
};
const CarouselCustom = ({ images, interval = 3000 }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const nextSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };
    const prevSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };
    const goToSlide = (index) => {
        setActiveIndex(index);
    };

    useEffect(() => {
        const autoPlayInterval = setInterval(nextSlide, interval);
        return () => {
            clearInterval(autoPlayInterval);
        };
    }, [interval]);

    return (
        <>
        </>
    );
};
export default Carousel;