<template>
    <div>
        <div class="buttons ml-1">
	    <div class="buttons__group">
                <ui-button icon v-modal:new-folder title="Create Folder">
		    <fa-icon class="icon" icon="folder"></fa-icon>
                </ui-button>

                <ui-button icon variant="primary" @click="$refs.uploader.openDZ()"  title="Upload File">
                    <fa-icon class="icon" icon="file"></fa-icon>
                </ui-button>
	    </div>
        </div>
        <file-uploader ref="uploader"></file-uploader>
    </div>
</template>

<script>
 import FileUploader  from '../FileUploader.vue'

 export default {
     name: 'file-manager-new-action',

     components: {
         'file-uploader':  FileUploader,
     }
 }
</script>
