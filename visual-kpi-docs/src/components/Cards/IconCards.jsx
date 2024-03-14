import React from 'react';
import data from '@site/static/data/setup-and-administration/interfaces/interfaces.json';
import CardList from './CardList';

const Card = ({ logo, name }) => {
  return (
    <div className="icon_card">
      <img src={`../../../img/setup-adm/interfaces/icons/${logo}.png`} className="icon_img" alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

const IconCards = ({ info }) => {
  return <CardList data={info || data} Card={Card} className={"icon_cards_container"} />;
};

export default IconCards;
