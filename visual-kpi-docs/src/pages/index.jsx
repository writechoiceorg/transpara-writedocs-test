import React from 'react';
// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import Translate, { translate } from '@docusaurus/Translate';

// import styles from './index.module.css';
import '../css/HomePage.css';
import '../css/sidebar.css';
import '../css/navbar.css';
import HomepageHeader from '../components/Homepage/Header';
import HomepageSection from '../components/Homepage/Section';

const sectionContent = [
  {
    title1: 'Low-Code Application',
    title2: 'Guides',
  },
  {
    title1: 'Developers',
    title2: 'Documentation',
  },
  {
    title1: 'Developers',
    title2: 'Documentation',
  },
];

const cardContent = {
  section1: [
    { 
      title: 'Tutorial and Guides',
      content: `End-to-end solution for managing
       and mitigating risk to accelerate the 
       creation of business value-producing applications.`,
      button: 'Create First App for Free',
    },
    {
      title: 'User Reference',
      content: `Accelerate digital business transformation
       with visual composition and modeling-based approach
       for faster app delivery and continuous innovation.`,
      button: 'Schedule Demo',
    },
  ],
  section2: [
    { 
      title: 'Tutorial and Guides',
      content: `End-to-end solution for managing
       and mitigating risk to accelerate the 
       creation of business value-producing applications.`,
      button: 'Create First App for Free',
    },
    {
      title: 'Tutorial and Guides',
      content: `Accelerate digital business transformation
       with visual composition and modeling-based approach
       for faster app delivery and continuous innovation.`,
      button: 'Schedule Demo',
    },
  ],
  section3: [
    { 
      title: 'Tutorial and Guides',
      content: `End-to-end solution for managing
       and mitigating risk to accelerate the 
       creation of business value-producing applications.`,
      button: 'Create First App for Free',
    },
    {
      title: 'Product Roadmap',
      content: `Accelerate digital business transformation
       with visual composition and modeling-based approach
       for faster app delivery and continuous innovation.`,
      button: 'Schedule Demo',
    },
    {
      title: 'Questions',
      content: `Accelerate digital business transformation
       with visual composition and modeling-based approach
       for faster app delivery and continuous innovation.`,
      button: 'Schedule Demo',
    },
  ],
};

export default function Home() {
  // const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={'Docs'}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        {
          sectionContent.map((content, idx) => (
            <>
              <HomepageSection
                key={idx}
                title1={content.title1} 
                title2={content.title2} 
                cards={cardContent[`section${idx + 1}`]}
                className={`cards${cardContent[`section${idx + 1}`].length}`}
              />
              { idx < sectionContent.length - 1 && <div className='breakLine'/>}
            </>
          ))
        }
      </main>
    </Layout>
  );
}
