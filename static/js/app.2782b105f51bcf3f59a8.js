webpackJsonp([1],{"4bvI":function(t,a,o){"use strict";function s(t){o("kjIc")}var n=o("jvIw"),e=o("wgkN"),i=o("VU/8"),l=s,c=i(n.a,e.a,l,"data-v-4a16580e",null);a.a=c.exports},IJiV:function(t,a,o){"use strict";var s=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{attrs:{id:"app"}},[o("leftNav"),t._v(" "),o("div",{staticClass:"main"},[o("router-view")],1)],1)},n=[],e={render:s,staticRenderFns:n};a.a=e},IrKG:function(t,a,o){"use strict";a.a={}},M93x:function(t,a,o){"use strict";function s(t){o("bzXl")}var n=o("xJD8"),e=o("IJiV"),i=o("VU/8"),l=s,c=i(n.a,e.a,l,null,null);a.a=c.exports},NHnr:function(t,a,o){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=o("7+uW"),n=o("M93x"),e=o("YaEn"),i=o("zL8q"),l=o.n(i),c=o("q8zI");o.n(c);s.default.use(l.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:e.a,template:"<App/>",components:{App:n.a}})},PuKq:function(t,a,o){"use strict";var s=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("nav",{staticClass:"left-nav",attrs:{id:"nav"}},[o("div",[o("ul",[o("li",[o("i",{staticClass:"icon iconfont icon-goumai"}),t._v(" "),o("div",[t._v("收银")])]),t._v(" "),o("li",[o("i",{staticClass:"icon iconfont icon-dianpu"}),t._v(" "),o("div",[t._v("店铺")])]),t._v(" "),o("li",[o("i",{staticClass:"icon iconfont icon-hanbao"}),t._v(" "),o("div",[t._v("商品")])]),t._v(" "),o("li",[o("i",{staticClass:"icon iconfont icon-huiyuanqia"}),t._v(" "),o("div",[t._v("会员")])]),t._v(" "),o("li",[o("i",{staticClass:"icon iconfont icon-cart"}),t._v(" "),o("div",[t._v("统计")])]),t._v(" "),o("li",[o("i",{staticClass:"icon iconfont icon-gongnengjianyi"}),t._v(" "),o("div",[t._v("设置")])])])])])}],e={render:s,staticRenderFns:n};a.a=e},YaEn:function(t,a,o){"use strict";var s=o("7+uW"),n=o("/ocq"),e=o("4bvI");s.default.use(n.a),a.a=new n.a({routes:[{path:"/",name:"Pos",component:e.a}]})},acwa:function(t,a){},bzXl:function(t,a){},jvIw:function(t,a,o){"use strict";var s=o("bOdI"),n=o.n(s),e=o("mtWM"),i=o.n(e);a.a=n()({name:"pos",methods:{},data:function(){return{tableData:[],oftenGoods:[],type0Goods:[],type1Goods:[],type2Goods:[],type3Goods:[],totalCount:0,totalMoney:0}},created:function(){var t=this;i.a.get("http://jspang.com/DemoApi/oftenGoods.php").then(function(a){t.oftenGoods=a.data}).catch(function(t){console.log(t)}),i.a.get("http://jspang.com/DemoApi/typeGoods.php").then(function(a){console.log(a),t.type0Goods=a.data[0],t.type1Goods=a.data[1],t.type2Goods=a.data[2],t.type3Goods=a.data[3]}).catch(function(t){console.log(t)})},mounted:function(){var t=document.body.clientHeight;console.log(t),document.getElementById("orders").style.height=t+"px"}},"methods",{addOrderList:function(t){this.totalCount=0,this.totalMoney=0;for(var a=!1,o=0;o<this.tableData.length;o++)this.tableData[o].goodsId==t.goodsId&&(a=!0);if(a){this.tableData.filter(function(a){return a.goodsId==t.goodsId})[0].count++}else{var s={goodsId:t.goodsId,goodsImg:t.goodsImg,goodsName:t.goodsName,price:t.price,count:1};this.tableData.push(s)}this.getAllMoney()},delOrderList:function(t){this.tableData=this.tableData.filter(function(a){return a.goodsId!=t.goodsId}),this.getAllMoney()},delAllGoods:function(){this.tableData=[],this.tabscount=0,this.tabsMoney=0},checkout:function(){0!=this.totalCount?(this.tableData=[],this.totalCount=0,this.totalMoney=0,this.$message.success("结账成功")):this.$message.error("不能为空")},getAllMoney:function(){var t=this;this.totalCount=0,this.totalMoney=0,this.tableData&&this.tableData.forEach(function(a){t.totalCount+=a.count,t.totalMoney=t.totalMoney+a.price*a.count})}})},kjIc:function(t,a){},mcYC:function(t,a,o){"use strict";function s(t){o("acwa")}var n=o("IrKG"),e=o("PuKq"),i=o("VU/8"),l=s,c=i(n.a,e.a,l,"data-v-93f7389a",null);a.a=c.exports},q8zI:function(t,a){},wgkN:function(t,a,o){"use strict";var s=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"pos"},[o("el-row",[o("el-col",{staticClass:"order",attrs:{span:7,id:"orders"}},[o("el-tabs",[o("el-tab-pane",{attrs:{label:"点餐"}},[o("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[o("el-table-column",{attrs:{prop:"goodsName",label:"商品名称"}}),t._v(" "),o("el-table-column",{attrs:{prop:"count",label:"数量",width:"70"}}),t._v(" "),o("el-table-column",{attrs:{prop:"price",label:"金额",width:"70"}}),t._v(" "),o("el-table-column",{attrs:{label:"操作",width:"100",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(a){return[o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(o){t.delOrderList(a.row)}}},[t._v("删除")]),t._v(" "),o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(o){t.addOrderList(a.row)}}},[t._v("增加")])]}}])})],1),t._v(" "),o("div",{staticClass:"TabsDiv"},[o("small",[t._v("数量：")]),t._v(t._s(t.totalCount)+"个\n                        "),o("small",[t._v("金额：")]),t._v(t._s(t.totalMoney)+"元\n                    ")])],1),t._v(" "),o("div",{staticClass:"block"},[o("span",{staticClass:"wrapper"},[o("el-button",{attrs:{type:"danger"},on:{click:function(a){t.delAllGoods()}}},[t._v("全部删除")]),t._v(" "),o("el-button",{attrs:{type:"warning"},on:{click:function(a){t.checkout()}}},[t._v("结账")])],1)]),t._v(" "),o("el-tab-pane",{attrs:{label:"挂单"}}),t._v(" "),o("el-tab-pane",{attrs:{label:"外卖"}})],1)],1),t._v(" "),o("el-col",{attrs:{span:17}},[o("div",{staticClass:"often-goods"},[o("div",{staticClass:"title"},[t._v("常用商品")]),t._v(" "),o("div",{staticClass:"often-goods-list"},[o("ul",t._l(t.oftenGoods,function(a,s){return o("li",{key:s,on:{click:function(o){t.addOrderList(a)}}},[o("span",[t._v(t._s(a.goodsName))]),t._v(" "),o("span",{staticClass:"money"},[t._v(t._s(a.price))])])}))])]),t._v(" "),o("div",{staticClass:"goods-type"},[o("el-tabs",[o("el-tab-pane",{attrs:{label:"汉堡"}},[o("ul",{staticClass:"cookList"},t._l(t.type0Goods,function(a,s){return o("li",{key:s,on:{click:function(o){t.addOrderList(a)}}},[o("span",{staticClass:"foodImg"},[o("img",{attrs:{src:a.goodsImg,width:"100%"}})]),t._v(" "),o("span",{staticClass:"foodImg"},[t._v(t._s(a.goodsName))]),t._v(" "),o("span",{staticClass:"foodImg"},[t._v("￥"+t._s(a.price)+"元")])])}))]),t._v(" "),o("el-tab-pane",{attrs:{label:"小食"}},[o("ul",{staticClass:"cookList"},t._l(t.type1Goods,function(a,s){return o("li",{key:s,on:{click:function(o){t.addOrderList(a)}}},[o("span",{staticClass:"foodImg"},[o("img",{attrs:{src:a.goodsImg,width:"100%"}})]),t._v(" "),o("span",{staticClass:"foodImg"},[t._v(t._s(a.goodsName))]),t._v(" "),o("span",{staticClass:"foodImg"},[t._v("￥"+t._s(a.price)+"元")])])}))]),t._v(" "),o("el-tab-pane",{attrs:{label:"饮料"}},[o("ul",{staticClass:"cookList"},t._l(t.type2Goods,function(a,s){return o("li",{key:s,on:{click:function(o){t.addOrderList(a)}}},[o("span",{staticClass:"foodImg"},[o("img",{attrs:{src:a.goodsImg,width:"100%"}})]),t._v(" "),o("span",{staticClass:"foodImg"},[t._v(t._s(a.goodsName))]),t._v(" "),o("span",{staticClass:"foodImg"},[t._v("￥"+t._s(a.price)+"元")])])}))]),t._v(" "),o("el-tab-pane",{attrs:{label:"套餐"}},[o("ul",{staticClass:"cookList"},t._l(t.type3Goods,function(a,s){return o("li",{key:s,on:{click:function(o){t.addOrderList(a)}}},[o("span",{staticClass:"foodImg"},[o("img",{attrs:{src:a.goodsImg,width:"100%"}})]),t._v(" "),o("span",{staticClass:"foodImg"},[t._v(t._s(a.goodsName))]),t._v(" "),o("span",{staticClass:"foodImg"},[t._v("￥"+t._s(a.price)+"元")])])}))])],1)],1)])],1)],1)},n=[],e={render:s,staticRenderFns:n};a.a=e},xJD8:function(t,a,o){"use strict";var s=o("mcYC");a.a={name:"app",components:{leftNav:s.a}}}},["NHnr"]);
//# sourceMappingURL=app.2782b105f51bcf3f59a8.js.map