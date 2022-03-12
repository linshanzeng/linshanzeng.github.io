---
title: 优化VuePress博客
date: 2022-03-12 03:00:00
categories:
 - 前端
tags:
 - 实战
---

使用vuepress-theme-reco博客主题的高级功能，Vssue实现评论

<!-- more -->

## 1.添加时间轴

```js
// .vuepress/config.js
module.exports = {
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: 'TimeLine', link: '时间轴' }
    ]
  }
}
```

## 2.移动端优化

```js
// .vuepress/config.js
module.exports = {
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ]
}  
```

## 3.首页配置

```js
// .vuepress/config.js
module.exports = {
  theme: 'reco',
  themeConfig: {
    type: 'blog'
  }
}
```

首页README.md

```md
---
home: true
heroText: null
bgImageStyle: {
  height: '0px'
}
---
```

```js
// 设置首页右侧信息栏头像
// .vuepress/config.js
module.exports = {
  theme: 'reco',
  themeConfig: {
    authorAvatar: '/avatar.png'
  }
}
```

## 4.暗色模式适配

```js
// .vuepress/config.js
module.exports = {
  theme: 'reco',
  themeConfig: {
    mode: 'dark', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
    modePicker: false // 默认 true，false 不显示模式调节按钮，true 则显示
  }
}  
```

## 5.修改主题样式

```sh
touch docs/.vuepress/styles/index.styl
```

::: details index.styl

```css
// 侧边栏样式
// 左侧侧边栏标题
.sidebar > .sidebar-links > li > a.sidebar-link {
  font-size: 1.5em !important;
  margin-left: -1em;
}
// 右侧文章标题导航栏
a.sidebar-link {
  font-size: 16px !important;
}
// 左侧边栏标题字体大小样式
.sidebar-heading span{
    font-size: 1.2em;
    font-weight: bold;

}
.sidebar-heading.open span{
    font-weight: bold;
}

// 左侧边栏展开文章的字体大小
a.sidebar-link.active {
    color: #070808 !important;
    font-size: 14px !important;
    background: #c3d4b742 !important;
}
.sidebar-sub-headers a.sidebar-link {
    margin: 0 1rem 0 1rem !important;
}
// 分组的透明度修改，未生效
.sidebar-group.is-sub-group > .sidebar-heading:not(.clickable){
    opacity: 0.5;
}

// 去除左上角标题，作者，标签等
// .page .page-title {
//     display: none;
// }

blockquote {
background-color: transparent !important;
    margin: 20px !important;
    padding: 0 !important;
    font-size: 1rem !important;
    color: #999 !important;
    border-left: .25rem solid #dfe2e5 !important;
    margin-left: 0 !important;
    padding-left: 1rem !important;
}

// tip,warning,danger容器样式
.custom-block.tip {
    background-color: #d4d4d452 !important;
}
.custom-block.warning {
    background-color: #ffa16d47 !important;
}
.custom-block.danger {
    background-color: #f9b4b457 !important;
}
// details容器样式
 summary {
    font-weight: 550;
    font-size: 16px;
    margin-top: 0.2rem;
    padding-top: 11px;
    padding-bottom: 11px;
    background-color: #75826b42;
    border-radius: 5px;
}

// 时间线样式
.timeline-wrapper .year {
  margin: 80px 0px 20px !important;
  font-size: 27px !important;
}
.timeline-wrapper .year-wrapper li {
    padding: 10px 20px 10px !important;
    border-bottom: 2px solid #999da06b !important;
    background: #c1c1e626;
    border-radius: 5rem;
    margin: 5px 0px;
    transition: all .5s;
}
.timeline-wrapper .year-wrapper li:hover {
    transform:  translate(50px,0);
    transition: all .5s;
}
.timeline-wrapper .year-wrapper li .date {
  width: 43px !important;
  font-size: 13px !important;
}
.timeline-wrapper .year-wrapper li .date:before {
    top: 22px !important;
    border: 1px solid !important;
}
.timeline-wrapper:after {
    background: skyblue !important;
}
.timeline-wrapper .desc:before, .timeline-wrapper .year:before {
  background: cadetblue !important;
}

//主页，评论偏左
.page, .password-wrapper-in {
    margin-left: 8rem !important;
}
.comments-wrapper {
    padding: 2rem 2rem 2rem 10rem !important;
}
#valine .vwrap .vedit #veditor{
  background: url('/znote/img/other/comment.png')  
  background-position: 90% 60%
  background-size: 16rem 10rem
  background-repeat: no-repeat
}

$mobileSidebarWidth = $sidebarWidth * 0.82

// narrow desktop / iPad
@media (max-width: $MQNarrow)
  .sidebar
    font-size 15px
    width $mobileSidebarWidth !important;
  .page, .password-wrapper-in
    margin-left $mobileSidebarWidth !important;
  .comments-wrapper 
    padding: 2rem 2rem 2rem $mobileSidebarWidth*1.1 !important;

// wide mobile
@media (max-width: $MQMobile)
  .sidebar
    top 0
    padding-top $navbarHeight !important;
    transform translateX(-100%)
    transition transform .2s ease
  .page, .password-wrapper-in
    margin-left 0  !important;
  .comments-wrapper 
    padding: 2rem 2rem 2rem 2rem !important;
  .theme-container
    &.sidebar-open
      .sidebar
        transform translateX(0) !important;
    &.no-navbar
      .sidebar
        padding-top: 0 !important;
  .password-shadow
    padding-left 0 !important;

// narrow mobile
@media (max-width: $MQMobileNarrow)
  h1
    font-size 1.9rem
  .content__default
    div[class*="language-"]
      margin 0.85rem -1.5rem  !important;
      border-radius 0
//about me
@media (min-width: ($MQMobile + 1px))
  .theme-container.no-sidebar
    .sidebar
      display none
    .page, .password-wrapper-in
      margin-left 0  !important;
    .comments-wrapper 
      padding: 2rem 2rem 2rem 2rem !important;

//标签列表样式
.abstract-item {
  background-color: #acdcfd3d !important;  
  transition: all .5s;
}
.abstract-item:hover {
    transform:  scale(1.02);
    transition: all .5s;
}

//滚动条样式
::-webkit-scrollbar
  width: 6px !important;
/*滚动条的设置*/
::-webkit-scrollbar-thumb {
background-color:#94989c8c !important; 
background-clip:padding-box !important; 
-webkit-border-radius: 10em !important; 
-moz-border-radius: 10em !important; 
border-radius: 10em !important; 
}
/*滚动条凹槽的颜色，还可以设置边框属性 */
::-webkit-scrollbar-track-piece {
background-color:transparent !important; 
-webkit-border-radius: 0em !important; 
-moz-border-radius: 0em !important; 
border-radius: 0em !important; 
}
/*滚动条鼠标移上去*/
::-webkit-scrollbar-thumb:hover {
background-color:#bbb !important; 
}

//navbar字体大小
.navbar .links
  font-size: 15.5px !important;

//容器样式
.theorem
  margin 1rem 0
  padding .1rem 1.5rem
  border-radius 0.4rem
  background-color #c9daea61
  .title
    font-weight bold
.custom-block
  &.right
    color transparentify($textColor, 0.4)
    font-size 0.9rem
    text-align right
```

