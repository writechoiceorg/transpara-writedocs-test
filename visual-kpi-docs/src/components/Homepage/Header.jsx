import React from 'react';
import clsx from 'clsx';
import HomeBtn from '../buttons/HomeBtn';
import styles from '../../pages/index.module.css';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';



export default function HomepageHeader() {
  // const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container header_container">
        <div className="first_column">
          <h1>Visual KPI Docs</h1>
          <p>Everything in One Place, From Any Place</p>
        </div>
        <div className="second_column">
          <p>
          Get one single view of operations across all of your data sources without moving anything or enduring a huge project. Visual KPI supports thousands of industrial, business and external data sources and delivers stunning visualizations, KPIs, dashboards, analytics, and alerts. 
          </p>
          <HomeBtn text={'Get started'} btnClass={'headerBtn'} route={'/docs/'}/>
        </div>
      </div>
    </header>
  );
}