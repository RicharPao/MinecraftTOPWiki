import React from 'react';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Spacer from '../../../../components/other/Spacer';
import { useAgile } from '@agile-ts/react';
import core from '../../../../core';
import StatBadge from './components/StatBadge';
import { useWindowSize } from '../../../../hooks/useWindowSize';

const StatsView: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();

  const { windowHeight } = useWindowSize();
  const npmDownloads = useAgile(core.stats.NPM_DOWNLOADS);
  const githubStars = useAgile(core.stats.GITHUB_STARS);
  const githubForks = useAgile(core.stats.GITHUB_FORKS);

  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <div className={styles.HeaderContainer}>
          <h3 className={styles.Tagline}>实时更新服务器状态信息</h3>
          <h1 className={styles.Title}>当前版本</h1>
          <Spacer height={20} />
        </div>
        <Spacer height={windowHeight > 768 ? 60 : 20} />
        <div className={styles.BadgesContainer}>
          <StatBadge
            icon={'star'}
						string={'1.19.2'}
            number={'1.19.2'}
            text={'核心版本'}
            // to={`${siteConfig.customFields.githubUrl}/stargazers`}
            className={styles.Badge}
          />
          <StatBadge
            icon={'server'}
            number={4}
            text={'生存区数'}
            // to={`${siteConfig.customFields.githubUrl}/network/members`}
            className={styles.Badge}
          />
          <StatBadge
            icon={'zap'}
            number={3}
            text={'资源区数'}
            // to={siteConfig.customFields.npmCoreUrl as any}
            className={styles.Badge}
          />
        </div>
      </div>
    </div>
  );
};

export default StatsView;
