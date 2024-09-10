import { generateSidebar } from 'vitepress-sidebar';
import { defineConfig } from 'vitepress';
import { generateI18nLocale, generateI18nSearch } from 'vitepress-i18n';
import { name, description, repository, homepage } from '../../package.json';

const capitalizeFirst = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const defaultLocale: string = 'ko';
const defineSupportLocales = [{ label: defaultLocale, translateLocale: defaultLocale }];

const editLinkPattern = 'https://github.com/jooy2/refs/edit/master/docs/:path';

// Ref: https://vitepress.vuejs.org/config/introduction
export default defineConfig({
	title: capitalizeFirst(name),
	lastUpdated: true,
	description,
	outDir: '../dist',
	cleanUrls: true,
	metaChunk: true,
	rewrites: {
		'ko/:rest*': ':rest*'
	},
	head: [
		['link', { rel: 'icon', href: '/logo.png' }],
		['link', { rel: 'shortcut icon', href: '/favicon.ico' }]
	],
	sitemap: {
		hostname: homepage
	},
	themeConfig: {
		sidebar: generateSidebar({
			documentRootPath: 'docs',
			collapseDepth: 2,
			useTitleFromFileHeading: true,
			capitalizeFirst: true
		}),
		search: generateI18nSearch({
			defineLocales: defineSupportLocales,
			rootLocale: defaultLocale,
			provider: 'local'
		}),
		nav: [
			{
				text: 'Blog',
				link: 'https://jootc.com'
			}
		],
		socialLinks: [{ icon: 'github', link: repository.url.replace('.git', '') }],
		footer: {
			message: 'Released under the MIT License',
			copyright: '© <a href="https://jooy2.com">Jooy2</a>'
		},
		locales: generateI18nLocale({
			label: {
				ko: '한국어'
			},
			lang: {
				ko: 'ko-KR'
			},
			defineLocales: defineSupportLocales,
			rootLocale: defaultLocale,
			editLinkPattern
		})
	}
});
