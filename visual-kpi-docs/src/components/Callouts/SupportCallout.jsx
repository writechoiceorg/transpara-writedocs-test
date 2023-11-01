import React from 'react';
import '../../css/callout.css';
import { Question } from '@phosphor-icons/react';

export default function SupportCallout() {
  return (
    <div className="callout support-callout theme-admonition theme-admonition-note alert alert--secondary admonition_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module">
      <div className="callout-heading admonitionHeading_node_modules-\@docusaurus-theme-classic-lib-theme-Admonition-styles-module">
        <span className="admonitionIcon_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module">
          <Question size={14} color="black" weight="bold" />
        </span>
          SUPPORT
      </div>
      <div className="callout-content support-callout-content admonitionContent_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module">
        <p className="callout-text support-callout-text">Call Transpara Support example text.</p>
      </div>
    </div>
  )
}
