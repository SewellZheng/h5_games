const botpressConfig = {
  "clientId": "ed3de69f-5492-48a2-9c62-d826d34ffd51",  
  "botId": "c2e07c46-c069-4b75-8a62-572acb60ab69",  
  "style": "/webchat/v2.1/botpress.css",
  "configuration": {
    "botAvatar": "https://www.x-legend.com/online/glorydestiny-reborn/assets/images/bot_chat.png",
    "botDescription": "我們的AI小幫手還在測試版階段，正在努力學習冒險世界的每個角落，所以提供的資訊可能會有些小錯誤或遺漏。不過別擔心，它會越來越聰明！以下是詢問AI小幫手的範例： 請問強化系統要怎麼使用、我要怎麼找回我遊戲的密碼、我要怎麼儲值點數",
    "botName": "晴空物語 - REBORN AI",
    "composerPlaceholder": "嗨! 有什麼需要幫忙的?",
    "email": {
      "title": "cs@x-legend.com.tw",
      "link": "mailto:cs@x-legend.com.tw"
    },
    "phone": {
      "title": "+88677186620",
      "link": "tel:+88677186620"
    },
    "privacyPolicy": {
      "title": "Privacy policy",
      "link": "https://www.x-legend.com/license/privacy"
    },
    "termsOfService": {
      "title": "Terms of service",
      "link": "https://www.x-legend.com/license/terms/"
    },
    "website": {
      "title": "https://www.x-legend.com/online/glorydestiny-reborn/",
      "link": "https://www.x-legend.com/online/glorydestiny-reborn/"
    },
	"showPoweredBy": false
  }
};

fetch('https://mediafiles.botpress.cloud/c2e07c46-c069-4b75-8a62-572acb60ab69/webchat/v2.1/theme.json')
.then(response => response.json())
.then(data => {
  //console.error('theme.json', data);
  window.botpress.init({
    ...botpressConfig,
    "theme": data,
  });
})
.catch(e => {
  window.botpress.init({
    ...botpressConfig,
});
  console.error(e);
});
