var html = document.body.innerHTML;
chrome.extension.onMessage.addListener(
    function(request, sender, sendMessage) {if (request.greeting == "hello"){
            var regx = new RegExp('[a-zA-z]+://[^\s\"]*','g');
            var i = 0;
            var results=new Array();
            console.log(html);
            do
            {
              result=regx.exec(html);
              if (result!=null) {
                results[i]=result;
                i++;
              }
              console.log(result);
            }while (result!=null)
            sendMessage(results);
          }
        else{
            sendMessage("FUCK OFF"); // snub them.
          }
    });
