<template>
    <ui-fieldset
        :label="field.name"
        :help="field.help">
            <div class="row">
                <ui-input-group
                    class="col md:w-1/2"
                    label="Address 1"
                    hide-label
                    :name="field.handle + '_address1'"
                    placeholder="Address 1"
                    :value="data.address1"
                    :required="field.required"
                    @input="updateValue($event, 'address1')">
                </ui-input-group>
                <ui-input-group
                    class="col md:w-1/2"
                    label="Address 2"
                    hide-label
                    :name="field.handle + '_address2'"
                    placeholder="Address 2"
                    :value="data.address2"
                    @input="updateValue($event, 'address2')">
                </ui-input-group>
                <ui-input-group
                    class="col md:w-1/3"
                    label="City"
                    hide-label
                    :name="field.handle + '_city'"
                    placeholder="City"
                    :value="data.city"
                    :required="field.required"
                    @input="updateValue($event, 'city')">
                </ui-input-group>
                <ui-input-group
                    class="col md:w-1/3"
                    label="State"
                    hide-label
                    :name="field.handle + '_state'"
                    placeholder="State"
                    :value="data.state"
                    :required="field.required"
                    @input="updateValue($event, 'state')">
                </ui-input-group>
                <ui-input-group
                    class="col md:w-1/3"
                    label="Zip Code"
                    hide-label
                    :name="field.handle + '_zip'"
                    placeholder="Zip Code"
                    :value="data.zip"
                    :required="field.required"
                    @input="updateValue($event, 'zip')">
                </ui-input-group>
                <ui-input-group
                    class="col"
                    label="Country"
                    hide-label
                    :name="field.handle + '_country'"
                    placeholder="Country"
                    :value="data.country"
                    @input="updateValue($event, 'country')">
                </ui-input-group>
            </div>
            <div class="h-full rounded" :id="mapID">
                <div class="bg-gray-100 rounded shadow p-3" v-if="mapError" v-html="mapError"></div>
            </div>
            <div class="help" v-show="hasAPIKey == false">
                <p>A <a href="https://developers.google.com/maps/documentation/javascript/get-api-key" target="_blank">Google Maps API key</a> is required in order to view the map component and retrieve latitude and longitude coordinates for your address. 
                Once you've obtained one, please visit the <router-link to="/settings/google_maps">Google Maps settings page</router-link> to enter your API key.</p>
            </div>
        </div>
    </ui-fieldset>
</template>

<script>
    export default {
        name: 'address-fieldtype',

        data() {
            let data = {}
            let value = this.value
            if (this.value) {
                data = {
                    address1: value.address1 || '',
                    address2: value.address2 || '',
                    city: value.city || '',
                    state: value.state || '',
                    zip: value.zip || '',
                    country: value.country || '',
                    lat: value.lat || '',
                    lng: value.lng || '',
                    formatted_address: this.addressLookup || '',
                }
            } else {
                data = {
                    address1: '',
                    address2: '',
                    city: '',
                    state: '',
                    zip: '',
                    country: '',
                    lat: '',
                    lng: '',
                    formatted_address: '',
                }
            }

            return {
                marker: null,
                data: data,
                mapError: '',
                help: '<p>A <a href="https://developers.google.com/maps/documentation/javascript/get-api-key" target="_blank">Google Maps API key</a> is required in order to view the map component and retrieve latitude and longitude coordinates for your address.</p><p>Once you have obtained one, please visit the <router-link to="/settings/google_maps">Google Maps settings page</router-link> to enter your API key.</p>'

            }
        },

        props: {
            field: {
                type: Object,
                required: true,
            },

            value: {
                default: null
            }
        },

        computed: {
            apiKey() {
                return this.setting('maps_api_key')
            },

            hasAPIKey() {
                return (this.apiKey && this.apiKey != '')
            },

            mapID() {
                return this.field.handle + '_map'
            },

            addressLookup: function() {
                let addressString = this.data.address1 + ' ' + this.data.address2

                if (this.data.city) {
                    addressString = addressString + ', ' + this.data.city;
                }

                if (this.data.state || this.data.zip) {
                    addressString = addressString + ', ' + this.data.state + ' ' + this.data.zip;
                }

                if (this.data.country) {
                    addressString = addressString + ', ' + this.data.country;
                }

                return addressString.replace(/ +/g, ' ');
            },
        },

        watch: {
            addressLookup: function() {
                this.locateAddress();
            },

            apiKey(value) {
                if (value && value != '') {
                    this.$nextTick(() => {
                        this.initializeMap()
                    })
                }
            }
        },

        methods: {
            updateValue(event, handle) {
                this.data[handle] = event
                this.$emit('input', this.data)
            },

            initializeMap() {
                if (_.isUndefined(window.google)) {
                    let vm = this
                    let mapScript = document.createElement('script')

                    window.mapInit = function() {
                        vm.createMap()
                    }

                    mapScript.setAttribute('src', `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}&callback=mapInit`)
                    document.head.appendChild(mapScript)
                } else {
                    this.createMap()
                }
            },

            createMap() {
                if (! _.isUndefined(window.google)) {
                    this.map = new google.maps.Map(document.getElementById(this.mapID));

                    this.locateAddress();
                }
            },

            locateAddress: _.debounce(
                function() {
                    if (_.isUndefined(window.google)) return;

                    google.maps.event.trigger(this.map, 'resize');

                    var geocoder = new google.maps.Geocoder();
                    var vm = this;
                    var address = this.addressLookup;
                    var zoom = 16;

                    if (address == '' || address == ' ') {
                        if (this.marker !== null) {
                            this.marker.setMap(null);
                        }

                        this.map.setCenter(new google.maps.LatLng(0, 0));
                        this.map.setZoom(1);

                        this.data.formatted_address = '';
                        this.data.lat = '';
                        this.data.lng = '';

                        return;
                    }

                    geocoder.geocode({ address }, function(results, status) {
                        if (status === google.maps.GeocoderStatus.OK) {
                            vm.map.setCenter(results[0].geometry.location);
                            vm.map.setZoom(zoom);

                            vm.data.formatted_address = results[0].formatted_address;
                            vm.data.lat = results[0].geometry.location.lat();
                            vm.data.lng = results[0].geometry.location.lng();

                            if (address !== '' || address !== ' ') {
                                if (vm.marker !== null) {
                                    vm.marker.setMap(null);
                                }

                                vm.marker = new google.maps.Marker({
                                    map: vm.map,
                                    position: results[0].geometry.location
                                });
                            }
                        }
                    });
                }, 500
            )
        },

        mounted() {
            console.log(this.field)
        }
    }
</script>
