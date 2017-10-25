function genericOnClick(info, tab) {
  chrome.tabs.sendMessage(tab.id, {greeting: "hello"}, function(response) {
      document.getElementById('text').value = response.toString();
      //这个元素其实是内容的载体，修改里面的指以共剪切板js使用
      var clipboard = new Clipboard('.btn');
      clipboard.on('success', function(e) {
          console.log('success'+e);
      });
      clipboard.on('error', function(e) {
          console.log('error'+ e);
      });
      document.getElementById('btn').click(); //由于这个button需要被触发才能进行复制操作所以这里要点击一下
  });
}
var id = chrome.contextMenus.create({"title": "复制所有下载链接", "contexts":["page"],
                   "onclick": genericOnClick});// 创建一个右键菜单
