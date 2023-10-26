import React from 'react';
import HomeBtn from '../buttons/HomeBtn';

function Card({ card }) {
  return (
    <div className='sectionCard'>
      <h4 className='cardTitle'>{card.title}</h4>
      <p>{card.content}</p>
      <HomeBtn text={card.button} btnClass={'sectionBtn'}/>
    </div>
  );
}


export default function HomepageSection({ title1, title2, cards, className }) {
  return (
    <div className='sectionContainer'>
      <div>
        <h1 className='sectionTitle1'>{title1}</h1>
        <h1 className='sectionTitle2'>{title2}</h1>
      </div>
      <div className={className}>
        {
          cards.map((c, idx) => (
            <Card key={idx} card={c}/>
          ))
        }
      </div>
    </div>
  );
}
