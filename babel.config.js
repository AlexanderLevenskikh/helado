module.exports = function(api) {
    api.cache(true);
    const presets = [
        ["@babel/preset-env", {
            useBuiltIns: "entry",
            corejs: 3,
        }],
        "@babel/typescript",
        "solid",
    ];

    const plugins = [];

    return {
        presets,
        plugins,
    };
};
