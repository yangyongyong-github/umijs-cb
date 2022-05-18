


# `require.context` 

你还可以通过 require.context() 函数来创建自己的 context。

require.context()是可以用来创建自己（模块）上下文的方法，有3个参数：

可以给这个函数传入四个参数：

directory：要搜索的文件夹目录  . 为当前文件路径

useSubdirectories：是否还应该搜索它的子目录

regExp：一个匹配文件的正则表达式

mode：是否异步加载

```js
require.context( directory, (useSubdirectories = true), (regExp = /^\.\/.*$/), (mode = 'sync'));

// demo
require.context('./test', false, /\.test\.js$/);
//（创建出）一个 context，其中文件来自 test 目录，request 以 `.test.js` 结尾。

require.context('../', true, /\.stories\.js$/);
// （创建出）一个 context，其中所有文件都来自父文件夹及其所有子级文件夹，request 以 `.stories.js` 结尾。
```

## 关于require.context的返回值：一个函数

这个函数可以接收一个参数：request，这个request是指在require()语句中的表达式，直接调用该方法可以得到对应模块； 另外，函数也是对象，该函数有3个属性： resolve, keys, id。

-   resolve：是一个函数，它返回 request 被解析后得到的模块 id。
-   keys：也是一个函数，它返回一个数组，由所有可能被上下文模块处理的请求组成。
-   id：是上下文模块里面所包含的模块 id. 它可能在你使用 module.hot.accept 的时候被用到