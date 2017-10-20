// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log("request " + request);
	console.log("sender " + sender);
	console.log("sendResponse " + sendResponse);
});

// A generic onclick callback function.
function genericOnClick(info, tab) {
  console.log("select " + chrome.tabs.getSelected);
  console.log("info: " + JSON.stringify(info));
  console.log("tab: " + JSON.stringify(tab));
  console.log("page：" + document.documentElement.outerHTML);
}
var id = chrome.contextMenus.create({"title": "复制所有下载链接", "contexts":["page"],
								   "onclick": genericOnClick});
console.log("'" + "' item:" + id);