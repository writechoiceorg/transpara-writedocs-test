import React from 'react';
import HomeBtn from '../buttons/HomeBtn';

export default function Card({ card, className }) {
  return (
    <div className={className}>
      <h4 className='cardTitle'>{card.title}</h4>
      <p>{card.content}</p>
      <HomeBtn text={card.button} btnClass={'sectionBtn'} route={card.route}/>
    </div>
  );
}
