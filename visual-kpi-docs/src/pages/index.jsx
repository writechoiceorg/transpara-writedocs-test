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
import '../css/svg.css';
import HomepageHeader from '../components/Homepage/Header';
import Card from '../components/Homepage/Card';

const first3Cards = [
  {
    title: "Installation",
    content: "How to install.",
    button: "Learn more",
    route: "/docs/",
    imageClass: "image1",
  },
  {
    title: "Tutorial",
    content: "Here you find a tutorial.",
    button: "Learn more",
    route: "/docs/",
    imageClass: "image2",
  },
  {
    title: "Viewers",
    content: "Here you find viewers.",
    button: "Learn more",
    route: "/docs/",
    imageClass: "image3",
  }
]

const second2Cards = [
  {
    title: "Installation",
    content: "How to install.",
    button: "Learn more",
    route: "/docs/",
    imageClass: "image4",
  },
  {
    title: "Tutorial",
    content: "Here you find a tutorial.",
    button: "Learn more",
    route: "/docs/",
    imageClass: "image5",
  },
]

export default function Home() {
  // const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={'Docs'}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <div className="cards_container first_cards_section">
          {
            first3Cards.map((card) => (
              <Card key={card.title} card={ card } className="card"/>
            ))
          }
        </div>
        <div className="cards_container secondary_cards_section">
          {
            second2Cards.map((card) => (
              <Card key={card.title} card={ card } className="card"/>
            ))
          }
        </div>
      </main>
    </Layout>
  );
}
