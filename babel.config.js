module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript',
    ],
    sourceMaps: true,
    plugins: [
        ["transform-imports", {
            lodash: {
                "transform": "lodash/${member}",
                "preventFullImport": true
            }
        }],
    ]
};