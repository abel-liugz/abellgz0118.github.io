const {defaultTheme} = require('@vuepress/theme-default')
const {searchPlugin} = require('@vuepress/plugin-search')

module.exports = {
    title: 'Abel\'s Web',
    description: 'My tech blog',
    head: [
        ['link', {rel: 'icon', href: '/images/JAVA.png'}],
        ['link', {rel: 'stylesheet', href: '/css/style.css'}],
        [
            'script',
            {},
            `var _hmt = _hmt || [];
            (function () {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?83bdeee64d1e0dd56ad9866e83f63257";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
            })();`
        ]
    ],
    theme: defaultTheme(
        {
            logo: '/images/JAVA.png',
            logoDark: '/images/java-2.png',
            repo: 'https://gitee.com/liu-guanzheng/myweb.git',
            navbar: require('./navbar'),
            sidebar: 'auto',
            collapsible: true,
            lastUpdated: true,
            editLink: false,

        }
    ),
    plugins: [
        searchPlugin({
            locales: {
                '/': {
                    placeholder: '搜索'
                }
            },
            isSearchable: (page) => page.path !== '/'
        }),
    ]
}





