import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { CleanWebpackPlugin } from 'clean-webpack-plugin';

import { merge } from 'webpack-merge';
import config from './webpack.config';

export default merge(config, {
	mode: 'production',

	output: {
		path: path.join(__dirname, 'public'),
	},

	plugins: [new CleanWebpackPlugin()],
});
