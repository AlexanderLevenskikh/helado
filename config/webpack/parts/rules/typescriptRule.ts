import path from "path";
import webpack from "webpack";
import {createBabelLoader} from "../loaders/babelLoader";
import {webpackContext} from "../../context";

export const createTypescriptRule = (): webpack.RuleSetRule => {
    return {
        test: /\.[tj]sx?$/,
        use: createBabelLoader({
            configFile: path.resolve(webpackContext, 'babel.config.js')
        }),
    };
}