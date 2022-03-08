// 粗略记录一下这个文件的写法（虽然现在基本已经不用这个了，webapck5可以利用cacheGroups了）
const  webpack  = require("webpack");
const path =require('path');
module.exports = {
  entry: {
      'antd':['antd'],
      'commons':['react','react-dom','react-router','react-router-dom']
  },
  output: {
    filename: "[name].dll.js",
    path: path.resolve(__dirname, "dll"),
    library: "[name]_[hash]",
  },
  plugins: [
    new webpack.DllPlugin({
      name: "[name]",
      path: path.resolve(__dirname, "dll/manifest.json"),
    }),
  ],
};
