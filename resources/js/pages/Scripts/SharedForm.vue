<template>
    <form-container>
        <portal to="actions">
            <div class="buttons">
                <ui-button v-if="$mq != 'sm'" :to="{ name: 'scripts' }" variant="secondary">Go Back</ui-button>
                <ui-button type="submit" @click.prevent="$parent.submit" variant="primary" :disabled="!form.hasChanges || loading">Save</ui-button>
            </div>
        </portal>

        <section-card title="Loading..." v-show="loading"></section-card>
        <div v-show="! loading">
            <section-card title="General Information" description="General information about this script and what it does.">
                <ui-input-group
                    name="name"
                    label="Name"
                    help="What should this script be called?"
                    autocomplete="off"
                    autofocus
                    required
                    :has-error="form.errors.has('name')"
                    :error-message="form.errors.get('name')"
                    v-model="form.name">
                </ui-input-group>

                <ui-textarea-group
                    name="description"
                    label="Description"
                    help="Give a short description of what this script does."
                    autocomplete="off"
                    :has-error="form.errors.has('description')"
                    :error-message="form.errors.get('description')"
                    v-model="form.description">
                </ui-textarea-group>
            </section-card>

            <section-card title="Function" description="The source code and placement of the script.">
                <!-- <ui-textarea-group
                     name="code"
                     label="Source Code"
                     help="The source code of the script. Must include opening and closing script tags."
                     autocomplete="off"
                     :has-error="form.errors.has('code')"
                     :error-message="form.errors.get('code')"
                     v-model="form.code">
                     </ui-textarea-group> -->

                <ui-field-group
                    name="code"
                    fieldId="code"
                    label="Source Code"
                    help="The source code of the script. Must include opening and closing script tags."
                    :has-error="form.errors.has('code')"
                    :error-message="form.errors.get('code')">

                    <div id="code-brace" class="border rounded"></div>
                </ui-field-group>

                <ui-radio-group
                    inline
                    label="Location"
                    :has-error="form.errors.has('location')"
                    :error-message="form.errors.get('location')">
                    <ui-radio id="location_head" v-model="form.location" name="location" native-value="head">Head</ui-radio>
                    <ui-radio id="location_body" v-model="form.location" name="location" native-value="body">Body</ui-radio>
                </ui-radio-group>
            </section-card>

            <section-card title="Trigger" description="Configure which pages this script should trigger on.">
                <ui-radio-group
                    inline
                    label="Trigger on pages..."
                    :has-error="form.errors.has('trigger_on')"
                    :error-message="form.errors.get('trigger_on')">
                    <ui-radio id="trigger_all" v-model="form.trigger_on" name="trigger_on" native-value="all">All</ui-radio>
                    <ui-radio id="trigger_only" v-model="form.trigger_on" name="trigger_on" native-value="only">Only</ui-radio>
                    <ui-radio id="trigger_except" v-model="form.trigger_on" name="trigger_on" native-value="except">Except</ui-radio>
                </ui-radio-group>

                <ui-input-group
                    v-if="form.trigger_on !== 'all'"
                    name="trigger_where"
                    label="Pattern"
                    help="Where the incoming request matches the given pattern."
                    autocomplete="off"
                    :has-error="form.errors.has('trigger_where')"
                    :error-message="form.errors.get('trigger_where')"
                    placeholder="example/*"
                    v-model="form.trigger_where">
                </ui-input-group>
            </section-card>
        </div>

        <portal to="sidebar-right">
            <div v-show="! loading">
                <sidebar id="script-sidebar">
                    <sidebar-section id="script_panel_status" tabindex="-1">
                        <ui-toggle
                            id="script-status"
                            name="status"
                            label="Status"
                            :help="form.status ? 'Toggle to disable this script.' : 'Toggle to enable this script.'"
                            :has-error="form.errors.has('status')"
                            :error-message="form.errors.get('status')"
                            v-model="form.status">
                        </ui-toggle>
                    </sidebar-section>

                    <status-card v-if="resource" :entry="resource" id="script_panel_status_card" tabindex="-1"></status-card>
                </sidebar>
            </div>
        </portal>
    </form-container>
</template>

<script>
    import ace from 'brace'
    import 'brace/theme/chrome'
    import 'brace/mode/html'

    export default {
        props: {
            form: {
                type: Object,
                required: true,
            },

            resource: {
                type: Object,
                required: false,
                default: () => {}
            },

            loading: {
                type: Boolean,
                required: false,
            }
        },

        data() {
            return {
                editor: null,
            }
        },

        mounted() {
            this.editor = ace.edit('code-brace')
            this.editor.setOptions({
                showPrintMargin: false,
                minLines: 5,
                maxLines: Infinity,
                theme: 'ace/theme/chrome'
            })

            this.editor.$blockScrolling = Infinity
            this.editor.setValue(this.form.code || '', -1)

            this.editor.session.setUseWrapMode(true)
            this.editor.session.setMode(`ace/mode/html`)
            this.editor.session.on('change', (d) => {
                this.form.code = this.editor.getValue()
                // this.$emit('input', this.editor.getValue())
            })
        }
    }
</script>