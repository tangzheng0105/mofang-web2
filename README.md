技术栈：react+antd+axios+postcss-px-to-viewport
## 1.创建项目
`npx create-react-app project-name`

## 2.安装antd
`npm install --save antd-mobile `

## 3.封装axios

## 4.移动端宽度适配
### 4.0安装postcss-px-to-viewport
### 4.1 webpack配置文件
有两种方式，
1.安装[eact-app-rewired](https://github.com/timarney/react-app-rewired)插件，可以通过webpack-overrides.js覆盖webpack配置文件
2.运行`npm run eject`直接把配置文件暴露出来
这里选择第二种，简单粗暴
然后更改配置文件，具体参考[博客](https://www.i4k.xyz/article/weixin_44461275/122490874)

# RoadMap
### redux状态管理
目录结构
```
├─store
│  │ index.ts
│  │
│  ├─actions
│  │   user.ts
│  │
│  └─reducers
│      index.ts
│      user.ts

```
###  react-router 路由管理
### eslint + prettier 统一开发规范
### 支持自定义 webpack 配置
通过 `customize-cra` 暴露 `webpack` 配置的`config-overrides.js`文件，使我们可以不用 `eject` 的方式就能在这里覆盖重写 `webpack` 配置，目前已支持几十种相关配置自定义，具体可查看[customize-cra api docs](https://link.juejin.cn?target=undefined)。
### 配置多环境变量


附：
[github repository](https://github.com/tangzheng0105/mofang-web2)

参考:
[开箱即用的 react 移动端脚手架
](https://juejin.cn/post/6850037278912774157#heading-1)
