import React, { useEffect, useState } from 'react';
import selection from '@site/static/font/selection.json';
import positions from '@site/static/data/icons/iconsPosition.json';

export default function SvgFont({ icon, size }) {
  const [path, setPath] = useState('');
  const position = positions["100"];
  const data = selection.icons[parseInt(icon)];

  useEffect(() => {
    const path = data.icon.paths.reduce((acc, curr) => acc + ` ${curr}`, '');
    setPath(path);
  }, []);

  return (
    <span className="svg_container">
      <svg className="hidesvg" version="1.1" xmlns="http://www.w3.org/1999/xlink">
        <defs>
          <symbol id={data.properties.name} width={size} viewBox={`0 0 ${position}`}>
            <title>test</title>
            <path className="path1" d={path}></path>
          </symbol>
        </defs>
      </svg>
      <svg className="icon"><use href={`#${data.properties.name}`}></use></svg>
    </span>  
  )
}
