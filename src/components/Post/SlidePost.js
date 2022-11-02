// React Base
import React, { useState, useEffect } from "react";

// MUI Material
import Slide from '@mui/material/Slide';

// Icons
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Import
import PostCard from './PostCard';
import { PostDatas } from '/src/data/PostData';

const Arrow = (props) =>{
    const { direction, clickFunction } = props;
    const icon = direction === 'left' ? 
        <FaChevronLeft size={50}/> : 
        <FaChevronRight size={50}/>;

    return (<div onClick={clickFunction}>{icon}</div>);
}

const SlidePost = () => {
    const [index, setIndex] = useState(0);
    const [slideIn, setSlideIn] = useState(true);
    const [slideDirection, setSlideDirection] = useState('down');

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.keyCode === 39) {
                onArrowClick('right');
            }
            if (e.keyCode === 37) {
                onArrowClick('left');
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });
    
    const post = PostDatas[index];
    const numSlides = PostDatas.length;

    const onArrowClick = (direction) => {
        const increment = direction === 'left' ? -1 : 1;
        const newIndex = (index + increment + numSlides) % numSlides;

        const oppDirection = direction === 'left' ? 'right' : 'left';
        setSlideDirection(direction);
        setSlideIn(false);

        setTimeout(() => {
            setIndex(newIndex);
            setSlideDirection(oppDirection);
            setSlideIn(true);
        }, 500);
    };

    return (
        <>
            <div className='SlideCard'>

                <Arrow 
                    direction='left' 
                    clickFunction={() => onArrowClick('left')}
                />

                <Slide in={slideIn} direction={slideDirection}>
                    <div>
                        <PostCard post={post}/>
                    </div>
                </Slide>

                <Arrow 
                    direction='right' 
                    clickFunction={() => onArrowClick('right')}
                />
            </div>
        </>
    );
}

export default SlidePost;