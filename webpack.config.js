const path = require('path');
const glob = require('glob');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const entries = glob
  .sync('./components/**/*.js', {ignore: './components/**/*.spec.js'})
  .reduce((allEntries, entry) => {
    return Object.assign(allEntries, {[entry.split('/')[2]]: entry});
  }, {});

entries.index = path.resolve(__dirname, 'components/index.js');

module.exports = function (baseConfig, env, defaultConfig) {
  defaultConfig.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  });

  return defaultConfig;
};

module.exports = {
  mode: 'production',
  entry: entries,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: '@unitedincome/components',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {test: /\.jsx?$/, use: ['babel-loader'], exclude: /node_modules/},
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              data: '@import "./constants/sass/manifest.scss";',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      path: path.resolve(__dirname, 'dist'),
    }),
  ],
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
    'react-router': {
      commonjs: 'react-router',
      commonjs2: 'react-router',
      amd: 'ReactRouter',
      root: 'ReactRouter',
    },
    classnames: {
      commonjs: 'classnames',
      commonjs2: 'classnames',
      amd: 'ClassNames',
      root: 'ClassNames',
    },
    'prop-types': {
      commonjs: 'prop-types',
      commonjs2: 'prop-types',
      amd: 'PropTypes',
      root: 'PropTypes',
    },
    'react-text-mask': {
      commonjs: 'react-text-mask',
      commonjs2: 'react-text-mask',
      amd: 'ReactTextMask',
      root: 'ReactTextMask',
    },
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
};
