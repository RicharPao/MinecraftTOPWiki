const {
  Agile,
  generateId,
  createState,
  createCollection,
  createComputed,
} = require('@agile-ts/core');
const {
  AgileHOC,
  useAgile,
  useWatcher,
  useProxy,
  useSelector,
  useValue,
} = require('@agile-ts/react');
const { Event, useEvent } = require('@agile-ts/event');
const { toast } = require('react-toastify');

const githubOrgUrl = 'https://github.com/richarpao';
const domain = '/';
const npmOrgUrl = 'https://www.npmjs.com/package/@yepaoblog';

const customFields = {
  copyright: `©2022 MinecraftTOP`,
  meta: {
    title: 'MinecraftTOP高版本生存服务器',
    image: '/img/meta.png',
    description:
      '在原版生存基础上制作了大量的拓展内容, 大型玩法数十种，各类其他玩法数不尽。' +
      '长期维护运营永不删档原则' +
      '遗迹探索, 冒险生存, 精英怪, 强大BOSS, 休闲养老, 粘液科技, 300+附魔' +
      '不定期举办各种活动',
    color: '#6c69a0',
    keywords: [
      '我的世界',
			'Minecraft',
			'MC',
			'服务器',
			'高版本服务器',
			'养老服务器',
			'粘液科技',
			'附属',
			'多人',
			'TOP',
			'MinecraftTOP',
			'服务器推荐',
			'遗迹',
			'插件',
			'自由服务器',
			'领地',
    ],
  },
  domain,
  githubOrgUrl,
  githubUrl: `${githubOrgUrl}/richarpao.github.io`,
  // githubDocsUrl: `${githubOrgUrl}/documentation`,
  // npmCoreUrl: `${npmOrgUrl}/core`,
  // discordUrl: `https://discord.gg/T9GzreAwPH`,
  // stackoverflowUrl: 'https://stackoverflow.com/questions/tagged/agile-ts',
  // twitterUrl: 'https://twitter.com/AgileFramework',
  // redditUrl: 'https://www.reddit.com/r/AgileTs/',
  version: '0.0.1',
  announcementBar: {
		textColor: '#ffffff',
		isCloseable: true,
    id: 'announcement',
    content: [
      `🤔你知道吗：钓鱼岛在每天晚上举行钓鱼比赛`,
			`🤔你知道吗：每天搬砖五分钟可以获得不少的收益`,
			`🤔你知道吗：MinecraftTOP是国内早期使用资源包的服务器之一`,
			`🤔你知道吗：有数百款家具现已开放！`,
			`🤔你知道吗：有一次的凋零风暴导致了服务器崩溃`,
			`🤔你知道吗：加入或创建小镇获得更多权益`,
			`🤔你知道吗：这里并不是服务器官方的Wiki`,
			`🤔你知道吗：在进入三区城镇计划时你可以看到羊驼的ad`,
    ],
    random: false,
    interval: 4000,
  },
  // liveCodeScope: {
  //   Agile,
  //   createState,
  //   createCollection,
  //   createComputed,
  //   useAgile,
  //   useProxy,
  //   useEvent,
  //   useWatcher,
  //   useSelector,
  //   useValue,
  //   AgileHOC,
  //   generateId,
  //   Event,
  //   toast,
  // },
};

const config = {
  title: 'MinecraftTOP Wiki',
  tagline: '深度开发 新增300+物品 200+附魔 RPG & SlimeFun',
  url: customFields.domain,
  baseUrlIssueBanner: false,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.png',
  organizationName: 'MCTOP',
  projectName: 'https://github.com/richarpao',
  themes: ['@docusaurus/theme-live-codeblock'],
  scripts: [{ src: 'https://snack.expo.io/embed.js', async: true }], // https://github.com/expo/snack/blob/main/docs/embedding-snacks.md
  plugins: [
    'docusaurus-plugin-sass',
    // @docusaurus/plugin-google-analytics (Not necessary because it automatically gets added)
  ],
  customFields: { ...customFields },
  themeConfig: {
    hideableSidebar: true,
    // https://docusaurus.io/docs/search#using-algolia-docsearch
		// 搜索
    algolia: {
      appId: '64P3EOD5L9',
      apiKey: '461e97fe74b935316bf63af4a6a93345',
      indexName: 'agile-ts',
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    // image: '/img/meta.png', // Gets used in Head as Meta Image (og:image)
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
      defaultLanguage: 'javascript',
    },
    navbar: {
			hideOnScroll: true,
      title: ' ',
      logo: {
        alt: ' ',
        src: 'img/favicon.png',
      },
      items: [
        // left,
        {
          label: 'Wiki分类',
          position: 'left',
          items: [
            {
              label: '玩家攻略',
              to: '/docs/玩家攻略/',
            },
            {
              label: '粘液科技',
              to: '/docs/粘液科技/',
            },
            {
              label: '拓展附魔',
              to: '/docs/拓展附魔/',
            },
            {
              label: 'RPG',
              to: '/docs/RPG/',
            },
						{
							label: '更多矿石',
							to: '/docs/更多矿石/',
						},
						{
							label: '星露谷农业',
							to: '/docs/星露谷农业/'
						},
          ],
        },
        {
          label: '更新日志',
          position: 'left',
          to: 'blog',
        },
      ],
    },
    footer: {
      
      copyright: `Copyright © ${new Date().getFullYear()} MinecraftTOP`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          admonitions: {
            icons: 'emoji',
          },
          sidebarPath: require.resolve('./sidebars.js'),
          // editUrl: `https://github.com/richarpao/richarpao.github.io`,
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
          ],
        },
        blog: {
          showReadingTime: true,
					blogTitle: '更新日志',
          postsPerPage: 'ALL',
					blogSidebarTitle: '服务器更新日志',
          blogSidebarCount: 'ALL',
          // editUrl: `${customFields.githubDocsUrl}/tree/develop`,
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.scss')],
        },
      },
    ],
  ],
};

module.exports = { ...config };
