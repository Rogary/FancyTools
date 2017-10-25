/***
* 获取网页的js
* 由于chrome 只有这个文件的JS代码会嵌入到内容页，所以要获得内容只能在这里面获取，再传给sample.js
**/
var html = document.body.innerHTML;//获取网页到html代码
chrome.extension.onMessage.addListener(//创建监听器
    function(request, sender, sendMessage) {if (request.greeting == "hello"){
            var regx = new RegExp('[a-zA-z]+://[^\s\"]*','g');//改一下正则就可以匹配各种各样的下载链接啦
            var i = 0;
            var results=new Array();
            do
            {
              result=regx.exec(html);
              if (result!=null) {
                results[i]=result;
                i++;
              }
            }while (result!=null)
            sendMessage(results);//发送消息～！
          }
        else{
            sendMessage("errorMessage"); // snub them.
          }
    });
