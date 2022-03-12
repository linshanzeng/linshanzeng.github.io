// config.js
module.exports = {
    title: '个人博客',
    description: '个人博客',
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
        authorAvatar: '/avatar.png',
        mode: 'light', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
        modePicker: true, // 默认 true，false 不显示模式调节按钮，true 则显示
        author: 'linshanzeng',
        nav: [
            { text: '首页', link: '/' },
            { text: '时间轴', link: '/TimeLine/' },
        ],
        sidebar: [ ],
        // 项目开始时间，只填写年份
        startYear: '2022',
    },
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    plugins: [
        ["vuepress-plugin-nuggets-style-copy", {
            copyText: "复制代码",
            tip: {
                content: "复制成功!"
            }
        }],
        // 动态标题
        ["dynamic-title", {
            showIcon: "vuepress/smile.ico",
            showText: "(/≧▽≦/)欢迎帅哥美女！",
            hideIcon: "vuepress/cry.ico",
            hideText: "(●—●)呜呜，不要走嘛！！",
            recoverTime: 2000
        }],
    ],
}
