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
          <h1>Visual KPIs<br />Docs</h1>
        <div>
          <p>Visual KPIs small hero text.</p>
          <HomeBtn text={'How Visual KPI Works'} btnClass={'headerBtn'} route={'docs/joget-docs'}/>
        </div>
      </div>
    </header>
  );
}