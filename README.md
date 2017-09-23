# vue-shop

> Vue全家桶 + Express + MongoDB 开发的简单商城

> [预览地址](http://39.108.141.131/vueshop/#/)


## 部署

> 部署在阿里云  
> 采用Nginx进行代理转发
> PM2做守护进程



<p style="font-size: 24px; font-weight: bold;">  
    <h2 style="font-size: 26px; color: red;">注意存在的问题</h2>

    由于域名没有备案，所以用ip访问，防止被阿里云封   
    由于没有使用Https[国内的免费证书都要备案域名]  
    Chrome，Firefox等遇到 &lt;input type="password"&gt; 会报不安全  
    并非代码本身有问题  
</p>
  


## 技术栈
* **Vue2.3**: [ 前端框架 ]
* **Vuex**: [ 状态管理,组件通信 ] 
* **Vue-router**: [ 配置路由，组件切换 ]
* **Vue-lazyload**: [ 图片懒加载 ]
* **Vue-infinite-scroll**: [ 滚动加载 ]
* **Vue-pull-to-refresh**: [ 自己开发的下拉刷新 ]
* **ES6/7**: [ JS版本 ]
* **Webpack**: [ 模块化处理，编译打包 ]
* **Express**: [ 服务器 ]
* **Mongoose**: [ 连接MongoDB数据库 ]
* **Nginx**: [ 代理转发，gzip压缩等 ]
* **PM2**: [ 做守护进程, 发布更新项目 ]
* **Axios**: [ 基于Promise处理HTTP请求 ]
* **SASS**(**SCSS**): [ css预处理器 ]
* **Flex**: [ 弹性布局 ]
* **loaclStorge**: [ 本地存储用户信息 ]
* **Echarts**: [ 数据可视化显示 ]
* **Svg-captcha**: [ 验证码 ]







## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
