const express = require('express');
const path = require('path');
const helmet = require('helmet');
const dotenv = require('dotenv').config();

const port = 7700;

const app = express();

if(process.env.NODE_ENV === 'development'){

  const webpack = require('webpack');
  const config = require('./webpack.config.js');
  const compiler = webpack(config);
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');

  app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: 'bundle.js',
    publicPath: config.output.publicPath,
    stats: { colors: true },
    historyApiFallback: true
  }));

  app.use(webpackHotMiddleware(compiler, {
    path: '/__webpack_hmr',
    heartbeat: 2000
  }));

}

app.use(helmet());
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req, res) => res.render('index'));

app.listen(port, () => console.log(`Listening on port ${port}`));
