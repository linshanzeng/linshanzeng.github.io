#!/bin/sh
echo '添加'
git add .
echo 'commit'
git commit -m 'deploy'
echo '推送中'
git push origin main