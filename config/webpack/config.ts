import path from 'path';
import webpack from 'webpack';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {VanillaExtractPlugin} from "@vanilla-extract/webpack-plugin";
import {webpackContext} from "./context";
import HtmlWebpackPlugin from "html-webpack-plugin";
import Server from "webpack-dev-server";
import {createVanillaExtractRule} from "./parts/rules/vanillaExtractRule";
import {createTypescriptRule} from "./parts/rules/typescriptRule";

enum WebpackMode {
    isProduction = 1,
    isWds = 2,
}

interface IArgs {
    mode?: number;
}

const webpackConfig = (args: IArgs): webpack.Configuration | { devServer: Server.Configuration } => {
    const { mode = 1 } = args;
    const isProduction = mode & WebpackMode.isProduction;
    const isWds = mode & WebpackMode.isWds;

    let config: webpack.Configuration | { devServer: Server.Configuration } = {
        mode: isProduction ? 'production' : 'development',
        entry: './src/index.tsx',
        output: {
            filename: 'main.js',
            path: path.resolve(webpackContext, 'dist'),
        },
        module: {
            rules: [
                createTypescriptRule(),
                createVanillaExtractRule(),
            ]
        },
        plugins: [
            new VanillaExtractPlugin(),
            new MiniCssExtractPlugin(),
            new HtmlWebpackPlugin({
                title: 'Helado',
                template: path.resolve(webpackContext, 'static/template/index.html'),
                inject: true,
            })
        ],
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            alias: {
                'root': path.resolve(webpackContext, 'src'),
            },
        },
    }

    if (isWds) {
        config = {
            ...config,
            devServer: {
                static: {
                    directory: path.resolve(webpackContext, 'dist'),
                },
                compress: true,
                port: 9000,
            }
        }
    }

    return config;
}

export default webpackConfig;