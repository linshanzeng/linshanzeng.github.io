import { defineClientAppEnhance } from '@vuepress/client'

function integrateGitalk(router) {
    const linkGitalk = document.createElement('link');
    linkGitalk.href = 'https://unpkg.com/gitalk/dist/gitalk.css';
    linkGitalk.rel = 'stylesheet';
    const scriptGitalk = document.createElement('script');
    scriptGitalk.src = 'https://unpkg.com/gitalk/dist/gitalk.min.js';
    document.head.appendChild(linkGitalk);
    document.head.appendChild(scriptGitalk)

    router.afterEach((to, from) => {
        if (to.path === from.path && to.path !== '/')
            return
        if (scriptGitalk.onload) {
            setTimeout(() => {
                createGitalk(to.path)
            }, 500)
        } else {
            scriptGitalk.onload = () => {
                createGitalk(to.path)
            }
        }
    })
}

function createGitalk(path) {
    const $page = document.querySelector('.page')
    console.log("$page", path);
    // gitalk容器
    let container = document.getElementById('gitalk-container');
    //container存在删除
    if (container) {
        container.parentNode.removeChild(container)
    }
    container = document.createElement('div')
    container.id = 'gitalk-container'
    container.classList.add('content')
    if ($page) {
        $page.appendChild(container);
        if (typeof Gitalk !== 'undefined' && Gitalk instanceof Function) {
            renderGitalk(path)
        }
    }
}

function renderGitalk(fullPath) {
    const gitalk = new Gitalk({
        clientID: 'e3f18a1e6913213f2460',
        clientSecret: 'e0adfeb32809259e9f3f7f4e0c1e0eeb05fd00af',
        repo: 'linshanzeng.github.io',
        owner: 'linshanzeng',
        admin: ['linshanzeng'],
        id: fullPath.slice(1, -5),
        distractionFreeMode: false,
        language: 'zh-CN',
    });
    gitalk.render('gitalk-container');
}

export default defineClientAppEnhance(({ app, router, siteData }) => {
    try {
        document && integrateGitalk(router)
    } catch (e) {
        console.error('e', e.message)
    }
})