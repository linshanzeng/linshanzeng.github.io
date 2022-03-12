---
title: 搭建VuePress博客
date: 2022-03-11 01:00:00
categories:
 - 前端
tags:
 - 实战
readingTime: { minutes: 3, words: 1500 }
---

搭建VuePress博客项目，通过GitHub Actions实现自动化部署，使用GitHub Pages访问网页

<!-- more -->

## 1.创建并进入一个新目录

```sh
# 与GitHub用户同名
mkdir linshanzeng.github.io
cd linshanzeng.github.io
```

## 2.初始化项目

```sh
git init
npm init
```

## 3.将 VuePress 安装为本地依赖

```sh
# 查看npm源地址
npm config get registry
# 永久使用淘宝源
npm config set registry https://registry.npmmirror.com
# 将VuePress安装为本地依赖
npm install -D vuepress
```

## 4.在 package.json 中添加一些 scripts

```json
{
    "scripts": {
        "dev": "vuepress dev docs --open --host 127.0.0.1 --port 8080",
        "docs:build": "vuepress build docs"
    }
}
```

## 5.将默认的临时目录和缓存目录添加到 .gitignore 文件中

```sh
echo 'node_modules' >> .gitignore
echo '.temp' >> .gitignore
echo '.cache' >> .gitignore
```

## 6.创建你的第一篇文档

```sh
mkdir docs
echo '# Hello VuePress' > docs/README.md
```

## 7.在本地启动服务器来开发你的文档网站

```sh
npm run dev
```

## 8.创建并修改配置文件

```sh
mkdir docs/.vuepress
touch docs/.vuepress/config.js
```

```js
// config.js
module.exports = {
    title: 'TypeScript4 文档',
    description: 'TypeScript4 最新官方文档翻译'
}
```

## 9.添加导航栏

```js
// config.js
module.exports = {
    title: '...',
    description: '...',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { 
                text: '冴羽的 JavaScript 博客', 
                items: [
                    { text: 'Github', link: 'https://github.com/mqyqingfeng' },
                    { text: '掘金', link: 'https://juejin.cn/user/712139234359182/posts' }
                ]
            }
        ]
    }
}
```

## 10.添加侧边栏

```sh
mkdir docs/handbook
touch docs/handbook/ConditionalTypes.md
touch docs/handbook/Generics.md
```

```js
// config.js
module.exports = {
    themeConfig: {
        nav: [...],
        sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "学前必读", path: "/" }
                ]
            },
            {
                title: "基础学习",
                path: '/handbook/ConditionalTypes',
                collapsable: false, // 不折叠
                children: [
                    { title: "条件类型", path: "/handbook/ConditionalTypes" },
                    { title: "泛型", path: "/handbook/Generics" }
                ],
            }
        ]
    }
}
```

## 11.更换主题

```sh
npm install vuepress-theme-reco --save-dev
```

```js
// config.js
module.exports = {
    // ...
    theme: 'reco'
    // ...
} 
```

## 12.添加文章信息

docs/handbook/ConditionalTypes.md

```md
---
title: 条件类型
author: 冴羽
date: '2021-12-12'
---

## ss
```

## 13.设置语言

```js
// config.js
module.exports = {
    // ...
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    // ...
}  
```

## 14.开启目录结构

```js
module.exports = {
//...
themeConfig: {
    subSidebar: 'auto'
}
//...
}
```

## 15.修改主题颜色

```sh
mkdir docs/.vuepress/styles
touch docs/.vuepress/styles/palette.styl
```

```css
// palette.styl
$accentColor = #3178c6
```

## 16.首次提交git

```sh
git add .
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:linshanzeng/linshanzeng.github.io.git
git push -u origin main
```

## 17.新增提交git脚本

```sh
touch dp.sh
```

```sh
#!/bin/sh 
echo '添加'
git add .
echo 'commit'
git commit -m 'deploy'
echo '推送中'
git push origin main
```

## 18.新增GitHub Actions脚本

```sh
mkdir -p .github/workflows
touch .github/workflows/docs.yml
```

```yml
#docs.yml

# name 可以自定义
name: Deploy GitHub Pages

# 触发条件：在 push 到 main/master 分支后，新的 Github 项目 应该都是 main，而之前的项目一般都是 master
on:
  push:
    branches:
      - main

# 任务
jobs:
  build-and-deploy:
    # 服务器环境：最新版 Ubuntu
    runs-on: ubuntu-latest
    steps:
      # 拉取代码
      - name: Checkout
        uses: actions/checkout@v2
        with:
          persist-credentials: false

      # 生成静态文件
      - name: Build
        run: yarn install && yarn run docs:build

      # 查看 workflow 的文档来获取更多信息
      # @see https://github.com/crazy-max/ghaction-github-pages
      - name: Deploy to GitHub Pages
        uses: crazy-max/ghaction-github-pages@v2
        with:
          # 部署到 gh-pages 分支
          target_branch: gh-pages
          # 部署目录为 VuePress 的默认输出目录
          build_dir: docs/.vuepress/dist
        env:
          # @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret
          GITHUB_TOKEN: ${{ secrets.ACCESS_TOKEN }}

```

## 19.新增空分支，并上传

```sh
sh dp.sh
git checkout --orphan gh-pages
git rm -rf .
rm -rf *
echo '# new branch' >> README.md
git add README.md
git commit -m 'new branch'
git push origin gh-pages
```

## 20.在GitHub上新增Token和Secrets

```text
Settings -> Developer settings -> Personal access tokens -> Generate new token -> 复制token
Settings -> Secrets -> New repository secret -> 名称为ACCESS_TOKEN
```

## 参考链接

- [**vuepress快速上手**](https://v2.vuepress.vuejs.org/zh/guide/getting-started.html)
- [**一篇带你用 VuePress + Github Pages 搭建博客**](https://github.com/mqyqingfeng/Blog/issues/235)
- [**vuepress GitHub Actions**](https://v2.vuepress.vuejs.org/zh/guide/deployment.html#github-pages)
- [**Vuepress + GitHub Actions 实现博客自动部署！**](https://juejin.cn/post/7000572105154625567)
