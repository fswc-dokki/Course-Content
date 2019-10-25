1. `npm init`
2. Install the bundler `npm i -D webpack webpack-cli` >> TEST:  Try webpack with lodash
3.
4. `npm i -D babel-loader @babel/core @babel/preset-env
5. Add `webpack.config.js` and add to it 
   ```javascript
    const path = require('path');
    module.exports = {
        entry: './src/index.js',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist'),
        },
    }; 
    ```
6. Making development private and hiding entry point in `package.json`
7. Add `src/app.js` to add your desired code and `dist/index.html` to recieve webpack changes
8. add npm script to build webpack
9. Install the transpiler `npm i -D babel-loader @babel/core @babel/preset-env`
10. Add babel configuration to `webpack.config.js` 
    ```javascript
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
    ```
11. add `.babelrc` and make enable the preset
12. install react and react-dom `npm i -s react react-dom @babel/preset-react`
13. add the `preset-react` to `.babelrc`
14. add webpack plugin and loader for html
    1.  `npm i -D html-webpack-plugin html-loader`
    2.  ```javascript
        const HtmlWebPackPlugin = require("html-webpack-plugin");
        module.exports = {
        module: {
            rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                {
                    loader: "html-loader"
                }
                ]
            }
            ]
        },
        plugins: [
            new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
            })
        ]
        };
        ```
15. Install webpack-dev-server  `npm i webpack-dev-server --save-dev`
16. add the start script to the `package.json` : `"start": "webpack-dev-server --open --mode development"`
17. الحمد لله - بصوت بوحة - 😢
