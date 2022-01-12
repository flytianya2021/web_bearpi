import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '小熊派 IoT',   
    Svg: require('../../static/img/bearpi_st.svg').default,
    description: (
      <>
       物联网开发板，华为官方指定开发板。可实现智慧农业、智慧物流、智慧路灯等案例。
      </>
    ),
  },
  {
    title: '小熊派-鸿蒙-叔',
    Svg: require('../../static/img/bearpi_hm_micro.svg').default,
    description: (
      <>
       鸿蒙开发板，全球首款可折叠开发板。
      </>
    ),
  },
  {
    title: '小熊派-鸿蒙-季',
    Svg: require('../../static/img/bearpi_hm_nano.svg').default,
    description: (
      <>
        鸿蒙入门开发板
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
