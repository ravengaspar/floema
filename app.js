import path from 'path'
import express from 'express'

import errorHandler from 'errorhandler'
import bodyParser from 'body-parser'
import methodOverride from 'method-override'
import logger from 'morgan'

import { fileURLToPath } from 'url'

import * as prismicH from '@prismicio/helpers'
import { api } from './config/prismicConfig.js'

import { UAParser } from 'ua-parser-js'

const app = express()
const port = process.env.PORT || 3000
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Set PUG as templating engine
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(errorHandler())
app.use(methodOverride())

app.use(express.static(path.join(__dirname, 'views')))
app.use(express.static(path.join(__dirname, 'public')))

const handleLinkResolver = doc => {
	if (doc.type === 'product') {
		return `/detail/${doc.slug}`
	}
	if (doc.type === 'about') {
		return '/about'
	}

	if (doc.type === 'collections') {
		return '/collections'
	}

	return '/'
}

app.use((req, res, next) => {
	const ua = UAParser(req.headers['user-agent'])

	res.locals.isDesktop = ua.device.type === undefined
	res.locals.isPhone = ua.device.type === 'mobile'
	res.locals.isTablet = ua.device.type === 'tablet'

	res.locals.Link = handleLinkResolver

	res.locals.prismicH = prismicH

	res.locals.Numbers = index => {
		return index == 0 ? 'One' : index == 1 ? 'Two' : index == 2 ? 'Three' : index == 3 ? 'Four' : ''
	}

	next()
})

const handleRequest = async () => {
	const about = await api.getSingle('about')
	const home = await api.getSingle('home')
	const meta = await api.getSingle('meta')
	const preloader = await api.getSingle('preloader')
	const navigation = await api.getSingle('navigation')

	const collections = await api.getAllByType('collection', {
		fetchLinks: 'product.image',
	})

	const assets = []

	home.data.gallery.forEach(item => assets.push(item.image.url))

	about.data.gallery.forEach(item => assets.push(item.image.url))

	about.data.body.forEach(section => {
		if (section.slice_type === 'gallery') {
			section.items.forEach(item => assets.push(item.image.url))
		}
	})

	collections.forEach(collection => {
		collection.data.products.forEach(item => {
			assets.push(item.products_product.data.image.url)
		})
	})

	return {
		assets,
		meta,
		home,
		collections,
		about,
		navigation,
		preloader,
	}
}

// Query for the root path.
app.get('/', async (req, res) => {
	const defaults = await handleRequest()

	res.render('pages/home', {
		...defaults,
	})
})

app.get('/about', async (req, res) => {
	const defaults = await handleRequest()

	res.render('pages/about', {
		...defaults,
	})
})

app.get('/collections', async (req, res) => {
	const defaults = await handleRequest()

	// const collections = await api.getAllByType('collection', {
	// 	fetchLinks: 'product.image',
	// })

	res.render('pages/collections', {
		...defaults,
	})
})

app.get('/detail/:uid', async (req, res) => {
	const defaults = await handleRequest()

	const product = await api.getByUID('product', req.params.uid, {
		fetchLinks: 'collection.title',
	})

	res.render('pages/detail', {
		...defaults,
		product,
	})
})

// Listen to application port.
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
