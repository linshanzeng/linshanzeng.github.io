const path = require("path");

module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: '个人博客',
    description: '个人博客',

    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        // 导航栏
        navbar: [
            // NavbarItem
            {
                text: '指南',
                link: '/foo/',
            },
            // NavbarGroup
            {
                text: '参考',
                children: [ 
                    {
                        text: 'VuePress',
                        link: '/foo/',
                    },
                    {
                        text: '命令行接口',
                        link: '/bar/'
                    },
                ],
            },
            // 嵌套 Group - 最大深度为 2
            {
                text: '插件',
                children: [
                    {
                        text: '常用功能',
                        children: [ 
                            { text: 'back-to-top', link: '/foo/', },
                            { text: 'container', link: '/foo/', },
                        ]
                    }
                ]
            }
        ],
        logo: 'https://vuejs.org/images/logo.png',
        // 项目仓库的 URL
        repo: 'linshanzeng/linshanzeng.github.io',
        // 侧边栏
        sidebar: [
            // 所有页面会使用相同的侧边栏
            // SidebarItem
            {
                text: 'VuePress参考',
                link: '/foo/',
                collapsible: true,
                children: [
                    // SiderbarItem
                    {
                        text: 'github',
                        link: 'https://github.com',
                        children: [],
                    },
                ],
            },
            // 不同子路径下的页面会使用不同的侧边栏
            {
                '/foo/': [
                    {
                        text: '打包工具参考',
                        children: [
                            { text: 'Vite', link: '/foo/' },
                            { text: 'Webpack', link: '/foo/' },
                        ]
                    },
                ],
            },
        ],
        // 设置根据页面标题自动生成的侧边栏的最大深度
        sidebarDepth: 2,
        // 编辑此页 链接的文字
        editLinkText: '在 GitHub 上编辑此页',
        //文档源文件的仓库 URL
        docsRepo: 'https://github.com/linshanzeng/linshanzeng.github.io',
        // 文档源文件存放在仓库中的目录名
        docsDir: 'docs',
        // 最近更新时间戳 标签的文字
        lastUpdatedText: '上次更新: ',
        // 贡献者列表 标签的文字
        conibutorsText: '贡献者: ',
        // 404 页面的提示信息
        notFound: ['没找到该网页', '你可能输错了', '要不换个链接重试下'],
        // 404 页面中 返回首页 链接的文字
        backToHome: '返回首页',
        // 切换侧边栏按钮的标题文字
        toggleSidebar: '切换日/夜间模式'
    },
    plugins: [
        [
            // 搜索框
            '@vuepress/plugin-search',
            {
                locales: {
                    '/': {
                        //搜索框中的文字
                        placeholder: '搜索',
                    },
                },
                isSearchable: (page) => page.path !== '/',
            }
        ]
    ]
}