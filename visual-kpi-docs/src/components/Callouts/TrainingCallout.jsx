import React from 'react';
import '../../css/callout.css';
import SvgFont from '../SvgFont/SvgFont';
import selection from '../../../static/font/selection.json';
import positions from '../../../static/data/icons/iconsPosition.json';

export default function TrainingCallout({ title, content }) {
  return (
    <div className="callout training-callout theme-admonition theme-admonition-note alert alert--secondary admonition_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module">
      <div className="callout-heading admonitionHeading_node_modules-\@docusaurus-theme-classic-lib-theme-Admonition-styles-module">
        <span className="admonitionIcon_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module">
        <SvgFont data={selection.icons[116]} position={positions["116"]} size={18}/>
        </span>
        {title.toUpperCase()}
      </div>
      <div className="callout-content training-callout-content admonitionContent_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module">
        <p>{content}</p>
      </div>
    </div>
  )
}
