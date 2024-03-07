import React from 'react';

const CardList = ({ data, Card, className }) => {
  return (
    <div className={className}>
      {data.map((item, index) => (
        <Card key={index} logo={item.logo} name={item.name} linkTo={item.linkTo} />
      ))}
    </div>
  );
};

export default CardList