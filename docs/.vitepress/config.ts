import { defineConfig, UserConfig } from 'vitepress';
import { withSidebar } from 'vitepress-sidebar';
import { withI18n } from 'vitepress-i18n';
import type { VitePressSidebarOptions } from 'vitepress-sidebar/dist/types';
import type { VitePressI18nOptions } from 'vitepress-i18n/dist/types';
import { name, description, repository, homepage } from '../../package.json';

const capitalizeFirst = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const defaultLocale: string = 'ko';

const vitePressI18nConfigs: VitePressI18nOptions = {
	locales: [defaultLocale],
	rootLocale: defaultLocale,
	searchProvider: 'local',
	description: {
		ko: '웹 또는 앱 개발에 도움이 될만한 다양한 참고자료 링크 모음.',
		en: description
	}
};

const vitePressSidebarConfigs: VitePressSidebarOptions = {
	documentRootPath: 'docs',
	collapseDepth: 2,
	useTitleFromFileHeading: true,
	capitalizeFirst: true
};

// Ref: https://vitepress.vuejs.org/config/introduction
const vitePressConfigs: UserConfig = {
	title: capitalizeFirst(name),
	lastUpdated: true,
	outDir: '../dist',
	cleanUrls: true,
	metaChunk: true,
	rewrites: {
		'ko/:rest*': ':rest*'
	},
	head: [
		['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/logo-32.png' }],
		['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/logo-16.png' }],
		['link', { rel: 'shortcut icon', href: '/favicon.ico' }]
	],
	sitemap: {
		hostname: homepage
	},
	themeConfig: {
		logo: { src: '/logo-32.png', width: 24, height: 24 },
		editLink: {
			pattern: 'https://github.com/jooy2/refs/edit/master/docs/:path'
		},
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
		}
	}
};

export default defineConfig(
	withSidebar(withI18n(vitePressConfigs, vitePressI18nConfigs), vitePressSidebarConfigs)
);
