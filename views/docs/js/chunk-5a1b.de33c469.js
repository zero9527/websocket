(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a1b"],{"24b3":function(t,e,i){"use strict";var n=i("a09e"),a=i.n(n);a.a},"7dc6":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"circles"},[i("div",{staticClass:"headerT headerQ"},[i("div",{staticClass:"hTop",class:t.uphide},[t._m(0),t._m(1)]),i("ul",{staticClass:"typeq"},t._l(t.headList,function(e,n){return i("li",{key:n,on:{click:function(i){t.headCLK(e.id)}}},[i("van-icon",{attrs:{name:e.icon}}),i("p",[t._v(t._s(e.name))]),i("span",[t._v("+"+t._s(e.num))])],1)})),i("div",{staticClass:"titlepar1",style:t.titleparstyle},[i("div",{staticClass:"title1 titlec"},[t._l(t.titleList,function(e,n){return i("div",{key:e.id,staticClass:"tcenter",class:{titlenow:t.activetitle==e},on:{click:function(i){t.clkTitle2(e,i,n)}}},[t._v(t._s(e.name))])}),i("span",{staticClass:"titleline2",style:t.titleline})],2)])]),i("van-pull-refresh",{attrs:{disabled:t.refreshFlag},on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[i("van-list",{attrs:{finished:t.finished},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[t._l(t.cdataList,function(e,n){return i("ul",{key:n,staticClass:"itemc"},[i("li",[i("img",{attrs:{src:e.head,alt:""}}),i("span",[t._v(t._s(e.name))]),i("p",[t._v(t._s(e.headType))])]),i("li",[t._v("\n          ["+t._s(e.textType)+"] "+t._s(e.content)+"\n        ")]),i("li",[i("span",[t._v(t._s(e.addtime))]),i("b",[t._v(t._s(e.talkman))]),i("span",[t._v(t._s(e.updatetime))]),i("p",[t._v(t._s(e.num)+"回帖")])])])}),t.finished?i("div",{staticClass:"nomore"},[t._v("没有更多数据了")]):t._e()],2)],1)],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{calss:"div1"}},[i("span",[t._v("圈圈")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"div2"},[i("i",{staticClass:"iconfont icon-search"})])}],s=(i("cadf"),i("551c"),i("097d"),{name:"circles",data:function(){return{headList:[],titleList:[{name:"最新回复"},{name:"热帖"},{name:"最新发表"},{name:"精华"}],cdataList:[],uphide:"",titleparstyle:"",titleline:"",activetitle:"",headActive:"",scrollTop:"",refreshFlag:!1,loading:!1,finished:!1,isLoading:!1,sint:""}},created:function(){var t=this;this.activetitle=this.titleList[0],this.headList=[{id:1,name:"畅谈",num:"4768",icon:"coupon"},{id:2,name:"极客圈",num:"168",icon:"card"},{id:3,name:"Win10手机圈",num:"68",icon:"hot"},{id:4,name:"Win10圈",num:"124",icon:"gift-card"},{id:5,name:"安卓圈",num:"432",icon:"shop-collect"},{id:6,name:"IOS圈",num:"402",icon:"credit-pay"},{id:7,name:"软媒产品",num:"39",icon:"underway"},{id:8,name:"站务处理",num:"22",icon:"warn"},{id:9,name:"咨询投递",num:"0",icon:"checked"}],this.cdataList=[{id:"1",name:"哈哈",content:"《海岛大亨6》PC版跳票至2019年1月",headType:"畅谈",textType:"杂谈",head:"images/l1.jpg",addtime:"12:59",updatetime:"13:12",num:"290",talkman:"嘿嘿"},{id:"2",name:"祖国的花朵",content:"酷派Mega 5A发布",headType:"IOS圈",textType:"windows",head:"images/l2.jpg",addtime:"09:12",updatetime:"10:12",num:"2",talkman:"我是谁"},{id:"3",name:"铁壁阿童木",content:"国产红芯浏览器被指套壳谷歌Chrome，你怎么看？",headType:"畅谈",textType:"安卓",head:"images/l3.jpg",addtime:"18:45",updatetime:"19:12",num:"10",talkman:"明天是几号"},{id:"4",name:"铁壁阿童木",content:"国产红芯浏览器被指套壳谷歌Chrome，你怎么看？",headType:"畅谈",textType:"安卓",head:"images/l3.jpg",addtime:"18:45",updatetime:"19:12",num:"10",talkman:"明天是几号"},{id:"5",name:"铁壁阿童木",content:"国产红芯浏览器被指套壳谷歌Chrome，你怎么看？",headType:"畅谈",textType:"安卓",head:"images/l3.jpg",addtime:"18:45",updatetime:"19:12",num:"10",talkman:"明天是几号"},{id:"6",name:"铁壁阿童木",content:"国产红芯浏览器被指套壳谷歌Chrome，你怎么看？",headType:"畅谈",textType:"安卓",head:"images/l3.jpg",addtime:"18:45",updatetime:"19:12",num:"10",talkman:"明天是几号"},{id:"7",name:"铁壁阿童木",content:"国产红芯浏览器被指套壳谷歌Chrome，你怎么看？",headType:"畅谈",textType:"安卓",head:"images/l3.jpg",addtime:"18:45",updatetime:"19:12",num:"10",talkman:"明天是几号"}],this.sint=setInterval(function(){t.scrollTop=window.circleScTop},1)},watch:{scrollTop:function(t){if(this.refreshFlag=!(t<=10),window.innerHeight+t>=document.body.scrollHeight-1){if(this.cdataList.length>=40)return;this.loading=!0,this.onLoadv()}}},mounted:function(){this.titlelineInit()},methods:{clkTitle2:function(t,e){var i=e.currentTarget,n=(i.parentNode.offsetLeft,i.offsetLeft),a=parseInt(this.getStyle(i,"width"));this.activetitle=t;var s=window.innerWidth;document.querySelector(".title1").scrollLeft=n-s/2,this.$store.state.xianpHeader.scrollLeft=n-s/2,this.titleline="width: ".concat(a-8,"px;transition:.3s ease;transform:translateX(").concat(n+4,"px)")},headCLK:function(t){console.log("id: ".concat(t))},titlelineInit:function(){this.$nextTick(function(){var t=document.querySelector(".titlec").querySelectorAll(".tcenter")[0];document.querySelector(".titleline2").setAttribute("style","transform:translateX(".concat(t.offsetLeft+4,"px); \n        width: ").concat(t.offsetWidth-8,"px;"))})},onLoadv:function(){var t=this;setTimeout(function(){for(var e=0;e<10;e++)t.cdataList.push(t.cdataList[e]);t.loading=!1,t.cdataList.length>=40&&(t.finished=!0)},500)},onRefresh:function(){var t=this;setTimeout(function(){t.$toast("刷新成功"),t.isLoading=!1},500)},getStyle:function(t,e){var i;return i=e?window.getComputedStyle(t,!1)[e]:window.getComputedStyle(t,!1),i},updated:function(){this.titlelineInit()},activated:function(){this.titlelineInit()},beforeDestroy:function(){clearInterval(this.sint)}}}),c=s,l=(i("24b3"),i("2877")),o=Object(l["a"])(c,n,a,!1,null,null,null);o.options.__file="circles.vue";e["default"]=o.exports},a09e:function(t,e,i){}}]);
//# sourceMappingURL=chunk-5a1b.de33c469.js.map