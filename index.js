import path from 'path';
import express, { response } from 'express';
import { fileURLToPath } from 'url';
import * as prismic from '@prismicio/client';
import * as prismicH from '@prismicio/helpers';
import { client } from './config/prismicConfig.js';

import fetch from 'node-fetch';

const app = express();
const port = process.env.PORT || 3000;

// Set PUG as templating engine
app.set('view engine', 'pug');
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'views')));

const initApi = (req) => {
	return prismic.createClient(process.env.PRISMIC_ENDPOINT, {
		accessToken: process.env.PROCESS_ACCESS_TOKEN,
		req,
		fetch,
	});
};

const linkResolver = (doc) => {
	if (doc.type === '/') {
		return '/';
	} else if (doc.type === 'about') {
		return '/about';
	} else if (doc.type === 'product') {
		return '/products/' + doc.uid;
	} else if (doc.type === 'collection') {
		return '/collection/' + doc.uid;
	}

	// Default to homepage
	return '/';
};

app.use((req, res, next) => {
	res.locals.ctx = {
		prismicH,
	};
	res.locals.link = linkResolver;
	next();
});

app.get('/about', async (req, res) => {
	return await client
		.get({
			predicates: prismic.predicate.any('document.type', ['about', 'meta']),
		})
		.then((response) => {
			const { results } = response;
			const [about, meta] = results;
			res.render('pages/about', {
				about,
				meta,
			});
		});
});

app.get('/collection', async (req, res) => {
	res.render('pages/collection');
});

app.get('/detail:uid', async (req, res) => {
	res.render('pages/detail');
});

// Listen to application port.
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
