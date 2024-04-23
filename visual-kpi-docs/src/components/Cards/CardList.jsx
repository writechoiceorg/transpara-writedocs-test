import React from 'react';

const CardList = ({ data, Card, className, numColumns }) => {

  const setGridColumns = (numColumns) => {
      if (numColumns) {
        const columnWidths = Array(numColumns).fill('minmax(200px, 1fr)').join(' ');
        return columnWidths;
      }
      return 'repeat(auto-fill, minmax(200px, 1fr))';
  };
  
  return (
    <div className={className} style={{ gridTemplateColumns: setGridColumns(numColumns)}}>
      {data.map((item, index) => (
        <Card key={index} logo={item.logo} name={item.name} linkTo={item.linkTo} externalLink={item.externalLink} />
      ))}
    </div>
  );
};

export default CardList