import React from 'react';
import '../../css/callout.css';
import { Video  } from '@phosphor-icons/react';

export default function TrainingCallout({ title, content }) {
  return (
    <div className="callout training-callout theme-admonition theme-admonition-note alert alert--secondary admonition_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module">
      <div className="callout-heading admonitionHeading_node_modules-\@docusaurus-theme-classic-lib-theme-Admonition-styles-module">
        <span className="admonitionIcon_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module">
          <Video size={24} color="black" weight="bold" />
        </span>
        {title.toUpperCase()}
      </div>
      <div className="callout-content training-callout-content admonitionContent_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module">
        <p>{content}</p>
      </div>
    </div>
  )
}
