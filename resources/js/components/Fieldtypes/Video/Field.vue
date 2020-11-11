<template>
    <div>
        <ui-field-group
            :name="field.handle"
            :fieldId="`${field.handle}-field`"
            :label="field.name"
            :help="field.help"
            :hasError="hasError(field.handle)"
            :errorMessage="errorMessage(field.handle)">

            <div class="input-group">
                <ui-input
                    class="field-input field"
                    :id="field.handle"
                    :name="field.handle"
                    :help="field.help"
                    :aria-describedby="field.help"
                    :hasError="hasError(field.handle)"
                    v-model="model">
                </ui-input>

                <ui-button icon v-modal:selection-modal>
                    <fa-icon :icon="['fas', 'plus-circle']"></fa-icon>
                    <span class="sr-only">Choose an existing video file</span>
                </ui-button>

                <ui-button icon @click="clear">
                    <fa-icon :icon="['fas', 'times']" class="mr-1"></fa-icon>
                    <span class="sr-only">Clear field</span>
                </ui-button>
            </div>
        </ui-field-group>

        <div v-if="isEmbeddedVideo">
            <ui-plyr :options="options">
                <video controls crossorigin>
                    <source :src="model" size="576">
                </video>
            </ui-plyr>
        </div>

        <div v-if="isYoutubeVideo">
            <ui-plyr :options="options">
                <div data-plyr-provider="youtube" :data-plyr-embed-id="youtube"></div>
            </ui-plyr>
        </div>

        <ui-modal name="selection-modal" title="Choose an existing video file">
            <ui-table :endpoint="endpoint" id="video-files" sort-by="name" sort-in="desc" :per-page="10">
                <template slot="name" slot-scope="table">
                    <ui-radio
                        :id="`selection-${table.record.id}`"
                        name="selection"
                        :native-value="table.record.url"
                        v-model="model">
                        {{ table.record.name }}
                    </ui-radio>
                </template>

                <template slot="bytes" slot-scope="table">
                    <span class="help">{{ table.record.bytes | bytes }}</span>
                </template>

                <template slot="extension" slot-scope="table">
                    <span class="help">{{ table.record.extension }}</span>
                </template>

                <template slot="created_at" slot-scope="table">
                    <ui-date :timestamp="table.record.created_at"></ui-date>
                </template>
            </ui-table>
        </ui-modal>
    </div>
</template>

<script>
    import FieldMixin from '@/mixins/fieldtypes/field'
    import FileHelper from '@/mixins/filehelper'
    import Plyr from 'plyr'

	export default {
		name: 'video-fieldtype',

        mixins: [FieldMixin, FileHelper],

        data() {
            return {
                endpoint: '/datatable/files/video',
                player: {},
                options: {
                    title: 'Preview',
                    // ratio: '16:9',
                    controls: [
                        'play-large',   // The large play button in the center
                        'restart',      // Restart playback
                        'play',         // Play/pause playback
                        'progress',     // The progress bar and scrubber for playback and buffering
                        'current-time', // The current time of playback
                        'duration',     // The full duration of the media
                        'mute',         // Toggle mute
                        'volume',       // Volume control
                        'captions',     // Toggle captions
                        'settings',     // Settings menu
                        'pip',          // Picture-in-picture (currently Safari only)
                        'airplay',      // Airplay (currently Safari only)
                        'fullscreen',   // Toggle fullscreen
                    ],
                    settings: ['quality', 'loop'],
                }
            }
        },

        computed: {
            isEmbeddedVideo() {
                return Boolean(this.model) && ! this.youtube
            },

            isYoutubeVideo() {
                return Boolean(this.model) && this.youtube
            },

            youtube() {
                if (this.model) {
                    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
                    let match = this.model.match(regExp)

                    if (match && match[2].length == 11) {
                        return match[2]
                    }
                }

                return false
            }
        },

		methods: {
            clear() {
                this.model = ''
            }
		}
	}
</script>