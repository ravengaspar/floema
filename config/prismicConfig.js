import fetch from 'node-fetch';
import * as prismic from '@prismicio/client';

const repoName = 'ravengaspar';
const accessToken = process.env.PRISMIC_ACCESS_TOKEN;

const routes = [
	{
		type: 'home',
		path: '/',
	},
	{
		type: 'about',
		path: '/about',
	},
	{
		type: 'collections',
		path: '/collections',
	},
	{
		type: 'product',
		path: '/product',
	},
	{
		type: 'meta',
		path: '/about',
	},
];

export const api = prismic.createClient(repoName, {
	fetch,
	accessToken,
	routes,
});
