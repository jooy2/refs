import { generateSidebar } from 'vitepress-sidebar';
import { name, description, repository } from '../../package.json';

const capitalizeFirst = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

// Ref: https://vitepress.vuejs.org/config/introduction
export default {
	title: capitalizeFirst(name),
	description,
	head: [
		['link', { rel: 'icon', href: '/logo.png' }],
		['link', { rel: 'shortcut icon', href: '/favicon.ico' }]
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
				link: 'https://jootc.com'
			}
		],
		socialLinks: [{ icon: 'github', link: repository.url.replace('.git', '') }]
	}
};