---
title: 代码集合
date: 2022-03-12 02:00:00
categories:
 - 其它
tags:
 - 我的收藏
---

收集各种常用的代码、脚本、命令

<!-- more -->

## 1.GitHub绑定远程库

```sh
# 第1种，直接克隆
git clone git@github.com:linshanzeng/sss.git

# 第2种，本地还没有初始化Git库，先初始化，然后再关联提交
echo "# sss" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:linshanzeng/sss.git
git push -u origin main

# 第3种，本地已经初始化Git库，直接关联提交
git remote add origin git@github.com:linshanzeng/sss.git
git branch -M main
git push -u origin main
```
