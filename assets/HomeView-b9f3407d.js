import{d as b,t as T,r as _,w as C,c as y,o as B,a as P,b as E,e as n,u as k,f as m,g as w,n as I,h as L,i as G,F as O,j as R,k as F}from"./index-010780f6.js";const M={class:"ticker-card"},A={class:"ticker-card__col"},D={class:"ticker-card__row"},H={key:0,class:"ticker-card__logo"},K={class:"ticker-card__ticker"},V={class:"ticker-card__row"},W={class:"ticker-card__name"},j={class:"ticker-card__col ticker-card__col_items-right"},$={class:"ticker-card__row"},q={key:0},J={class:"ticker-card__row"},X=b({__name:"TickerCard",props:{logo:{},ticker:{},price:{},companyName:{},changePriceInPoints:{},changePriceInPercents:{},minPriceStep:{}},setup(S){const a=S,{logo:o,ticker:c,price:v,companyName:g,changePriceInPoints:l,changePriceInPercents:d,minPriceStep:u}=T(a),i=_({badge:"",text:""}),t=_([]);C(()=>a.price,(s,h)=>{p(s>h),e(s,h)});const r=s=>(isNaN(s)&&(s=0),(Math.round(s*100)/100).toFixed(2)),e=(s,h)=>{let U=r(s),x=null;for(let f=0;f<U.length;f++)if(U[f]!==h.toString()[f]){x=f;break}t.value=[U.slice(0,x),U.slice(x)]},p=s=>{i.value={badge:s?"ticker-card__ltp_green":"ticker-card__ltp_red",text:""},setTimeout(()=>{i.value={badge:"",text:s?"text-green":"text-red"}},2e3)},N=y(()=>l.value===0?"":l.value>0?"text-green":"text-red");return B(()=>{t.value[1]=r(v.value)}),(s,h)=>(P(),E("div",M,[n("div",A,[n("div",D,[k(o)?(P(),E("div",H,m(k(o)),1)):w("",!0),n("div",K,m(k(c)),1)]),n("div",V,[n("div",W,m(k(g)),1)])]),n("div",j,[n("div",$,[n("div",{class:I(["ticker-card__ltp",i.value.badge])},[t.value[0]?(P(),E("span",q,m(t.value[0]),1)):w("",!0),n("span",{class:I(i.value.text)},m(t.value[1]),3)],2)]),n("div",J,[n("div",{class:I(["ticker-card__changes",N.value])},m(r(k(l))),3),n("div",{class:I(["ticker-card__changes",N.value])},m(r(k(d)))+"% ",3)])])]))}});function Y(S,a){const o="WebSocket"in window;let c=null;const v=_(null),g=_(null),l=_(null),d=_(!1),u=_(!1),i=_(!1);let t=()=>{},r=()=>{};return o&&(c=new WebSocket(S,a),c.addEventListener("message",e=>{v.value=e,l.value=e.data}),c.addEventListener("error",e=>{g.value=e,i.value=!0}),c.addEventListener("close",()=>{d.value=!1,u.value=!0}),c.addEventListener("open",()=>{d.value=!0,u.value=!1}),t=e=>c.send(e),r=(e,p)=>{c.close(e,p)}),{supported:o,ws:c,send:t,close:r,messageEvent:v,errorEvent:g,data:l,isOpen:d,isClosed:u,errored:i}}const Z=b({__name:"TickerCardList",setup(S){const a=L({}),o=y(()=>Object.values(a)),c=["RSTI","GAZP","MRKZ","RUAL","HYDR","MRKS","SBER","FEES","TGKA","VTBR","ANH.US","VICL.US","BURG.US","NBL.US","YETI.US","WSFS.US","NIO.US","DXC.US","MIC.US","HSBC.US","EXPN.EU","GSK.EU","SHP.EU","MAN.EU","DB1.EU","MUV2.EU","TATE.EU","KGF.EU","MGGT.EU","SGGD.EU"],{isOpen:v,send:g,messageEvent:l}=Y("wss://wss.tradernet.ru");C(()=>v.value,t=>{t&&g(JSON.stringify(["quotes",c]))});const d={ticker:"c",price:"ltp",companyName:"name",changePriceInPoints:"chg",changePriceInPercents:"pcp",minPriceStep:"min_step"},u=Object.values(d),i=Object.keys(d);return C(()=>l.value,t=>{const r=JSON.parse(t.data);if(r[0]!=="q")return;const e=r[1];for(const p in e){const N=u.indexOf(p);u.includes(p)&&(a[e.c]||(a[e.c]={}),a[e.c][i[N]]=e[p])}}),(t,r)=>(P(!0),E(O,null,G(o.value,e=>(P(),R(X,{key:e.ticker,ticker:e.ticker,price:e.price,companyName:e.companyName,changePriceInPoints:e.changePriceInPoints,changePriceInPercents:e.changePriceInPercents,minPriceStep:e.minPriceStep},null,8,["ticker","price","companyName","changePriceInPoints","changePriceInPercents","minPriceStep"]))),128))}}),z={class:"container"},ee=b({__name:"HomeView",setup(S){return(a,o)=>(P(),E("div",z,[F(Z)]))}});export{ee as default};
