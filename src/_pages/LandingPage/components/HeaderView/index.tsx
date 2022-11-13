import React, { useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HeaderTyper from './components/HeaderTyper';
import Spacer from '../../../../components/other/Spacer';
import PrimaryButton from '../../../../components/buttons/PrimaryButton';
import GithubButton from '../../../../components/buttons/GithubButton';
import styles from './styles.module.css';
import { useWindowSize } from '../../../../hooks/useWindowSize';
import MouseScroller from './components/MouseScroller';
import Astronaut from './components/Astronaut';
import { shuffle } from '../../../../utils';

const HeaderView: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  const { windowHeight } = useWindowSize();
  const [toTypeWords] = useState(
    shuffle([
      '深度开发',
      '粘液科技',
      '在线人数多',
      '匠心打造',
      '超多数据包',
      '300+物品',
			'丰富遗迹 自由探索',
			'友善的社区',
			'苟腐竹天天在群内与玩家画大饼吹牛逼',
			'大量粘液科技附属',
			'不肝 养老',
			'良心服主',
    ])
  );

  return (
    <div
      className={styles.Container}
      style={{ height: windowHeight > 800 ? windowHeight : undefined }}>
      <div>
        <h1 className={styles.HeaderTitle}>
          <b>MCTOP</b> <span className={styles.SeparatorText}><b>特色</b></span>
        </h1>
        <Spacer height={20} />
        <HeaderTyper
          className={styles.HeaderTyper}
          words={toTypeWords}
          delay={5000}
          defaultText={toTypeWords[0] || 'simple'}
        />
        <Spacer height={50} />
        <p className={styles.DescriptionText}>{siteConfig.tagline}</p>
        <Spacer height={50} />
        <div className={styles.ButtonContainer}>
          <PrimaryButton
            className={styles.GetStartedButton}
            to={'/docs/introduction'}>
            进入Wiki
          </PrimaryButton>
          {/* <GithubButton
            className={styles.GithubButton}
            to={siteConfig.customFields.githubUrl as any}
          /> */}
        </div>
      </div>
      {/* <Astronaut className={styles.AstronautImage} />
      {windowHeight > 900 && windowHeight < 1200 && <MouseScroller />} */}
    </div>
  );
};

export default HeaderView;
