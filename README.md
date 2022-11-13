# 使用说明
这是为MinecraftTOP服务器制作的文档框架，使用docusaurus框架制作

## 安装Node.js
在node.js官网 http://nodejs.cn/ 下载并安装
安装完成之后在终端中输入`node -v`和`npm -v`检查是否有版本信息输出，有则代表安装成功

## 安装yarn
在终端输入`npm install --global yarn`安装yarn

## 安装Git
在Git官网 https://git-scm.com/ 下载Git并安装
安装时选择好路径一路Next就好了，不用修改设置

**如果上述软件你都安装了可以跳过**
---

## 克隆仓库
找一个空白的文件夹，并打开终端，进入此文件夹
输入`git clone https://github.com/RicharPao/MinecraftTOPWiki`克隆此仓库
进入MinecraftTOPWiki文件夹 `cd MinecraftTOPWiki`

## 安装框架
进入了文件夹之后在终端输入
```
yarn install
```
安装框架
**时间可能有点长，可以后台挂着等待，反正肯定能装上**

## 本地运行
在终端输入
```
yarn start
```
启动热重载部署
这样的话在修改文件后可以实时显示更改

## 文件说明
`docusaurus.config.js`是框架配置文件，可以在里面调整`navbar`（导航栏）和`footer`（页脚）
`sidebar.js`是侧边栏的配置文件，我已经开启了自动生成侧边栏

## 如何写作
在`/docs`目录中创建md文件写作即可，可以使用文件夹分类，会自动生成侧边栏

## 构建
```
yarn build
```
生成的build文件夹直接部署即可

## 框架帮助
框架的官网 http://docusaurus.cn/ 可以在中文文档中学习如何配置框架，基本的配置已经做好了，就是可以按照需要改改sidebar
每篇文章都需要在文件的开头使用
```
---

---
```
也就是FrontMatter来设置文件的标题等
参见https://www.docusaurus.cn/docs/markdown-features#front-matter
你可以设置文档的标题 相对路径 id等 这些都和重要
