---
lang: zh-CN
description: 个人博客搭建
---

# 个人博客搭建

[[toc]]

## 搭建步骤

1. 创建并进入一个新目录

    ```sh
    mkdir linshanzeng.github.io
    cd linshanzeng.github.io
    ```

2. 初始化项目

    ```sh
    git init
    npm init
    ```

3. 将 VuePress 安装为本地依赖

    ```sh
    npm install -D vuepress@next
    ```

4. 在 package.json 中添加一些 scripts

    ```json
    {
        "scripts": {
            "dev": "vuepress dev docs --open --host 127.0.0.1 --port 8080",
            "build": "vuepress build docs"
        }
    }
    ```

5. 将默认的临时目录和缓存目录添加到 .gitignore 文件中

    ```sh
    echo 'node_modules' >> .gitignore
    echo '.temp' >> .gitignore
    echo '.cache' >> .gitignore
    ```

6. 创建你的第一篇文档

    ```sh
    mkdir docs
    echo '# Hello VuePress' > docs/README.md
    ```

7. 在本地启动服务器来开发你的文档网站

    ```sh
    npm run dev
    ```

8. 创配置文件config.js

    ```sh
    mkdir -p docs/.vuepress
    touch docs/.vuepress/config.js
    ```

    ```js
    module.exports = {
        // 站点配置
        lang: 'zh-CN',
        title: '个人博客',
        description: '个人博客',

        // 主题和它的配置
        theme: '@vuepress/theme-default',
        themeConfig: {
            logo: 'https://vuejs.org/images/logo.png',
        },
    }
    ```

9. 上传GitHub

    ```sh
    git checkout --orphan gh-pages
    git rm -rf .
    rm -rf *
    echo '# new branch' >> README.md
    git add README.md
    git commit -m 'new branch'
    git push origin gh-pages

    git remote add origin git@github.com:linshanzeng/linshanzeng.github.io.git
    git branch -M main
    git push -u origin main

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

10. GitHub Pages+GitHub Actions部署

    ```sh
    mkdir -p .github/workflows
    touch .github/workflows/docs.yml
    ```

    ```yml
    # docs.yml
    on:
    # 每当 push 到 main 分支时触发部署
    push:
        branches: [main]
    # 手动触发部署
    workflow_dispatch:

    jobs:
    docs:
        runs-on: ubuntu-latest

        steps:
        - uses: actions/checkout@v2
            with:
            # “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录
            fetch-depth: 0

        - name: Setup Node.js
            uses: actions/setup-node@v1
            with:
            # 选择要使用的 node 版本
            node-version: '14'

        # 缓存 node_modules
        - name: Cache dependencies
            uses: actions/cache@v2
            id: yarn-cache
            with:
            path: |
                **/node_modules
            key: ${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}
            restore-keys: |
                ${{ runner.os }}-yarn-

        # 如果缓存没有命中，安装依赖
        - name: Install dependencies
            if: steps.yarn-cache.outputs.cache-hit != 'true'
            run: yarn --frozen-lockfile

        # 运行构建脚本
        - name: Build VuePress site
            run: yarn docs:build

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
            GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    ```

## 参考链接

- [**VuePress**](https://v2.vuepress.vuejs.org/zh/guide)

### VuePress

- [**VuePress参考**](https://v2.vuepress.vuejs.org/zh/reference/cli.html)
- [**社区主题**](https://www.npmjs.com/search?q=keywords:vuepress-theme)
- [**社区插件**](https://www.npmjs.com/search?q=keywords:vuepress-plugin)
- [**官方插件**](https://www.npmjs.com/search?q=%40vuepress%20keywords%3Aplugin)

### Markdown

- [**在GitHub上编写**](https://docs.github.com/cn/get-started/writing-on-github)
- [**Markdown Rules**](https://github.com/DavidAnson/markdownlint/blob/v0.25.1/doc/Rules.md)
- [**emoji-cheat-sheet**](https://github.com/ikatyang/emoji-cheat-sheet)

### Git

- [**开始使用Git**](https://docs.github.com/cn/get-started/getting-started-with-git)
- [**Git小抄**](https://training.github.com/downloads/zh_CN/github-git-cheat-sheet/)
- [**Pro Git**](https://git-scm.com/book/zh/v2)
- [**GitHub Page**](https://pages.github.com/)