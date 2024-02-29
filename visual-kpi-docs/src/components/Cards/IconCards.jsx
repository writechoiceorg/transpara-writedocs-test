import React from 'react';
import data from '@site/static/data/setup-and-administration/interfaces/interfaces.json';

const CardList = ({ data }) => {
  return (
    <div className="icon_cards_container">
      {data.map((item, index) => (
        <Card key={index} logo={item.logo} name={item.name} />
      ))}
    </div>
  );
};

const Card = ({ logo, name }) => {
  return (
    <div className="icon_card">
      <img src={`../../../img/setup-adm/interfaces/icons/${logo}.png`} className="icon_img" alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

const IconCards = () => {
  return <CardList data={data} />;
};

export default IconCards;
