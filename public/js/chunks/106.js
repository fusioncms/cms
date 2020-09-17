(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{X4nO:function(t,e,s){"use strict";s.r(e),s.d(e,"getUserAndRoles",(function(){return o}));var a=s("L2JU");function r(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function i(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?r(Object(s),!0).forEach((function(e){n(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function n(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function o(t,e){axios.all([axios.get("/api/roles"),axios.get("/api/users/"+t)]).then(axios.spread((function(t,s){s=s.data.data,t=t.data.data,e(null,s,t,{name:s.name,email:s.email,status:s.status,role:s.roles[0].name,password:"",password_confirmation:""})})))}var d={computed:i(i({},Object(a.c)({currentUser:"auth/getUser"})),{},{endpoint:function(){if(this.user.id)return"/datatable/users/"+this.user.id+"/activities"},verified:function(){return!(!this.user.email_verified_at||"0000-00-00 00:00:00"==this.user.email_verified_at)}}),head:{title:function(){return{inner:this.user.name||"Loading..."}}},data:function(){return{user:{},roles:[]}},beforeRouteEnter:function(t,e,s){o(t.params.user,(function(t,e,a,r){s(t?function(e){e.$router.push("/users"),toast(t.toString(),"danger")}:function(t){t.user=e,t.roles=a,t.$emit("updateHead")})}))},methods:{destroy:function(t){var e=this;axios.delete("/api/users/"+t).then((function(t){toast("User successfully deleted.","success"),e.$router.push("/users")}))}}},u=s("KHd+"),c=Object(u.a)(d,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-page"},[s("portal",{attrs:{to:"title"}},[s("page-title",{attrs:{icon:"users"}},[t._v("User Profile - "+t._s(t.user.name))])],1),t._v(" "),s("portal",{attrs:{to:"actions"}},[s("ui-button",{key:"go-back-btn",attrs:{to:{name:"users"},variant:"secondary"}},[t._v("Go Back")]),t._v(" "),s("ui-button",{key:"edit-user-btn",attrs:{to:{name:"users.edit",params:{user:t.user.id}},variant:"primary"}},[t._v("Edit User")])],1),t._v(" "),s("section-card",{attrs:{title:"User Information",description:"General information about this user."}},[s("dl",{staticClass:"detail-list"},[s("dt",[t._v("Name")]),t._v(" "),s("dd",[t._v(t._s(t.user.name))]),t._v(" "),s("dt",[t._v("Email")]),t._v(" "),s("dd",[t._v(t._s(t.user.email))]),t._v(" "),s("dt",[t._v("Role")]),t._v(" "),s("dd",[t._v(t._s(t.user.roles?t.user.roles[0].label:"Loading..."))]),t._v(" "),s("dt",[t._v("Status")]),t._v(" "),s("dd",{staticClass:"flex"},[s("ui-status",{staticClass:"mr-2",attrs:{value:t.user.status}}),t._v(" "+t._s(t.user.status?"Enabled":"Disabled"))],1)])]),t._v(" "),s("section-card",{attrs:{title:"Account Activity",description:"Information on user account activity and stats."}},[s("dl",{staticClass:"detail-list"},[s("dt",[t._v("Registered")]),t._v(" "),s("dd",[s("ui-datetime",{attrs:{timestamp:t.user.created_at}})],1),t._v(" "),s("dt",[t._v("Verified")]),t._v(" "),s("dd",[t.verified?s("ui-datetime",{attrs:{timestamp:t.user.email_verified_at}}):s("span",[t._v("No")])],1),t._v(" "),s("dt",[t._v("Last Updated")]),t._v(" "),s("dd",[s("ui-datetime",{attrs:{timestamp:t.user.updated_at}})],1),t._v(" "),s("dt",[t._v("Last Login")]),t._v(" "),s("dd",[t.user.logged_in_at?s("ui-datetime",{attrs:{timestamp:t.user.logged_in_at}}):s("span",[t._v("Never")])],1),t._v(" "),s("dt",[t._v("Invalid Login Attempts")]),t._v(" "),s("dd",[t._v(t._s(t.user.invalid_logins))]),t._v(" "),t.user.invalidly_logged_in_at?s("dt",[t._v("Last Invalid Login")]):t._e(),t._v(" "),t.user.invalidly_logged_in_at?s("dd",[s("ui-datetime",{attrs:{timestamp:t.user.invalidly_logged_in_at}})],1):t._e(),t._v(" "),t.user.password_changed_at?s("dt",[t._v("Password Changed")]):t._e(),t._v(" "),t.user.password_changed_at?s("dd",[s("ui-datetime",{attrs:{timestamp:t.user.password_changed_at}})],1):t._e()])]),t._v(" "),s("section-card",{attrs:{title:"User Activity Feed",description:"See what this user has been doing around the site."}},[t.user.id?s("ui-table",{key:"activities-"+t.user.id,staticClass:"activities-table",attrs:{id:"activities",endpoint:t.endpoint,"sort-by":"created_at","sort-in":"desc","per-page":10},scopedSlots:t._u([{key:"description",fn:function(e){return[s("div",{staticClass:"flex items-center"},[s("div",{staticClass:"mr-4 w-3"},[e.record.properties.icon?s("fa-icon",{staticClass:"fa-fw",attrs:{icon:["fas",e.record.properties.icon]}}):s("fa-icon",{staticClass:"fa-xs fa-fw",attrs:{icon:["fas","circle"]}})],1),t._v("\n\n                    "+t._s(e.record.description)+"\n\n                    "),e.record.properties.link?s("router-link",{staticClass:"ml-2",attrs:{to:"/"+e.record.properties.link}},[s("fa-icon",{staticClass:"fa-fw fa-sm",attrs:{icon:["fas","link"]}}),t._v(" "),s("span",{staticClass:"sr-only"},[t._v("Link to related property")])],1):t._e()],1)]}},{key:"created_at",fn:function(t){return[s("ui-datetime",{attrs:{timestamp:t.record.created_at}})]}}],null,!1,3801163566)}):t._e()],1)],1)}),[],!1,null,null,null);e.default=c.exports}}]);