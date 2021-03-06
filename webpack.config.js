const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, 'umd'),
        filename: 'main.js',
        library: 'Monaco XSD Code Completion',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            // {
            //     test: /\.worker\.ts$/,
            //     use: { loader: 'worker-loader' },
            // },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        configFile: 'tsconfig.umd.json',
                    },
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
}
