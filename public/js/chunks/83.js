(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{"96Cb":function(t,n,e){"use strict";e.r(n);var r={head:{title:function(){return{inner:"Blueprints"}}},data:function(){return{blueprints:[]}},computed:{groups:function(){return _.groupBy(this.blueprints,"group")}},beforeRouteEnter:function(t,n,e){axios.all([axios.get("/api/blueprints")]).then(axios.spread((function(t){e((function(n){n.blueprints=_.reject(t.data.data,(function(t){return 1==t.hidden}))}))})))}},i=e("KHd+"),u=Object(i.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("portal",{attrs:{to:"title"}},[e("page-title",{attrs:{icon:"map"}},[t._v("Blueprints")])],1),t._v(" "),t._l(t.groups,(function(n,r){return e("section-card",{key:r,attrs:{title:r}},[e("table",{staticClass:"table"},[e("tbody",t._l(n,(function(n){return e("tr",{key:n.name},[e("td",[e("router-link",{attrs:{to:{name:"blueprints.edit",params:{blueprint:n.id}}}},[t._v(t._s(n.name))])],1)])})),0)])])}))],2)}),[],!1,null,null,null);n.default=u.exports}}]);