(()=>{"use strict";var e,t={1051:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const o=n(1181),i=n(7542),s=n(3394);window.SB=i.default;const a=n(3147),c=n(6465),u=new a.default({registerFirefoxContentScript:h,unregisterFirefoxContentScript:m}),l={},d={};function f(e){chrome.tabs.sendMessage(e,{message:"update"},(()=>{chrome.runtime.lastError}))}function p(e){e.navigationApiAvailable&&(e.navigationApiAvailable.newValue?chrome.tabs.onUpdated.removeListener(f):chrome.tabs.onUpdated.addListener(f))}function h(e){const t=d[e.id];t&&t.unregister(),(0,s.default)({allFrames:e.allFrames,js:e.js,css:e.css,matches:e.matches}).then((t=>{d[e.id]=t}))}function m(e){d[e]&&(d[e].unregister(),delete d[e])}function v(e,t,n={}){return r(this,void 0,void 0,(function*(){return"get"===e.toLowerCase()&&(t=c.GenericUtils.objectToURI(t,n,!0),n=null),yield fetch(t,{method:e,headers:{"Content-Type":"application/json"},redirect:"follow",body:n?JSON.stringify(n):null})}))}u.wait((()=>null!==i.default.config)).then((function(){i.default.config.supportInvidious&&u.setupExtraSiteContentScripts()})),chrome.tabs.onUpdated.addListener(f),u.wait((()=>null!==i.default.local)).then((()=>{i.default.local.navigationApiAvailable&&chrome.tabs.onUpdated.removeListener(f)})),i.default.configSyncListeners.includes(p)||i.default.configSyncListeners.push(p),chrome.runtime.onMessage.addListener((function(e,t,n){var s;switch(e.message){case"openConfig":return chrome.tabs.create({url:chrome.runtime.getURL("options/options.html"+(e.hash?"#"+e.hash:""))}),!1;case"openHelp":return chrome.tabs.create({url:chrome.runtime.getURL("help/index.html")}),!1;case"openUpsell":return chrome.tabs.create({url:chrome.runtime.getURL("upsell/index.html")}),!1;case"openPage":return chrome.tabs.create({url:chrome.runtime.getURL(e.url)}),!1;case"sendRequest":return v(e.type,e.url,e.data).then((e=>r(this,void 0,void 0,(function*(){n({responseText:yield e.text(),status:e.status,ok:e.ok})})))),!0;case"submitVote":return function(e,t,n){return r(this,void 0,void 0,(function*(){let s=i.default.config.userID;null!=s&&"undefined"!==s||(s=c.GenericUtils.generateUserID(),i.default.config.userID=s);const a=void 0!==e?"&type="+e:"&category="+n,u=yield function(e,t,n={}){return r(this,void 0,void 0,(function*(){const r=i.default.config.testingServer?o.testingServerAddress:i.default.config.serverAddress;return yield v(e,r+t,n)}))}("POST","/api/voteOnSponsorTime?UUID="+t+"&userID="+s+a);return u.ok?{successType:1,responseText:yield u.text()}:405==u.status?{successType:0,statusCode:u.status,responseText:yield u.text()}:{successType:-1,statusCode:u.status,responseText:yield u.text()}}))}(e.type,e.UUID,e.category).then(n),!0;case"registerContentScript":return h(e),!1;case"unregisterContentScript":return m(e.id),!1;case"tabs":return chrome.tabs.query({active:!0,currentWindow:!0},(t=>{chrome.tabs.sendMessage(t[0].id,e.data,(e=>{n(e)}))})),!0;case"time":case"infoUpdated":case"videoChanged":return t.tab&&(null===(s=l[t.tab.id])||void 0===s||s.postMessage(e)),!1;default:return!1}})),chrome.runtime.onConnect.addListener((e=>{"popup"===e.name&&chrome.tabs.query({active:!0,currentWindow:!0},(t=>{l[t[0].id]=e}))})),chrome.runtime.onInstalled.addListener((function(){setTimeout((()=>r(this,void 0,void 0,(function*(){if(!i.default.config.userID){chrome.tabs.create({url:chrome.extension.getURL("/help/index.html")});const e=c.GenericUtils.generateUserID();i.default.config.userID=e,i.default.config.categoryPillUpdate=!0}i.default.config.supportInvidious&&((yield u.containsInvidiousPermission())||chrome.tabs.create({url:chrome.extension.getURL("/permissions/index.html")}))}))),1500)}))}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,n,o,i)=>{if(!n){var s=1/0;for(l=0;l<e.length;l++){for(var[n,o,i]=e[l],a=!0,c=0;c<n.length;c++)(!1&i||s>=i)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(a=!1,i<s&&(s=i));if(a){e.splice(l--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[n,o,i]},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={352:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[s,a,c]=n,u=0;if(s.some((t=>0!==e[t]))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(c)var l=c(r)}for(t&&t(n);u<s.length;u++)i=s[u],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(l)},n=self.webpackChunksponsorblock=self.webpackChunksponsorblock||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,[736],(()=>r(1051)));o=r.O(o)})();