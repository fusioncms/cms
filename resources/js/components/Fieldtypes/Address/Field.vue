<template>
    <ui-field-group
        :name="field.handle"
        :fieldId="`${field.handle}-field`"
        :label="field.name"
        :help="field.help">
            <div class="row" v-if="model">
                <div class="col md:w-1/2">
                    <ui-input-group
                        :name="field.handle + '_address1'"
                        :required="field.required"
                        label="Address 1"
                        placeholder="Address 1"
                        hide-label
                        v-model="model.address1"
                        :hasError="hasError(`${field.handle}.address1`)"
                        :errorMessage="errorMessage(`${field.handle}.address1`)">
                    </ui-input-group>
                </div>
                <div class="col md:w-1/2">
                    <ui-input-group
                        label="Address 2"
                        hide-label
                        :name="field.handle + '_address2'"
                        placeholder="Address 2"
                        v-model="model.address2"
                        :hasError="hasError(`${field.handle}.address2`)"
                        :errorMessage="errorMessage(`${field.handle}.address2`)">
                    </ui-input-group>
                </div>

                <div class="col md:w-1/3">
                    <ui-input-group
                        :name="field.handle + '_city'"
                        :required="field.required"
                        label="City"
                        placeholder="City"
                        hide-label
                        v-model="model.city"
                        :hasError="hasError(`${field.handle}.city`)"
                        :errorMessage="errorMessage(`${field.handle}.city`)">
                    </ui-input-group>
                </div>
                <div class="col md:w-1/3">
                    <ui-input-group
                        :name="field.handle + '_state'"
                        :required="field.required"
                        label="State"
                        placeholder="State"
                        hide-label
                        v-model="model.state"
                        :hasError="hasError(`${field.handle}.state`)"
                        :errorMessage="errorMessage(`${field.handle}.state`)">
                    </ui-input-group>
                </div>
                <div class="col md:w-1/3">
                    <ui-input-group
                        :name="field.handle + '_zip'"
                        :required="field.required"
                        label="Zip Code"
                        placeholder="Zip Code"
                        hide-label
                        v-model="model.zip"
                        :hasError="hasError(`${field.handle}.zip`)"
                        :errorMessage="errorMessage(`${field.handle}.zip`)">
                    </ui-input-group>
                </div>
                <div class="col w-full">
                    <ui-input-group
                        label="Country"
                        hide-label
                        :name="field.handle + '_country'"
                        placeholder="Country"
                        v-model="model.country"
                        :hasError="hasError(`${field.handle}.country`)"
                        :errorMessage="errorMessage(`${field.handle}.country`)">
                    </ui-input-group>
                </div>
            </div>

            <div class="h-full rounded" :id="mapID">
                <div class="bg-gray-100 rounded shadow p-3" v-if="mapError" v-html="mapError"></div>
            </div>

            <div class="help" v-show="hasAPIKey == false">
                <p>A <a href="https://developers.google.com/maps/documentation/javascript/get-api-key" target="_blank">Google Maps API key</a> is required in order to view the map component and retrieve latitude and longitude coordinates for your address. 
                Once you've obtained one, please visit the <router-link to="/settings/google_maps">Google Maps settings page</router-link> to enter your API key.</p>
            </div>
        </div>
    </ui-field-group>
</template>

<script>
    import FieldMixin from '@/mixins/fieldtypes/field'

    export default {
        name: 'address-fieldtype',

        mixins: [FieldMixin],

        data() {
            return {
                map: null,
                marker: null,
                mapError: '',
                help: '<p>A <a href="https://developers.google.com/maps/documentation/javascript/get-api-key" target="_blank">Google Maps API key</a> is required in order to view the map component and retrieve latitude and longitude coordinates for your address.</p><p>Once you have obtained one, please visit the <router-link to="/settings/google_maps">Google Maps settings page</router-link> to enter your API key.</p>'

            }
        },

        computed: {
            apiKey() {
                return this.setting('maps_api_key')
            },

            hasAPIKey() {
                return (this.apiKey && this.apiKey != '')
            },

            hasGMaps() {
                return ! _.isUndefined(window.google)
            },

            mapID() {
                return this.field.handle + '_map'
            }
        },

        watch: {
            model: {
                deep: true,
                handler(value) {
                    this.locateAddress()
                }
            },

            apiKey(value) {
                this.$nextTick(() => {
                    this.initializeMap()
                })
            }
        },

        methods: {
            initializeMap() {
                if (!_.isUndefined(window.google)) {
                    this.createMap()
                } else {
                    let mapScript = document.createElement('script')

                    window.mapInit = () => this.createMap()

                    mapScript.setAttribute('src', `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}&callback=mapInit`)
                    document.head.appendChild(mapScript)
                }
            },

            createMap() {
                this.map = new google.maps.Map(
                    document.getElementById(this.mapID))

                this.locateAddress()
            },

            locateAddress: _.debounce(function() {
                if (_.isUndefined(window.google)) return

                google.maps.event.trigger(this.map, 'resize')

                let geocoder = new google.maps.Geocoder()
                let address = _.trim(Object.values(this.model).join(' '))
                let zoom = 16;

                if (!address) {
                    if (this.marker !== null) {
                        this.marker.setMap(null);
                    }

                    this.map.setCenter(new google.maps.LatLng(0, 0))
                    this.map.setZoom(1)

                    this.model.formatted_address = ''
                    this.model.lat = ''
                    this.model.lng = ''

                    return
                }

                geocoder.geocode({ address }, (results, status) => {
                    if (status === google.maps.GeocoderStatus.OK) {
                        this.map.setCenter(results[0].geometry.location)
                        this.map.setZoom(zoom)

                        this.model.formatted_address = results[0].formatted_address
                        this.model.lat = results[0].geometry.location.lat()
                        this.model.lng = results[0].geometry.location.lng()

                        if (address) {
                            if (this.marker !== null) {
                                this.marker.setMap(null)
                            }

                            this.marker = new google.maps.Marker({
                                map: this.map,
                                position: results[0].geometry.location
                            })
                        }
                    }
                })
            }, 1500)
        },

        created() {
            if (_.isEmpty(this.value)) {
                this.model = {
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
        }
    }
</script>
