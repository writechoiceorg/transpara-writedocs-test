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
import Card from '../components/Homepage/Card';

const mainCard = {
  title: "How to use the documentation",
  content: "Here you find an extensive guide to learn how to take better advantage of our documentation.",
  button: "Learn more",
  route: "/docs/how-to-use-the-documentation",
}

const secondaryCards = [
  {
    title: "Installation",
    content: "How to install.",
    button: "Learn more",
    route: "/docs/",
  },
  {
    title: "Tutorial",
    content: "Here you find a tutorial.",
    button: "Learn more",
    route: "/docs/",
  },
  {
    title: "Viewers",
    content: "Here you find viewers.",
    button: "Learn more",
    route: "/docs/",
  }
]

export default function Home() {
  // const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={'Docs'}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <Card card={ mainCard } className="main_card"/>
        <div className="secondary_section">
          {
            secondaryCards.map((card) => (
              <Card key={card.title} card={ card } className="secondary_card"/>
            ))
          }
        </div>
      </main>
    </Layout>
  );
}
