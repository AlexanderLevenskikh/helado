import webpack from 'webpack';

interface IArgs {
    configFile: string;
}

export const createBabelLoader = ({ configFile }: IArgs): webpack.RuleSetUseItem => {
    return {
        loader: 'babel-loader',
        options: {
            cacheDirectory: true,
            configFile,
        },
    }
}