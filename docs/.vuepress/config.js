// config.js
module.exports = {
    title: '技术博客',
    description: '技术博客',
    theme: 'reco',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        subSidebar: 'auto',
        type: 'blog',
        authorAvatar: '/avatar.png', // 首页右侧信息栏图像
        mode: 'light', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
        modePicker: true, // 默认 true，false 不显示模式调节按钮，true 则显示
        author: 'linshanzeng',
        // logo: '/avatar.png', // 导航栏左侧的图片
        nav: [
            { text: '首页', link: '/' }, //icon: 'reco-home' 
            { text: '时间轴', link: '/TimeLine/' }, //icon: 'reco-date'
            { text: '关于', link: '/views/about' }, //icon: 'reco-account'
        ],
        sidebar: [ ],
        // 项目开始时间，只填写年份
        startYear: '2022',

        lastUpdated: '上次更新', // string | boolean

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
        vssueConfig: {
            platform: 'github',
            owner: 'linshanzeng',
            repo: 'linshanzeng.github.io',
            autoCreateIssue: true,

            clientId: 'e3f18a1e6913213f2460',
            clientSecret: 'a12bd32dc0cb16982a3453a290d9f363915bf8b4',

            // http://localhost:8080
            // clientId: '9726dc8d42a0ef47d8f1',
            // clientSecret: '0715931b9002823d4ad3492e3ae9d549ac4f3b1f',
        },
        // 博客配置
        blogConfig: {
            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认1
                text: '分类', // 默认文案 “分类”
            },
            tag: {
                location: 3,     // 在导航栏菜单中所占的位置，默认2
                text: '标签'      // 默认文案 “标签”
            },
            socialLinks: [     // 信息栏展示社交信息
                { icon: 'reco-github', link: 'https://github.com/linshanzeng' },
                { icon: 'reco-csdn', link: 'https://blog.csdn.net/zenglinshan' }
            ]
        }
    },
    head: [
        ['link', { rel: 'icon', href: '/avatar.png' }], //favicons，资源放在public文件夹
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ],
    plugins: [
        // ["vuepress-plugin-nuggets-style-copy", {
        //     copyText: "复制代码",
        //     tip: {
        //         content: "复制成功!"
        //     }
        // }],
        // 动态标题
        // ["dynamic-title", {
        //     showIcon: "vuepress/smile.ico",
        //     showText: "(/≧▽≦/)欢迎帅哥美女！",
        //     hideIcon: "vuepress/cry.ico",
        //     hideText: "(●—●)呜呜，不要走嘛！！",
        //     recoverTime: 2000
        // }],
        // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
        ['thirdparty-search', {
            thirdparty: [
                {
                    title: '在Google中搜索', // 搜索链接的前面部分
                    frontUrl: 'https://www.google.com/search?q=', // 搜索链接的后面部分，可选，默认 ''
                }, {
                    title: '在Baidu中搜索',
                    frontUrl: 'https://www.baidu.com/s?wd=',
                },
            ],
        }],
        ['one-click-copy', {
                // 代码块复制按钮
                copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
                copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
                duration: 1000, // prompt message display time.
                showInMobile: false, // whether to display on the mobile side, default: false.
            },
        ],
        ["@mr-hope/reading-time", {

        }]
    ],
}
