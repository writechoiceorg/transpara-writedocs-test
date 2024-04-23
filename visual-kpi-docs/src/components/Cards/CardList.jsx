import React from 'react';

const CardList = ({ data, Card, className, numColumns }) => {

  const setGridColumns = () => {
    if (numColumns) {
      return `${className} grid-columns-${numColumns}`;
    } else {
      return `${className} grid-columns-auto`;
    }
  };
  
  return (
    <div className={setGridColumns()} >
      {data.map((item, index) => (
        <Card key={index} logo={item.logo} name={item.name} linkTo={item.linkTo} externalLink={item.externalLink} />
      ))}
    </div>
  );
};

export default CardList