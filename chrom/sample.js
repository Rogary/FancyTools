
function genericOnClick(info, tab) {
  // 向content-script.js发送请求信息
  chrome.tabs.sendMessage(tab.id, {greeting: "hello"}, function(response) {
      console.log(response.toString());　　
      var clipboard = new Clipboard(response.toString());//实例化
      clipboard.on('success', function(e) {
          console.log(e);
          e.clearSelection();
      });

      clipboard.on('error', function(e) {
          console.log(e);
      });
  });
}
var id = chrome.contextMenus.create({"title": "复制所有下载链接", "contexts":["page"],
                   "onclick": genericOnClick});
console.log("'" + "' item:" + id);
