(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"1tct":function(t,e,s){"use strict";s.r(e);var i={name:"replicator-fieldtype-settings",mixins:[s("EACl").a],mounted:function(){var t=this;_.has(this.settings,"sections")||(this.settings.replicator?axios.get("/api/replicators/".concat(this.settings.replicator)).then((function(e){t.$set(t.settings,"sections",e.data.data.sections)})):this.settings.sections=[])},created:function(){this.$store.commit("fieldtypes/setExcluded",["replicator"])},destroyed:function(){this.$store.commit("fieldtypes/setExcluded",[])}},n=s("KHd+"),c=Object(n.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("section-builder",{model:{value:t.settings.sections,callback:function(e){t.$set(t.settings,"sections",e)},expression:"settings.sections"}})],1)}),[],!1,null,null,null);e.default=c.exports},EACl:function(t,e,s){"use strict";e.a={props:{value:{type:Object,required:!0}},computed:{settings:{get:function(){return this.value.settings||{}},set:function(t){this.$set(this.value.settings,t)}},errors:function(){return this.value.errors||{}}}}}}]);