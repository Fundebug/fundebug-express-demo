# 使用Fundebug监控Express异常

### 安装[fundebug-nodejs](https://www.npmjs.com/package/fundebug-nodejs)模块

```bash
npm install fundebug-nodejs
```

若国外的NPM速度太慢的话，可以使用[淘宝NPM镜像](https://npm.taobao.org/)安装:

```bash
npm install fundebug-nodejs --registry=https://registry.npm.taobao.org
```

### 使用

```js
var fundebug=require("fundebug-nodejs");
fundebug.apikey="APIKEY"
```

其中，获取**APIKEY**需要[免费注册](https://www.fundebug.com/team/create)帐号并且[创建项目](https://www.fundebug.com/project/create)，注意选择对应的项目类型。

具体配置方式请参考server.js以及[Fundebug文档](https://docs.fundebug.com/notifier/nodejs/)。