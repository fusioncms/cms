(self.webpackChunkfusioncms=self.webpackChunkfusioncms||[]).push([[5061],{2569:(t,s,e)=>{"use strict";e.d(s,{Z:()=>i});const i={props:{value:{type:Object,required:!0}},computed:{settings:{get:function(){return this.value.settings||{}},set:function(t){this.$set(this.value.settings,t)}},errors:function(){return this.value.errors||{}}}}},8848:(t,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>n});const i={name:"replicator-fieldtype-settings",mixins:[e(2569).Z],mounted:function(){var t=this;_.has(this.settings,"sections")||(this.settings.replicator?axios.get("/api/replicators/".concat(this.settings.replicator)).then((function(s){t.$set(t.settings,"sections",s.data.data.sections)})):this.settings.sections=[])},created:function(){this.$store.commit("fieldtypes/setExcluded",["replicator"])},destroyed:function(){this.$store.commit("fieldtypes/setExcluded",[])}};const n=(0,e(1900).Z)(i,(function(){var t=this,s=t.$createElement;return(t._self._c||s)("section-builder",{model:{value:t.settings.sections,callback:function(s){t.$set(t.settings,"sections",s)},expression:"settings.sections"}})}),[],!1,null,null,null).exports}}]);