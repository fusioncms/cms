(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{KgSb:function(t,e,a){"use strict";a.r(e);var s={name:"address-fieldtype",data:function(){var t={},e=this.value;return t=this.value?{address1:e.address1||"",address2:e.address2||"",city:e.city||"",state:e.state||"",zip:e.zip||"",country:e.country||"",lat:e.lat||"",lng:e.lng||"",formatted_address:this.addressLookup||""}:{address1:"",address2:"",city:"",state:"",zip:"",country:"",lat:"",lng:"",formatted_address:""},{marker:null,data:t,mapError:""}},props:{field:{type:Object,required:!0},value:{required:!1,default:null}},computed:{apiKey:function(){return this.setting("maps_api_key")},hasAPIKey:function(){return this.apiKey&&""!=this.apiKey},mapID:function(){return this.field.handle+"_map"},addressLookup:function(){var t=this.data.address1+" "+this.data.address2;return this.data.city&&(t=t+", "+this.data.city),(this.data.state||this.data.zip)&&(t=t+", "+this.data.state+" "+this.data.zip),this.data.country&&(t=t+", "+this.data.country),t.replace(/ +/g," ")}},watch:{addressLookup:function(){this.locateAddress()},apiKey:function(t){var e=this;t&&""!=t&&this.$nextTick((function(){e.initializeMap()}))}},methods:{updateValue:function(t,e){this.data[e]=t,this.$emit("input",this.data)},initializeMap:function(){if(_.isUndefined(window.google)){var t=this,e=document.createElement("script");window.mapInit=function(){t.createMap()},e.setAttribute("src","https://maps.googleapis.com/maps/api/js?key=".concat(this.apiKey,"&callback=mapInit")),document.head.appendChild(e)}else this.createMap()},createMap:function(){_.isUndefined(window.google)||(this.map=new google.maps.Map(document.getElementById(this.mapID)),this.locateAddress())},locateAddress:_.debounce((function(){if(!_.isUndefined(window.google)){google.maps.event.trigger(this.map,"resize");var t=new google.maps.Geocoder,e=this,a=this.addressLookup;if(""==a||" "==a)return null!==this.marker&&this.marker.setMap(null),this.map.setCenter(new google.maps.LatLng(0,0)),this.map.setZoom(1),this.data.formatted_address="",this.data.lat="",void(this.data.lng="");t.geocode({address:a},(function(t,s){s===google.maps.GeocoderStatus.OK&&(e.map.setCenter(t[0].geometry.location),e.map.setZoom(16),e.data.formatted_address=t[0].formatted_address,e.data.lat=t[0].geometry.location.lat(),e.data.lng=t[0].geometry.location.lng(),""===a&&" "===a||(null!==e.marker&&e.marker.setMap(null),e.marker=new google.maps.Marker({map:e.map,position:t[0].geometry.location})))}))}}),500)}},i=a("KHd+"),n=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"px-2 mb-4"},[a("div",{staticClass:"form__label"},[t._v(t._s(t.field.name))]),t._v(" "),a("div",{staticClass:"row px-2"},[a("div",{staticClass:"w-1/2"},[a("p-input",{staticClass:"mb-2",attrs:{name:t.field.handle+"_address1",placeholder:"Address 1",value:t.data.address1},on:{input:function(e){return t.updateValue(e,"address1")}}}),t._v(" "),a("p-input",{staticClass:"mb-2",attrs:{name:t.field.handle+"_address2",placeholder:"Address 2",value:t.data.address2},on:{input:function(e){return t.updateValue(e,"address2")}}}),t._v(" "),a("p-input",{staticClass:"mb-2",attrs:{name:t.field.handle+"_city",placeholder:"City",value:t.data.city},on:{input:function(e){return t.updateValue(e,"city")}}}),t._v(" "),a("p-input",{staticClass:"mb-2",attrs:{name:t.field.handle+"_state",placeholder:"State",value:t.data.state},on:{input:function(e){return t.updateValue(e,"state")}}}),t._v(" "),a("p-input",{staticClass:"mb-2",attrs:{name:t.field.handle+"_zip",placeholder:"ZIP",value:t.data.zip},on:{input:function(e){return t.updateValue(e,"zip")}}}),t._v(" "),a("p-input",{staticClass:"mb-2",attrs:{name:t.field.handle+"_country",placeholder:"Country",value:t.data.country},on:{input:function(e){return t.updateValue(e,"country")}}})],1),t._v(" "),a("div",{staticClass:"w-1/2 pl-6"},[a("div",{staticClass:"h-full rounded",attrs:{id:t.mapID}},[t.mapError?a("div",{staticClass:"bg-gray-100 rounded shadow p-3",domProps:{innerHTML:t._s(t.mapError)}}):t._e(),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:0==t.hasAPIKey,expression:"hasAPIKey == false"}],staticClass:"bg-gray-100 rounded shadow p-3"},[t._m(0),t._v(" "),a("p",[t._v("Once you've obtained one, please visit the "),a("router-link",{attrs:{to:"/settings/google_maps"}},[t._v("Google Maps settings page")]),t._v(" to enter your API key.")],1)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("A "),e("a",{attrs:{href:"https://developers.google.com/maps/documentation/javascript/get-api-key",target:"_blank"}},[this._v("Google Maps API key")]),this._v(" is required in order to view the map component and retrieve latitude and longitude coordinates for your address.")])}],!1,null,null,null);e.default=n.exports}}]);