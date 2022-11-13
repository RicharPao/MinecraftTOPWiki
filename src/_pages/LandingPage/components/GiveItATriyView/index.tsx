import React from 'react';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Spacer from '../../../../components/other/Spacer';

const GiveItATryView: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <div className={styles.Container}>
      <h3 className={styles.Title}>多人游戏！</h3>
      <Spacer height={40} />
      <div className={styles.Terminal}>
        <code>
          mctop1.top
        </code>
      </div>
    </div>
  );
};

export default GiveItATryView;
