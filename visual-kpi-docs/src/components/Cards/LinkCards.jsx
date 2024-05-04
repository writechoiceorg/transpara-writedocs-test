import React from 'react';
import CardList from './CardList';

const LinkCards = ({ data, numColumns }) => {
  return <CardList data={data} numColumns={numColumns} className={"link_cards_container"} />;
};

export default LinkCards;
