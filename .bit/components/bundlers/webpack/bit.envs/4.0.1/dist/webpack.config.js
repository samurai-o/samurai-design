'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var path = require('path');
var babelPresetEs2015 = require('babel-preset-es2015');
var babelPresetReact = require('babel-preset-react');
var stage0 = require('babel-preset-stage-0');

//indirect 
require('babel-loader');
require('babel-core');
require('style-loader');
require('css-loader');
require('sass-loader');
require('node-sass');
require('json-loader');
require('url-loader');
require('svg-inline-loader');

var nodeExternals = require('webpack-node-externals');
var PACKAGE_TYPE = 'umd';

var configure = function configure() {
    return {
        output: {
            filename: '[name].js',
            libraryTarget: PACKAGE_TYPE
        },
        module: {
            rules: [{
                test: /.(js|jsx)$/,
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    presets: [babelPresetReact, babelPresetEs2015, stage0]
                }
            }, {
                test: /\.css$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader", // translates CSS into CommonJS
                    options: {
                        import: true,
                        modules: false
                    }
                }]
            }, {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader", // translates CSS into CommonJS
                    options: {
                        import: true,
                        modules: false
                    }
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },

            // "url" loader works just like "file" loader but it also embeds
            // assets smaller than specified size as data URLs to avoid requests.
            {
                test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: 'static/media/[name].[hash:8].[ext]'
                }
            }, {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }]
        },

        externals: [nodeExternals({
            importType: PACKAGE_TYPE
        })]
    };
};

exports.default = configure;
module.exports = exports['default'];

//# sourceMappingURL=webpack.config.js.map