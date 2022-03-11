function integrateGitalk (router) {
    const linkGitalk = document.createElement('link');
    linkGitalk.href = 'https://unpkg.com/gitalk/dist/gitalk.css';
    linkGitalk.rel = 'stylesheet';
    document.body.appendChild(linkGitalk);
    const scriptGitalk = document.createElement('script');
    scriptGitalk.src = 'https://unpkg.com/gitalk/dist/gitalk.min.js';
    document.body.appendChild(scriptGitalk);
    var path = '';

    router.afterEach((to) => {
        if (scriptGitalk.onload) {
            setTimeout(loadGitalk, 5, to)
        } else {
            scriptGitalk.onload = () => {
                loadGitalk(to.fullPath);
            }
        }
    });

    function loadGitalk (to) {
        if (to.path !== path) {
            path = to.path;
            let commentsContainer = document.getElementById('gitalk-container');
            const $page = document.querySelector('.page');
            console.log($page);
            if (commentsContainer && $page) {
                $page.removeChild(commentsContainer)
            }
            commentsContainer = document.createElement('div');
            commentsContainer.id = 'gitalk-container';
            commentsContainer.classList.add('content');
            if ($page) {
                $page.appendChild(commentsContainer);
                if (typeof Gitalk !== 'undefined' && Gitalk instanceof Function) {
                    console.log("评论正在加载中");
                    renderGitalk();
                }
            }
        }
    }
    function renderGitalk () {
        // 如果url路径有中文则使用decodeURIComponent，否则可以直接使用location.pathname
        console.log(location.pathname);
        const path = decodeURIComponent(location.pathname)
        const gitalk = new Gitalk({
            clientID: 'e3f18a1e6913213f2460',
            clientSecret: 'e0adfeb32809259e9f3f7f4e0c1e0eeb05fd00af',
            repo: 'linshanzeng.github.io',
            owner: 'linshanzeng',
            admin: ['linshanzeng'],
            title: path.split('/').pop() || path,
            id: path,      // 唯一，并且长度小于50
            language: 'zh-CN',
        });
        gitalk.render('gitalk-container');
    }
    window.loadGitalk = loadGitalk;
}

export default ({ Vue, options, router }) => {
    try {
        document && integrateGitalk(router)
    } catch (e) {
        console.error(e.message)
    }
}