:::

## 6. 在每个代码块的左侧显示行号

```js
// config.js
module.exports = {
  markdown: {
    lineNumbers: true
  }
}
```

## 7. 文章添加具体时间，方便排序

```md
---
title: 烤鸭的做法
date: '2022-12-12 01:00:00'
---
```

## 8. 设置全局作者姓名

```js
// config.js
module.exports = {
  themeConfig: {
    // author
    author: 'linshanzeng',
  }
}
```

## 9. 备案信息和项目开始时间

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    // 备案
    // record: 'ICP 备案文案',
    // recordLink: 'ICP 备案指向链接',
    // cyberSecurityRecord: '公安部备案文案',
    // cyberSecurityLink: '公安部备案指向链接',
    // 项目开始时间，只填写年份
    startYear: '2022'
  }
}
```

## 10.最后更新时间

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    lastUpdated: 'Last Updated', // string | boolean
  }
}
```

## 11.Git 仓库和编辑链接

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'linshanzeng/linshanzeng.github.io',
    // repoLabel: '查看源码',
    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'linshanzeng/linshanzeng.github.io',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'main',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '在GitHub上编辑此页！',
  }
}
```

## 12.展示分页

```js
// .vuepress/config.js
module.exports = {
  plugins: [
    ['@vuepress-reco/vuepress-plugin-pagation', {
        'perPage': 4
    }]
  ]
}]
```

## 13.动态标题

```js
// .vuepress/config.js
module.exports = {
  plugins: [
    ["dynamic-title", {
        showIcon: "vuepress/smile.ico",
        showText: "(/≧▽≦/)欢迎帅哥美女！",
        hideIcon: "vuepress/cry.ico",
        hideText: "(●—●)呜呜，不要走嘛！！",
        recoverTime: 2000
    }],
  ]
}]
```

## 14.复制代码

```js
// .vuepress/config.js
module.exports = {
  plugins: [
    ["vuepress-plugin-nuggets-style-copy", {
      copyText: "复制代码",
      tip: {
          content: "复制成功!"
      }
    }],
  ]
}]
```

## 参考链接

- [**vuepress-theme-reco分类和标签**](https://vuepress-theme-reco.recoluan.com/views/1.x/blog.html)
- [**vuepress-theme-reco个人向优化**](https://vuepress-theme-reco.recoluan.com/views/other/reco-optimization.html)
- [**VuePress 博客优化之增加 Vssue 评论功能**](https://github.com/mqyqingfeng/Blog/issues/270)