## 批量执行npm脚本
npm i npm-run-all -g
## nodemon node监听器，可以监听server.js文件变化，自动启动服务
`
  "scripts": {
    "dev:start": "node build/server.js",
    "dev:build": "webpack --config webpack.config.js --watch"
  }
  先执行npm run dev:build,编译
  再执行npm run dev:start 启动服务


  "dev": "npm-run-all --parallel dev:**",
  批量并行执行dev:开头的所有命令


  @babel/plugin-proposal-class-properties
  类的属性，高级语法
  
`

