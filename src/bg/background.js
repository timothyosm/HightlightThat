chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){



    popup() 




    function popup() {
      //   chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      //     var activeTab = tabs[0];
      //     for (i = 0; i < cars.length; i++) {
      //       chrome.tabs.sendMessage(activeTab.id, { list: listArray });
      //     }
      //   });
    
      Object.keys(localStorage).forEach((key) => {
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
          var activeTab = tabs[0];
          chrome.tabs.sendMessage(activeTab.id, { list: localStorage[key] });
        });
      });
    }
    
    setInterval(popup(), 3000);
    
    
    
    
    
    
    
    })