import React from 'react';
import '../../css/callout.css';

export default function UniqueCallout({ title, content }) {
  return (
    <div className="callout unique-callout theme-admonition theme-admonition-note alert alert--secondary admonition_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module">
    <div className="callout-heading admonitionHeading_node_modules-\@docusaurus-theme-classic-lib-theme-Admonition-styles-module">
      <span className="callout-icon admonitionIcon_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module">
        <img src="https://raw.githubusercontent.com/transpara/documentation/main/visual-kpi-docs/static/img/favicon.png" alt="Callout Icon" />
      </span>
      {title.toUpperCase()}
    </div>
    <div className="callout-content unique-callout-content admonitionContent_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module">
      <p>{content}</p>
    </div>
  </div>
  )
}
