npm run docs:build
​
# 进入生成的文件夹
cd docs/.vuepress/dist

​git init
git add -A
git commit -m 'deploy'
​
# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:lgf196/ant-simple-pro-document.git master:gh-pages

cd -