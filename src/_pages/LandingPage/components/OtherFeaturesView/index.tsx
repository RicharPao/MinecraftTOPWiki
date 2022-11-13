import React from 'react';
import styles from './styles.module.css';
import Cards, { CardInterface } from './components/Cards';

const cards: CardInterface[] = [
  {
    title: '超多插件',
    description:
      '服务器近 140+ 插件协同运行',
    to: 'docs/plugins',
    imagePath: 'img/pages/landing/undraw_checking_boxes_re_9h8m.svg',
  },
  {
    title: '优质社区',
    description:
      '活动不断！比赛不断！服务器挖掘每一位玩家的闪光点',
    to: 'docs/community',
    imagePath: 'img/pages/landing/undraw_faq_re_31cw.svg',
  },
  {
    title: '极速加载',
    description:
      '所有玩法基于数据包和插件，客户端无负担！',
    to: '/',
    imagePath: 'img/pages/landing/undraw_hello_re_3evm.svg',
  },
  {
    title: '城镇建设',
    description:
      '与一堆志同道合的朋友一起游玩服务器',
    to: 'https://coveralls.io/github/agile-ts/agile?branch=master',
    imagePath: 'img/pages/landing/undraw_our_neighborhood_re_rmx8.svg',
  },
  {
    title: '时装系统',
    description:
      '获得服务器专属的挂饰和时装，或设置自己的皮肤',
    to: 'docs/introduction#typescript',
    imagePath: 'img/pages/landing/undraw_window_shopping_re_0kbm.svg',
  },
];

const OtherFeaturesView: React.FC = () => {
  return (
    <div className={styles.Container}>
      <Cards cards={cards} />
    </div>
  );
};

export default OtherFeaturesView;
