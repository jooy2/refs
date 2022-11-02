import { generateSidebar } from 'vitepress-sidebar'

// Ref: https://vitepress.vuejs.org/config/introduction
export default {
    title: 'Refs',
    description: 'A collection of links to various resources to help you develop your web or app. 웹 또는 앱 개발에 도움이 될만한 다양한 참고자료 링크 모음.',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }],
        ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ],
    themeConfig: {
        sidebar: generateSidebar({
            root: 'docs',
            collapsible: false,
            useTitleFromFileHeading: true,
            capitalizeFirst: true
        }),
        nav: [
            {
                text: 'Blog',
                link: 'https://jootc.com',
            },
        ],
        socialLinks: [{ icon: 'github', link: 'https://github.com/jooy2/refs' }]
    }
}
