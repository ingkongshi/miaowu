"use strict";(self.webpackChunkuchinoko_maker=self.webpackChunkuchinoko_maker||[]).push([[3984,1578,6190,1131],{51578:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var r=a(85893),n=a(67294),i=a(66358),l=a(93379),o=a.n(l),s=a(7795),c=a.n(s),d=a(90569),p=a.n(d),u=a(3565),h=a.n(u),m=a(19216),_=a.n(m),f=a(44589),w=a.n(f),g=a(24878),x={};x.styleTagTransform=w(),x.setAttributes=h(),x.insert=p().bind(null,"head"),x.domAPI=c(),x.insertStyleElement=_();o()(g.Z,x);const v=g.Z&&g.Z.locals?g.Z.locals:void 0;var H=function(){return H=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},H.apply(this,arguments)};const b=function(){var e=(0,n.useRef)(null),t=(0,n.useRef)();return(0,n.useLayoutEffect)((function(){return e.current&&(i.ZP.set(e.current.children,{opacity:0}),t.current&&t.current.kill(),e.current&&(t.current=i.ZP.timeline({repeat:-1}).add(i.ZP.to(e.current.children,{opacity:1,delay:.24,duration:.16,ease:"power3.inOut",stagger:.3})).add(i.ZP.to(e.current.children,{opacity:0,delay:.16,duration:.16,ease:"power3.inOut"})))),function(){t.current&&t.current.kill()}}),[]),(0,r.jsx)("div",H({className:"".concat(v.wrap," loader")},{children:(0,r.jsx)("div",H({className:"wrap"},{children:(0,r.jsxs)("ul",H({className:"flex flex__row justify__sb items__center",ref:e},{children:[(0,r.jsx)("li",{}),(0,r.jsx)("li",{}),(0,r.jsx)("li",{}),(0,r.jsx)("li",{}),(0,r.jsx)("li",{}),(0,r.jsx)("li",{})]}))}))}))}},16190:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});var r=a(85893),n=a(67294),i=a(39711),l=a(96974),o=a(51578),s=a(20165),c=a(93379),d=a.n(c),p=a(7795),u=a.n(p),h=a(90569),m=a.n(h),_=a(3565),f=a.n(_),w=a(19216),g=a.n(w),x=a(44589),v=a.n(x),H=a(34331),b={};b.styleTagTransform=v(),b.setAttributes=f(),b.insert=m().bind(null,"head"),b.domAPI=u(),b.insertStyleElement=g();d()(H.Z,b);const S=H.Z&&H.Z.locals?H.Z.locals:void 0;var Z=function(){return Z=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},Z.apply(this,arguments)};const j=function(e){var t=e.catData,c=e.hasGenerateBtn,d=e.disabledShare,p=(0,l.UO)(),u=(0,n.useContext)(s.T).rootDispatch,h=(0,n.useState)(!1),m=h[0],_=h[1],f=function(e){e&&e.preventDefault(),m||_(!0),u({reGetData:!0})};return(0,r.jsxs)("div",Z({className:"".concat(S.wrap," full__w bg__wt__primary hidden")},{children:[(0,r.jsx)("header",{children:(0,r.jsxs)("h3",Z({className:"fs__r"},{children:["＼ うちのこグッズも",t&&t.items?(0,r.jsx)(r.Fragment,{children:"買える"}):(0,r.jsx)(r.Fragment,{children:"つくれる"}),"ニャ！ ／"]}))}),!c||m?(0,r.jsx)(r.Fragment,{children:t&&t.items?t.items.length?(0,r.jsx)("div",Z({className:"list_wrap px__m mt__xs overflow__a--hidden"},{children:(0,r.jsx)("ul",Z({className:"flex flex__wrap col__2 gap__x--xl gap__y--m align__left"},{children:function(){var e,a=[];return(null===(e=t.items)||void 0===e?void 0:e.length)&&t.items.map((function(e,n){e.id+""!==p.product_id&&a.push((0,r.jsx)("li",{children:(0,r.jsxs)(i.rU,Z({to:"/".concat(t.id,"/").concat(e.id),className:"block gtm__".concat(e.data.category)},{children:[(0,r.jsx)("figure",{children:(0,r.jsx)("img",{src:e.thumb.replace(/765x765/,"323x323"),width:323,height:323,alt:"".concat(t.name,"ちゃん ").concat(e.data.name)})}),(0,r.jsxs)("div",Z({className:"detail"},{children:[(0,r.jsxs)("div",Z({className:"title"},{children:[(0,r.jsxs)("span",Z({className:"name block fs__m color__bk__primary"},{children:[t.name,"ちゃん"]})),(0,r.jsx)("span",Z({className:"product fs__xs color__bk__tertiary"},{children:e.data.name}))]})),(0,r.jsx)("div",Z({className:"price fs__xs color__bk__tertiary"},{children:e.data.discounted_price&&e.data.price!==e.data.discounted_price?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("s",{children:[e.data.price.toLocaleString(),"円"]}),(0,r.jsxs)("span",Z({className:"discounted_price ml__xs color__rd__primary"},{children:[e.data.discounted_price.toLocaleString(),"円"]}))]}):(0,r.jsxs)(r.Fragment,{children:[e.data.price.toLocaleString(),"円"]})}))]}))]}))},n))})),(0,r.jsx)(r.Fragment,{children:a})}()}))})):(0,r.jsxs)("div",Z({className:"error mt__xl"},{children:[(0,r.jsxs)("p",Z({className:"fs__xs"},{children:["ごめんなさい😿",(0,r.jsx)("br",{}),"サーバーが大変混み合っております。",(0,r.jsx)("br",{}),"30分程置いて「うちのこグッズを見る」",(0,r.jsx)("br",{}),"ボタンを押してください。"]})),(0,r.jsx)("div",Z({className:"btn type__primary size__s shape__round full__w mt__m"},{children:(0,r.jsx)("a",Z({className:"full__w relative gtm__re-generate",href:"#",onClick:f},{children:"うちのこグッズをみる"}))}))]})):(0,r.jsx)(o.default,{})}):(0,r.jsxs)("div",Z({className:S.generate},{children:[(0,r.jsx)("img",{src:a(12160),width:630,height:220,alt:""}),(0,r.jsx)("div",Z({className:"".concat(d?"disabled":""," btn type__primary size__m shape__round full__w mt__m")},{children:(0,r.jsx)("a",Z({className:"full__w relative gtm__generate",href:"#",onClick:f},{children:"うちのこグッズをつくる"}))}))]})),(0,r.jsxs)("ul",Z({className:"".concat(S.note," mt__s gap__y--xs align__left")},{children:[(0,r.jsx)("li",{children:"※グッズの購入代金の一部は保護猫支援団体に寄付いたします"}),t&&t.items&&(0,r.jsx)("li",{children:"※この先はオリジナルグッズを購入できるサービスSUZURI byGMOペパボに遷移します"})]}))]}))}},41131:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});var r=a(85893),n=a(67294),i=a(85518),l=a(20165),o=function(){return o=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},o.apply(this,arguments)};const s=function(e){var t=e.disabledShare,a=e.setShowShareApi,s=(0,n.useContext)(l.T).rootDispatch;return(0,r.jsx)("div",o({className:"".concat(t?"disabled":""," btn type__secondary size__xs shape__round full__w")},{children:(0,r.jsxs)("a",o({className:"full__w relative fs__s ".concat(i.tq&&void 0!==navigator.share?"gtm__share_api":""),href:"#",onClick:function(e){e&&e.preventDefault(),i.tq&&void 0!==navigator.share?a&&a(!0):s({isShowModal:!0,modalType:"share"})}},{children:["シェアする",(0,r.jsx)("span",o({className:"icon"},{children:(0,r.jsx)("svg",o({viewBox:"0 0 20 18"},{children:(0,r.jsx)("path",{d:"M16,11c-0.9,0-1.6,0.3-2.2,0.8L7.4,9.4c0.1-0.3,0.1-0.6,0.1-0.9c0-0.1,0-0.1,0-0.2L13.6,6c0.6,0.6,1.5,1,2.4,1c1.9,0,3.5-1.6,3.5-3.5S17.9,0,16,0s-3.5,1.6-3.5,3.5c0,0.3,0,0.5,0.1,0.7L6.8,6.4C6.2,5.6,5.1,5,4,5C2.1,5,0.5,6.6,0.5,8.5S2.1,12,4,12c0.9,0,1.7-0.3,2.3-0.9l6.4,2.4c-0.1,0.3-0.2,0.6-0.2,1c0,1.9,1.6,3.5,3.5,3.5s3.5-1.6,3.5-3.5S17.9,11,16,11z"})}))}))]}))}))}},43984:(e,t,a)=>{a.r(t),a.d(t,{default:()=>N});var r=a(85893),n=a(67294),i=a(85518),l=a(96486),o=a(5761),s=a(16190),c=a(41131),d=a(20165),p=a(34898),u=a(49931),h=a(93379),m=a.n(h),_=a(7795),f=a.n(_),w=a(90569),g=a.n(w),x=a(3565),v=a.n(x),H=a(19216),b=a.n(H),S=a(44589),Z=a.n(S),j=a(49473),I={};I.styleTagTransform=Z(),I.setAttributes=v(),I.insert=g().bind(null,"head"),I.domAPI=f(),I.insertStyleElement=b();m()(j.Z,I);const z=j.Z&&j.Z.locals?j.Z.locals:void 0;var y=function(){return y=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},y.apply(this,arguments)},B=function(e,t,a,r){return new(a||(a=Promise))((function(n,i){function l(e){try{s(r.next(e))}catch(e){i(e)}}function o(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,o)}s((r=r.apply(e,t||[])).next())}))},O=function(e,t){var a,r,n,i,l={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(a)throw new TypeError("Generator is already executing.");for(;l;)try{if(a=1,r&&(n=2&i[0]?r.return:i[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,i[1])).done)return n;switch(r=0,n&&(i=[2&i[0],n.value]),i[0]){case 0:case 1:n=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!(n=l.trys,(n=n.length>0&&n[n.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!n||i[1]>n[0]&&i[1]<n[3])){l.label=i[1];break}if(6===i[0]&&l.label<n[1]){l.label=n[1],n=i;break}if(n&&l.label<n[2]){l.label=n[2],l.ops.push(i);break}n[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(e){i=[6,e],r=0}finally{a=n=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}},k=function(e,t,a){if(a||2===arguments.length)for(var r,n=0,i=t.length;n<i;n++)!r&&n in t||(r||(r=Array.prototype.slice.call(t,0,n)),r[n]=t[n]);return e.concat(r||Array.prototype.slice.call(t))};const N=function(){var e=(0,n.useRef)(!1),t=(0,n.useRef)(null),a=(0,n.useContext)(d.T),h=a.rootState,m=a.rootDispatch,_=(0,n.useState)(""),f=_[0],w=_[1],g=(0,n.useState)(),x=g[0],v=g[1],H=(0,n.useState)(!0),b=H[0],S=H[1],Z=(0,n.useState)(!0),j=Z[0],I=Z[1],N=localStorage.getItem("postAvatarList"),A=function(){return B(void 0,void 0,void 0,(function(){var e,t;return O(this,(function(a){switch(a.label){case 0:return x?[3,2]:[4];case 1:(e=a.sent())&&w(e.id||""),a.label=2;case 2:return[2]}}))}))},K=function(e,t){e&&e.preventDefault(),m({page:t,imgSrc:"",downloadImgSrc:"",ogpImgSrc:"",isBackToNameInput:"home"!==t})};return(0,n.useEffect)((function(){if(!e.current)if(e.current=!0,S(!0),h.currentAvatarData)I(!1),h.currentAvatarData.id&&w(h.currentAvatarData.id),x||v(h.currentAvatarData);else if(N){var t=(0,l.filter)(JSON.parse(N),(function(e){return(0,l.isEqual)((0,l.pick)(e,k(k([],p.f,!0),["name","halloween"],!1)),(0,l.pick)(h.currentAvatar,k(k([],p.f,!0),["name","halloween"],!1)))}));if(t.length){var a=t[0];w(a.catId),S(!1)}else A()}else A()}),[]),(0,n.useEffect)((function(){var e;h.reGetData&&(m({reGetData:!1}),v(null),h.currentAvatar&&(e=h.currentAvatar.catId,B(void 0,void 0,void 0,(function(){var t;return O(this,(function(a){switch(a.label){case 0:return[4];case 1:return(t=a.sent())&&(v(t),m({currentAvatarData:t})),[2]}}))}))))}),[h.reGetData]),(0,n.useEffect)((function(){if(f){if(h.currentAvatar){var e=y(y({},(0,l.pick)(h.currentAvatar,k(k([],p.f,!0),["name"],!1))),{catId:f}),t=N?JSON.parse(N):[];t.unshift(e),localStorage.setItem("postAvatarList",JSON.stringify((0,l.slice)(t,0,9)))}var a=(0,l.merge)(h.avatarList[0],{catId:f});m({avatarList:k([a],(0,l.slice)(h.avatarList,1),!0),currentAvatar:a,shareUrl:"".concat(window.location.protocol,"//").concat(window.location.hostname,"/").concat(f,"?utm_source=social&utm_medium=click&utm_campaign=share&utm_id=share")}),S(!1)}}),[f]),(0,n.useEffect)((function(){x&&m({currentAvatarData:x})}),[x]),(0,r.jsxs)("div",y({className:"".concat(z.wrap," full__w bg__wt__primary")},{children:[(0,r.jsx)("div",y({className:"btn back type__primary size__xs absolute"},{children:(0,r.jsx)("a",y({className:"fw__m btn__back_name_input",href:"#",onClick:function(e){return K(e,"avatar")}},{children:"返回"}))})),(0,r.jsx)("div",y({className:"btn back back_top type__primary size__xs absolute"},{children:(0,r.jsx)("a",y({className:"fw__m btn__back_top",href:"#",onClick:function(e){return K(e,"home")}},{children:"首页"}))})),(0,r.jsxs)("div",y({className:"".concat(z.img_wrap," bg__be__primary fullScreen center")},{children:[(0,r.jsx)("figure",y({className:"mx__auto mptop20"},{children:(0,r.jsx)("img",{src:h.imgSrc,width:"100%",alt:""})})),(0,r.jsx)("div",y({className:"name fs__3xl"},{children:h.currentAvatar?h.currentAvatar.name:"no name"})),(0,r.jsx)("div",y({className:"".concat(z.btn_wrap," px__s")},{children:(0,r.jsxs)("div",y({className:"flex flex__row justify__center gap__x--xs"},{children:[(0,r.jsxs)("div",y({className:"btn_set"},{children:[(0,r.jsx)("p",y({className:"mb__xs align__center hidden"},{children:"＼ SNSのアイコンとかに使ってね ／"})),(0,r.jsx)("div",y({className:"btn type__primary size__xs shape__round full__w"},{children:(0,r.jsxs)("a",y({className:"full__w relative fs__s gtm__download",href:'#',onClick:function(e){downloadCat(e,i,t,h);},ref:t},{children:["下载猫猫",(0,r.jsx)("span",y({className:"icon"},{children:(0,r.jsx)("svg",y({viewBox:"0 0 20 18"},{children:(0,r.jsx)("path",{d:"M20,11.5v4.8c0,0.5-0.4,0.9-0.9,0.9H0.9c-0.5,0-0.9-0.4-0.9-0.9v-4.8c0-0.5,0.4-0.9,0.9-0.9s0.9,0.4,0.9,0.9v3.8h16.3v-3.8c0-0.5,0.4-0.9,0.9-0.9S20,11,20,11.5z M9.2,11.7c0.1,0.1,0.1,0.2,0.2,0.3c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.6-0.1,0.7-0.4L15,6.4c0.3-0.4,0.2-1-0.2-1.3c-0.4-0.3-1-0.2-1.3,0.2l-2.6,3.5V1.7c0-0.5-0.4-0.9-0.9-0.9S9.1,1.2,9.1,1.7v6.8L6.6,5.3C6.3,4.9,5.7,4.8,5.3,5.1C4.9,5.4,4.8,6,5.2,6.4L9.2,11.7z"})}))}))]}))}))]})),(0,r.jsxs)("div",y({className:"btn_set hidden"},{children:[(0,r.jsx)("p",y({className:"mb__xs align__center hidden"},{children:"＼ うちのこをみんなに見てもらおう ／"})),(0,r.jsx)(o.default,y({imgSrc:h.downloadImgSrc},{children:(0,r.jsx)(c.default,{disabledShare:b})}))]}))]}))}))]})),(0,r.jsx)(s.default,{catData:x,hasGenerateBtn:j,disabledShare:b})]}))}},34898:(e,t,a)=>{a.d(t,{X:()=>n,f:()=>r});var r=["bodyType","pattern","eye","ear","nose","noseMouthPattern","tail"],n=["short","long",null]},49931:(e,t,a)=>{a.d(t,{VZ:()=>o,_i:()=>l,bf:()=>s});var r=a(9669),n=a.n(r)().create({baseURL:""}),i=(new Date).getTime(),l=function(e){return n.get("".concat(e,"?timestamp=").concat(i)).then((function(e){return e.data}))},o=function(e,t){return n.post(e,t).then((function(e){return e.data})).catch((function(e){}))},s=function(e){return n.get(e).then((function(e){return e.data})).catch((function(e){}))}},24878:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(8081),n=a.n(r),i=a(23645),l=a.n(i),o=a(61667),s=a.n(o),c=new URL(a(44899),a.b),d=l()(n()),p=s()(c);d.push([e.id,".IVHt2HBZdj9BkHKOawdl{position:relative;margin-top:20px;margin-right:auto;margin-left:auto;padding-right:20px;padding-left:20px}.IVHt2HBZdj9BkHKOawdl .wrap{position:relative;padding-bottom:100%}.IVHt2HBZdj9BkHKOawdl .wrap ul{position:absolute;top:50%;left:50%;width:222px;height:74px;margin-right:auto;margin-left:auto;transform:translate(-50%, -50%)}.IVHt2HBZdj9BkHKOawdl .wrap ul li{width:26px;height:36px;background-image:url("+p+")}.IVHt2HBZdj9BkHKOawdl .wrap ul li:nth-child(1){transform:translate(0, -8px) rotate(-30deg)}.IVHt2HBZdj9BkHKOawdl .wrap ul li:nth-child(2){transform:translate(-4.5px, 18px)}.IVHt2HBZdj9BkHKOawdl .wrap ul li:nth-child(3){transform:translate(3px, -16px) rotate(-30deg)}.IVHt2HBZdj9BkHKOawdl .wrap ul li:nth-child(4){transform:translate(4px, 17px)}.IVHt2HBZdj9BkHKOawdl .wrap ul li:nth-child(5){transform:translate(0, -18px) rotate(-30deg)}.IVHt2HBZdj9BkHKOawdl .wrap ul li:nth-child(6){transform:translate(0, 14px)}",""]),d.locals={wrap:"IVHt2HBZdj9BkHKOawdl"};const u=d},34331:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(8081),n=a.n(r),i=a(23645),l=a.n(i)()(n());l.push([e.id,'.oH_2BFzwbwlRlg1IS4Zw{padding-top:40px;padding-bottom:40px}.oH_2BFzwbwlRlg1IS4Zw .list_wrap{max-width:410px;margin-right:auto;margin-bottom:50px;margin-left:auto}.oH_2BFzwbwlRlg1IS4Zw .list_wrap li{font-family:"Nunito","游ゴシック","YuGothic","ヒラギノ角ゴ Pro W3","Hiragino Kaku Gothic Pro","メイリオ",Meiryo,Osaka,"ＭＳ Ｐゴシック","MS PGothic"}.oH_2BFzwbwlRlg1IS4Zw .list_wrap li figure{margin-bottom:-2px}.oH_2BFzwbwlRlg1IS4Zw .list_wrap li a figure img{transition-duration:240ms;transition-property:transform,opacity;transition-timing-function:cubic-bezier(0.165, 0.84, 0.44, 1)}.no-touchevents .oH_2BFzwbwlRlg1IS4Zw .list_wrap li a:hover figure img,.no-touchevents .oH_2BFzwbwlRlg1IS4Zw .list_wrap li a:active figure img{transform:scale(1.02);opacity:.75}.no-touchevents .oH_2BFzwbwlRlg1IS4Zw .list_wrap li a:hover .detail .name,.no-touchevents .oH_2BFzwbwlRlg1IS4Zw .list_wrap li a:hover .detail .product,.no-touchevents .oH_2BFzwbwlRlg1IS4Zw .list_wrap li a:hover .detail .price,.no-touchevents .oH_2BFzwbwlRlg1IS4Zw .list_wrap li a:active .detail .name,.no-touchevents .oH_2BFzwbwlRlg1IS4Zw .list_wrap li a:active .detail .product,.no-touchevents .oH_2BFzwbwlRlg1IS4Zw .list_wrap li a:active .detail .price{text-decoration:underline}.touchevents .oH_2BFzwbwlRlg1IS4Zw .list_wrap li a.over figure img{transform:scale(1.02);opacity:.75}.touchevents .oH_2BFzwbwlRlg1IS4Zw .list_wrap li a.over .detail .name,.touchevents .oH_2BFzwbwlRlg1IS4Zw .list_wrap li a.over .detail .product,.touchevents .oH_2BFzwbwlRlg1IS4Zw .list_wrap li a.over .detail .price{text-decoration:underline}.oH_2BFzwbwlRlg1IS4Zw .error{width:calc(100% - 36px);margin-right:auto;margin-left:auto;padding-top:25px;padding-bottom:30px;border-radius:20px;background-color:#f7f7f7}.oH_2BFzwbwlRlg1IS4Zw .error p{line-height:1.5714285714}.oH_2BFzwbwlRlg1IS4Zw .error .btn{max-width:260px;margin-right:auto;margin-left:auto}.oH_2BFzwbwlRlg1IS4Zw .mCQFTiKIWz8ZHJk3oNQr{width:85.9813084112%;margin-top:20px;margin-right:auto;margin-left:auto;padding-right:25px;padding-left:25px}.oH_2BFzwbwlRlg1IS4Zw .mCQFTiKIWz8ZHJk3oNQr .btn{max-width:280px;margin-right:auto;margin-left:auto}.oH_2BFzwbwlRlg1IS4Zw .FvekKcrG5YoH6IIH8SG3{max-width:390px;margin-right:auto;margin-left:auto;padding-right:25px;padding-left:25px}.oH_2BFzwbwlRlg1IS4Zw .FvekKcrG5YoH6IIH8SG3 li{font-size:11px;font-size:1.1rem;line-height:1.6363636364}@media screen and (max-width: 404px)and (hover: hover){.oH_2BFzwbwlRlg1IS4Zw header h3{font-size:18px;font-size:1.8rem}}@media screen and (max-width: 389px)and (hover: none){.oH_2BFzwbwlRlg1IS4Zw header h3{font-size:18px;font-size:1.8rem}}',""]),l.locals={wrap:"oH_2BFzwbwlRlg1IS4Zw",generate:"mCQFTiKIWz8ZHJk3oNQr",note:"FvekKcrG5YoH6IIH8SG3"};const o=l},49473:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(8081),n=a.n(r),i=a(23645),l=a.n(i)()(n());l.push([e.id,'.HHrKzQ7cZSHHh7OeqxS5{min-height:100vh;}.HHrKzQ7cZSHHh7OeqxS5 .loader .wrap{padding-bottom:50%}.HHrKzQ7cZSHHh7OeqxS5 .wD20NrIMDpHvPpIvG9bO{z-index:10;position:relative;}.HHrKzQ7cZSHHh7OeqxS5 .wD20NrIMDpHvPpIvG9bO figure{max-width:400px;padding-right:60px;padding-left:60px}.HHrKzQ7cZSHHh7OeqxS5 .wD20NrIMDpHvPpIvG9bO .name{margin-top:-15px;font-family:"myfont"}.HHrKzQ7cZSHHh7OeqxS5 .B1d8Wz3fI7Zreo2EUAa2{margin-top:35px}.HHrKzQ7cZSHHh7OeqxS5 .B1d8Wz3fI7Zreo2EUAa2 .btn_set{max-width:50%}.HHrKzQ7cZSHHh7OeqxS5 .B1d8Wz3fI7Zreo2EUAa2 .btn_set p{font-size:11px;font-size:1.1rem;white-space:nowrap}.HHrKzQ7cZSHHh7OeqxS5 .B1d8Wz3fI7Zreo2EUAa2 .btn_set .btn{max-width:200px;width: 165px;margin-right:auto;margin-left:auto}.HHrKzQ7cZSHHh7OeqxS5 .B1d8Wz3fI7Zreo2EUAa2 .btn_set .btn .icon{right:15px;width:15px;height:14px}.HHrKzQ7cZSHHh7OeqxS5 .B1d8Wz3fI7Zreo2EUAa2 .btn_back_to_top{margin-top:30px}@media screen and (max-width: 442px)and (hover: hover){.HHrKzQ7cZSHHh7OeqxS5 .B1d8Wz3fI7Zreo2EUAa2 .btn_set p{width:125%;margin-right:-12.5%;margin-left:-12.5%;transform:scale(0.8)}}@media screen and (max-width: 427px)and (hover: none){.HHrKzQ7cZSHHh7OeqxS5 .B1d8Wz3fI7Zreo2EUAa2 .btn_set p{width:125%;margin-right:-12.5%;margin-left:-12.5%;transform:scale(0.8)}}@media screen and (max-width: 404px)and (hover: hover){.HHrKzQ7cZSHHh7OeqxS5 .B1d8Wz3fI7Zreo2EUAa2{margin-top:25px}.HHrKzQ7cZSHHh7OeqxS5 .B1d8Wz3fI7Zreo2EUAa2 .btn_set .btn a{font-size:14px;font-size:1.4rem}}@media screen and (max-width: 389px)and (hover: none){.HHrKzQ7cZSHHh7OeqxS5 .B1d8Wz3fI7Zreo2EUAa2{margin-top:25px}.HHrKzQ7cZSHHh7OeqxS5 .B1d8Wz3fI7Zreo2EUAa2 .btn_set .btn a{font-size:14px;font-size:1.4rem}}@media screen and (min-width: 428px)and (hover: none){.HHrKzQ7cZSHHh7OeqxS5 .wD20NrIMDpHvPpIvG9bO figure{max-width:none;padding-right:74px;padding-left:74px}}@media screen and (min-width: 443px)and (hover: hover){.HHrKzQ7cZSHHh7OeqxS5 .wD20NrIMDpHvPpIvG9bO figure{max-width:none;padding-right:74px;padding-left:74px}}',""]),l.locals={wrap:"HHrKzQ7cZSHHh7OeqxS5",img_wrap:"wD20NrIMDpHvPpIvG9bO",btn_wrap:"B1d8Wz3fI7Zreo2EUAa2"};const o=l},44899:e=>{e.exports="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26 36' style='enable-background:new 0 0 26 36' xml:space='preserve' fill='%23858585'%3e%3cpath d='M16.6 5.8c-1 1.7-3.1 2.2-4.8 1.2-1.7-1-2.2-3.1-1.2-4.8C11.6.5 13.7 0 15.4 1c1.6 1 2.2 3.1 1.2 4.8m7.9 8.7c-1 1.7-3.1 2.2-4.8 1.2-1.7-1-2.2-3.1-1.2-4.8 1-1.7 3.1-2.2 4.8-1.2 1.7.9 2.2 3.1 1.2 4.8m.1 11.4c-1 1.7-3.1 2.2-4.8 1.2-1.7-1-2.2-3.1-1.2-4.8 1-1.7 3.1-2.2 4.8-1.2 1.7 1 2.2 3.2 1.2 4.8m-7.9 7.9c-1 1.7-3.1 2.2-4.8 1.2s-2.2-3.1-1.2-4.8c1-1.7 3.1-2.2 4.8-1.2 1.6 1 2.2 3.1 1.2 4.8M2.2 9.6c-2 3.4.3 4.6.5 8.2s-2.8 5.5-1.3 8.8 13.2 1.3 13.9-8.1c.6-9-10-14.1-13.1-8.9' fill='%23858585' /%3e%3c/svg%3e"},12160:(e,t,a)=>{e.exports=a.p+"assets/images/7074d405a14452393e31.png"}}]);