chrome.tabs.onCreated.addListener(function(tab) {
  　　　　console.log('tabs.onCreated --'
              + ' window: ' + tab.windowId
              + ' tab: '    + tab.id
              + ' index: '  + tab.index
              + ' url: '    + tab.url);
});