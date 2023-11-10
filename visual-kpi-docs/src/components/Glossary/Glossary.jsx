import React, { useState, useRef, useEffect } from 'react';
import '../../css/glossary.css';

export default function Glossary({ word, content }) {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [spaceAtTop, setSpaceAtTop] = useState(0);
  const [spaceAtLeft, setSpaceAtLeft] = useState(0);
  const [arrowPosition, setArrowPosition] = useState('bottom-arrow');
  const wordRef = useRef(null);

  const getScreenPosition = () => {
    const wordRect = wordRef.current.getBoundingClientRect();
    return {
      top: wordRect.top,
      left: wordRect.left,
    }
  }

  const popUpPosition = (top, left) => {
    if (top > 200) {
      setSpaceAtTop(top - 165);
      setSpaceAtLeft(left - 30);
      setArrowPosition('bottom-arrow');
    } else {
      setSpaceAtTop(top + 35);
      setSpaceAtLeft(left - 30);
      setArrowPosition('top-arrow');
    }
  }

  const handleHover = () => {
    setPopupVisible(true);
    const { top, left } = getScreenPosition();
    popUpPosition(top, left)
  }

  return (
    <span className="glossary" ref={wordRef}>
      <span
        className="glossary-word"
        onMouseEnter={handleHover}
        onMouseLeave={() => setPopupVisible(false)}
      >
        {word}
      </span>
      {isPopupVisible && (
        <div
          // onMouseLeave={() => setPopupVisible(false)}
          // onMouseEnter={() => setPopupVisible(true)}
          onClick={() => window.location='how-visual-kpi-works'}
          className={`popup ${arrowPosition}`}
          style={{
            top: `${spaceAtTop}px`,
            left: `${spaceAtLeft}px`,
          }}
        >
          <p>{content}</p>
        </div>
      )}
    </span>
  );
}
