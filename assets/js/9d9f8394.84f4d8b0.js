"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[360],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,u=m["".concat(l,".").concat(d)]||m[d]||h[d]||r;return n?o.createElement(u,s(s({ref:t},p),{},{components:n})):o.createElement(u,s({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[m]="string"==typeof e?e:i,s[1]=a;for(var c=2;c<r;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9222:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=n(7462),i=(n(7294),n(3905));const r={sidebar_position:4},s="Troubleshooting",a={unversionedId:"troubleshooting",id:"troubleshooting",title:"Troubleshooting",description:'"The bot isn\'t responding to my commands"',source:"@site/docs/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/troubleshooting",draft:!1,editUrl:"https://github.com/wise-old-man/discord-bot/tree/master/docs/docs/troubleshooting.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"sidebar",previous:{title:"Notifications",permalink:"/notifications"}},l={},c=[{value:"&quot;The bot isn&#39;t responding to my commands&quot;",id:"the-bot-isnt-responding-to-my-commands",level:2},{value:"&quot;The bot isn&#39;t sending notifications&quot;",id:"the-bot-isnt-sending-notifications",level:2},{value:"&quot;The bot isn&#39;t showing emojis correctly&quot;",id:"the-bot-isnt-showing-emojis-correctly",level:2}],p={toc:c},m="wrapper";function h(e){let{components:t,...r}=e;return(0,i.kt)(m,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("h2",{id:"the-bot-isnt-responding-to-my-commands"},'"The bot isn\'t responding to my commands"'),(0,i.kt)("p",null,"This is almost always a permissions issue. Make sure that the bot has the following permissions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Send messages"),(0,i.kt)("li",{parentName:"ul"},"Manage messages ",(0,i.kt)("inlineCode",{parentName:"li"},"(this is required for some paginated commands)")),(0,i.kt)("li",{parentName:"ul"},"Embed links"),(0,i.kt)("li",{parentName:"ul"},"Attach files ",(0,i.kt)("inlineCode",{parentName:"li"},"(this is required for some image-based commands)")),(0,i.kt)("li",{parentName:"ul"},"Use application commands")),(0,i.kt)("p",null,"A good first step is to kick and re-invite the bot to your server, this will try to give the bot the latest required permissions. You can do this directly from inside Discord by clicking on the bot (right-side member list) and then clicking the \"Add to server\" button that appears in the bot's profile. You won't need to re-configure your group or notifications, those are saved in our database."),(0,i.kt)("p",null,"Also make sure there's no role or channel permissions overriding the bot's permissions."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},'A good way to check if it\'s a permissions issue, is to temporarily give the bot the "Administrator" role, and trying to call the command again. If it responds this time, then you know that it\'s missing permissions (that were given to the "Administrator" role).')),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"the-bot-isnt-sending-notifications"},'"The bot isn\'t sending notifications"'),(0,i.kt)("p",null,"Similarly to the situation above, this is often a permissions issue."),(0,i.kt)("p",null,"First, check that you have configured notifications for whatever event is happening (member list changed, new competition started, etc), by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"/help")," command (with no category selected). This will show you your current notification settings."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Help Command (default)",src:n(2817).Z,width:"684",height:"577"})),(0,i.kt)("p",null,'If you have confirmed that the "notification type" is properly assigned to a channel, then make sure the bot is invited and has speaking permissions on that channel. ',(0,i.kt)("a",{parentName:"p",href:"/troubleshooting#the-bot-isnt-responding-to-my-commands"},"See permissions troubleshooting above")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"A good way to check if the bot has viewing and speaking permissions on that channel, is to re-configure the notification settings for that event (with ",(0,i.kt)("inlineCode",{parentName:"p"},"/config notifications"),"), if it doesn't have the required permissions on that channel, it'll show you an error message explaining what went wrong.")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"the-bot-isnt-showing-emojis-correctly"},'"The bot isn\'t showing emojis correctly"'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Missing Emojis example",src:n(5119).Z,width:"565",height:"300"})),(0,i.kt)("p",null,"This a known bug with Discord, and to fix it, make sure that ",(0,i.kt)("inlineCode",{parentName:"p"},"@everyone")," role has the ",(0,i.kt)("inlineCode",{parentName:"p"},"Use external emoji")," permission enabled."))}h.isMDXComponent=!0},2817:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/help-af518284e71b6807af96fdc8206c27cf.png"},5119:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/missing_emojis-6f330a4bd658e328ce1cc2fdcc2836f6.png"}}]);