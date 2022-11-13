import React from 'react';
import styles from './styles.module.css';
import Spacer from '../../../../components/other/Spacer';
import SectionScroller, {
  SectionInterface,
} from './components/SectionScroller';
import PlainButton from '../../../../components/buttons/PlainButton';

const sections: SectionInterface[] = [
  {
    code: `
/cd 或 Shift + F 
    `,
    codeWithComment: `
// 在聊天栏中发送
/cd
    `,
    title: '菜单',
    description: '在任何地方打开功能菜单',
    icon: 'zap',
  },
  {
    code: `
/res 查看所有领地指令
/res tp <领地名> 传送到某个领地
/res set 设置领地权限
    `,
    codeWithComment: `
/res 查看所有领地指令
/res tp <领地名> 传送到某个领地
/res set 设置领地权限
    `,
    title: '领地',
    description: '创建并管理你的私人区域',
    icon: 'repeat',
  },
  {
    code: `
/sethome <家名> 创建一个家
/home <家名> 回到已创建的家
/delhome <家名> 删除已经创建的家
在新版本中，如果你创建了两个及以上的家，只输入/home 就可以打开菜单
    `,
    codeWithComment: `
/sethome <家名> 创建一个家
/home <家名> 回到已创建的家
/delhome <家名> 删除已经创建的家
在新版本中，如果你创建了两个及以上的家，只输入/home 就可以打开菜单
    `,
    title: '归宿',
    description: '每个大区不重复的私人传送点',
    icon: 'star',
  },
  {
    code: `
/tpa <玩家名> 在同一大区中给其他玩家发送传送申请
在收到他人的申请时可以直接点击聊天消息中的按钮进行回复
/pay <玩家名> <金额> 给指定玩家打钱
钱会直接进入目标玩家的账户中
/msg <玩家名> 阿巴阿巴
    `,
    codeWithComment: `
/tpa <玩家名> 在同一大区中给其他玩家发送传送申请
在收到他人的申请时可以直接点击聊天消息中的按钮进行回复
/pay <玩家名> <金额> 给指定玩家打钱
钱会直接进入目标玩家的账户中
/msg <玩家名> 阿巴阿巴
和玩家私信，只有你们两个能看到
    `,
    title: '玩家',
    description: '和你的好友一起搞基(bushi',
    icon: 'users',
  },
  {
    code: `
/sf guide 获取一本粘液手册
/eco <玩家名> 查询ta有多少钱
/setwarp <地标名> 在你站立的位置建立一个公共地标

其他服务器特色功能均可在菜单中找到
    `,
    codeWithComment: `
/sf guide 获取一本粘液手册
/eco <玩家名> 查询ta有多少钱
/setwarp <地标名> 在你站立的位置建立一个公共地标

其他服务器特色功能均可在菜单中找到
    `,
    title: '其他',
    description: '更多实用指令',
    icon: 'edit',
  },
];

const StraightforwardView: React.FC = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <div className={styles.HeaderContainer}>
          <h3 className={styles.Tagline}>常用指令</h3>
          <h1 className={styles.Title}>基础教程</h1>
          <Spacer height={20} />
          <p className={styles.Description}>
            
          </p>
        </div>
        <Spacer height={60} />
        <SectionScroller sections={sections} startIndex={0} />
        <PlainButton
          to={'docs/基础教程'}
          name={'查看更多'}
          className={styles.LearnMoreButton}
        />
      </div>
    </div>
  );
};

export default StraightforwardView;
