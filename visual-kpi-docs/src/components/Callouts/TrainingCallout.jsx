import React from 'react';
import '../../css/callout.css';
import { Video  } from '@phosphor-icons/react';

export default function TrainingCallout({ title, content }) {
  return (
    <div className="callout training-callout">
      <div className="callout-icon">
        <Video size={24} color="black" weight="bold" />
      </div>
      <div className="callout-content training-callout-content">
        <h2 className="callout-title training-callout-title">{title}</h2>
        <p className="callout-text training-callout-text">{content}</p>
      </div>
    </div>
  )
}
