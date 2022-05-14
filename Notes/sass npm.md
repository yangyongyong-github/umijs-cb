
在umi中可以直接使用css，但是并不支持scss，我们需要加两个loader，
直接npm安装 node-sass和sass-loader 即可，剩余的事情umi已经帮我们做好了。

```
npm i --save-dev node-sass sass-loader
npm install --save @umijs/plugin-sass

// depends :     "@umijs/plugin-sass": "^1.1.1",
```
npm ls depth 0