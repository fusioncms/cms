<template>
    <div class="blueprint">
        <div class="blueprint__row row">
            <blueprint-area
                v-model="form.sections"
                :placements="placements"
                area="body"
                title="Body">
            </blueprint-area>

            <blueprint-area
                v-model="form.sections"
                class="blueprint__col--sidebar"
                :placements="placements"
                area="sidebar"
                title="Sidebar">
            </blueprint-area>
        </div>

        <ui-modal name="delete_section" title="Delete" >
            <p>Are you sure you want to permenantly delete this section and related fields?</p>
            <template slot="footer">
                <ui-button v-modal:delete_section @click="remove" variant="danger" class="ml-3">Delete</ui-button>
                <ui-button v-modal:delete_section variant="secondary">Cancel</ui-button>
            </template>
        </ui-modal>
    </div>
</template>

<script>
 export default {
     name: 'blueprint',

     props: {
         placements: {
             type: Array
         },

         form: {
             type: Object,
             required: true,
         }
     },

     methods: {
         remove() {
             const index = this.$store.getters['blueprint/getRemoveIndex'];
             if (this.form.sections.length > 0)
                 this.form.sections.splice(index, 1);
         }
     }
 }
</script>
