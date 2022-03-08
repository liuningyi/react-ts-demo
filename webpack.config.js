const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const BundleAnalyzerPlugin =
//   require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const isProduction = process.env.NODE_ENV === "production";

const devConfig = {
  devtool: "inline-source-map",

  devServer: {
    allowedHosts: "all",
    // static: [],
    hot: true,
    port: 9003,
    open: true,
    // proxy:{
    //   "/api":{
    //     changeOrigin:true,  // 只有这个为true，请求接口时ip才会指向target，不然还是当前前端项目的服务
    //     target:"",
    //     pathRewrite:{}
    //   }
    // }
    historyApiFallback: true, // 未命中自动render index.html
  },
};

const config = {
  mode: isProduction ? "production" : "development",

  context: path.join(__dirname, "./src/entries"), // 路径 默认CWD，上下文路径，解析entry和loader

  entry: {
    main: "./main.tsx",
  },
  output: {
    path: path.join(__dirname, "dist"), // 绝对路径
    filename: "[name].bundle.js",
    chunkFilename: "[id].chunk.js",
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        include: path.resolve(__dirname, "./src"),
        use: ["babel-loader", "ts-loader"],
      },
      {
        test: /\.(less|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader, // 此种方式将会css代码独立打包成一个文件
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", "/json"],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: "body", // 将资源注入在body底部，默认是头部
      title: "index.html",
      filename: "index.html",
      template: path.join(__dirname, "templates/main.html"),
      chunks: ["main"], // 只会将main对应的bundle插入到html中
      entry: "main",
    }),
    new MiniCssExtractPlugin(),
    // new BundleAnalyzerPlugin(),
  ],

  optimization: {
    // 代码分割：各模块依赖重复，总有相同或者过大的嘛
    splitChunks: {},
  },
};

module.exports = isProduction ? config : { ...config, ...devConfig };