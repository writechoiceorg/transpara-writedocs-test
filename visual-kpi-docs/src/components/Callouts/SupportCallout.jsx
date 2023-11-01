import React from 'react';
import '../../css/callout.css';
import SvgFont from '../SvgFont/SvgFont';
import selection from '../../../static/font/selection.json';
import positions from '../../../static/data/icons/iconsPosition.json';

export default function SupportCallout() {
  return (
    <div className="callout support-callout theme-admonition theme-admonition-note alert alert--secondary admonition_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module">
      <div className="callout-heading admonitionHeading_node_modules-\@docusaurus-theme-classic-lib-theme-Admonition-styles-module">
        <span className=".callout-icon admonitionIcon_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module">
          <SvgFont data={selection.icons[108]} position={positions["108"]} size={18}/>
        </span>
          SUPPORT
      </div>
      <div className="callout-content support-callout-content admonitionContent_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module">
        <p>Call Transpara Support example text.</p>
      </div>
    </div>
  )
}
