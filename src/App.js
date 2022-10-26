// import data and module
import React from 'react';
import { useState, useEffect } from 'react';
import StarRating from "./components/StarRating";
import DragBox from "./components/DragBox";
import "./components/App.css";

import { IconContext } from "react-icons";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import RecipeReviewCard from "./components/Card";
import Slide from '@mui/material/Slide';
import { CARD_INFO } from './components/CardInfo';

function Arrow(props) {
  const { direction, clickFunction } = props;
  const icon = direction === 'left' ? <FaChevronLeft /> : <FaChevronRight />;

  return <div onClick={clickFunction}>{icon}</div>;
}

function App() {
  const [index, setIndex] = useState(0);
  const content = CARD_INFO[index];
  const numSlides = CARD_INFO.length;

  const [slideIn, setSlideIn] = useState(true);
  const [slideDirection, setSlideDirection] = useState('down');

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

  return (
    // return StarRating component with totalStars property
    <React.Fragment>
      <StarRating totalStars={99}/>
      <DragBox/>
      <div className='SlideCard'>

        <IconContext.Provider value={{ size: "5em" }}>
          <div>
            <Arrow direction='left' clickFunction={() => onArrowClick('left')}/>
          </div>
        </IconContext.Provider>

        <Slide in={slideIn} direction={slideDirection}>
            <div>
              <RecipeReviewCard content={content}/>
            </div>
        </Slide>

        <IconContext.Provider value={{ size: "5em" }}>
          <div>
            <Arrow direction='right' clickFunction={() => onArrowClick('left')}/>
          </div>
        </IconContext.Provider>

      </div>
    </React.Fragment>
  );
}

// export module
export default App;