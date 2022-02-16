import webpack from 'webpack';

interface IArgs {
    url?: boolean;
}

export const createCssLoader = ({ url = true }: IArgs): webpack.RuleSetUseItem => {
    return {
        loader: 'css-loader',
        options: {
            url
        }
    }
}