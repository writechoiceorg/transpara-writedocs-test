import React from 'react';
import '../../css/callout.css';

export default function UniqueCallout({ title, content }) {
  return (
    <div className="callout unique-callout">
      <div className="callout-icon">
        <img src="https://raw.githubusercontent.com/transpara/documentation/main/visual-kpi-docs/static/img/favicon.png" alt="Callout Icon" />
      </div>
      <div className="callout-content callout-callout-content">
        <h2 className="callout-title callout-callout-title">{title}</h2>
        <p className="callout-text callout-callout-text">{content}</p>
      </div>
    </div>
  )
}
