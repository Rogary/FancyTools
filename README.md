# FancyTools
Some cute tools to make life efficient  


看了作者的代码，既然是解析html文件来实现  
干脆做成浏览器插件吧！  
## 2017年10月20日
- 实现了右键菜单及点击的响应
- 卡在了 content_scripts 里面的AIP似乎过期了一直跑不过去

## 2017年10月24日
- 解决上次的问题，content_scripts 一些api使用不了一方面是使用错误，另一方面是加载时间应该放到页面加载完之后

## 2017年10月25日
- 将内容复制到剪切板，主要是 clipboard.min.js不会使用，原来我离真相只有一步之遥～！

使用到的插件[clipboard.js](https://github.com/zenorocha/clipboard.js)
### TODO
- ~~获取页面html代码10.24~~
- ~~解析html代码10.24~~
- ~~将结果复制到 剪切板~~
