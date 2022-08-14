const getConfig = require('vuepress-bar');

const { nav, sidebar } = getConfig(`${__dirname}/..`, {
    // See https://github.com/ozum/vuepress-bar
    maxLevel: 5,
});

module.exports = {
    title: 'Refs',
    description: '웹 또는 앱 개발에 도움이 될만한 다양한 참고자료 링크 모음',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }],
        ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ],
    themeConfig: {
        sidebar,
        nav: [
            {
                text: 'GitHub',
                link: 'https://github.com/jooy2/refs',
            },
            ...nav,
        ],
        contributors: false,
    },
};
