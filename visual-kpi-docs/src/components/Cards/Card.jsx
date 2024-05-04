import React from 'react'

export default function Card({ logo, name, linkTo, externalLink, description }) {
  if (linkTo || externalLink) {
    const classes = description ? 'link_card' : 'link_card title_only_card';
    
    return (
      <a className={classes} target={externalLink && '_blank'} href={linkTo}>
        {logo && <img src={`../../../img/setup-adm/interfaces/icons/${logo}.png`} className="icon_img" alt={name} /> }
        <h3>{name}</h3>
        {
          description && <p>{description}</p>
        }
      </a>
    );
  }

  const classes = description ? 'icon_card' : 'icon_card title_only_card';

  return (
    <div className={classes}>
      <img src={`../../../img/setup-adm/interfaces/icons/${logo}.png`} className="icon_img" alt={name} />
      <h3 className={!description && "title-only-card"}>{name}</h3>
      {
        description && <p>{description}</p>
      }
    </div>
  );
}
