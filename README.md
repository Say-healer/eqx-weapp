

### 小程序 UI 组件库

## 快速上手
### 使用之前
在开始使用 iView Weapp 之前，你需要先阅读 [微信小程序自定义组件](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/) 的相关文档。

### 如何使用
到 [GitHub](https://github.com/Say-healer/eqx-weapp.git) 下载 weapp 的代码，将 `dist` 目录拷贝到自己的项目中。然后按照如下的方式使用组件，以 Button 为例，其它组件在对应的文档页查看：

1. 添加需要的组件。在页面的 json 中配置（路径根据自己项目位置配置）：
```json
"usingComponents": {
    "eqx-button": "{user/path}/dist/button/index"
}
```

3. 在npm 中使用
```json
"usingComponents": {
    "eqx-button": "eqx-weapp/button/index"
}
```

2. 在 wxml 中使用组件：
```html
<eqx-button type="primary" bind:click="handleClick">这是一个按钮</eqx-button>
```


```shell
# 从 GitHub 下载后，安装依赖
npm install

# 编译组件
npm run dev
```
然后，将 `examples` 目录在微信开发者工具中打开即可。
