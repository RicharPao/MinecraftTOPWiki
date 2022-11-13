import React from 'react';
import styles from './styles.module.css';
import LiveCoder from './components/LiveCoder';
import Spacer from '../../../../components/other/Spacer';



const StartCodingView: React.FC = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <div className={styles.InnerContent}>
          <div className={styles.HeaderContainer}>
            <div className={styles.TaglineContainer}>
              <h3 className={styles.Tagline}>一起交流</h3>
            </div>
            <h1 className={styles.Title}><a href='https://jq.qq.com/?_wv=1027&k=I6Vj68t3' target="_blank" rel="noopener noreferrer">点击</a>加入官方QQ群</h1>
          </div>
          <Spacer height={30} />
          {/* <LiveCoder reactCode={reactCode} /> */}
        </div>
      </div>
    </div>
  );
};

export default StartCodingView;
