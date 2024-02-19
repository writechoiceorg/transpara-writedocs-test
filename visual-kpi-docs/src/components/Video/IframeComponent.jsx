import React from 'react';

const IframeComponent = ({ src, wSize }) => {
  const iframeStyles = {
    width: wSize || '100%',
    margin: '0 0 var(--ifm-paragraph-margin-bottom)',
    borderRadius: '7px',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.2)',
  };

  return (
    <>
      <iframe
        src={src}
        style={iframeStyles}
        height="400"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </>
  );
};

export default IframeComponent;
