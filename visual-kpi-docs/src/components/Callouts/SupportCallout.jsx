import React from 'react';
import '../../css/callout.css';
import { Question } from '@phosphor-icons/react';

export default function SupportCallout() {
  return (
    <div className="callout support-callout">
      <div className="callout-icon">
        <Question size={24} color="black" weight="bold" />
      </div>
      <div className="callout-content support-callout-content">
        <h2 className="callout-title support-callout-title">Support</h2>
        <p className="callout-text support-callout-text">Call Transpara Support example text.</p>
      </div>
    </div>
  )
}
