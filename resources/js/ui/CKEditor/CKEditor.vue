<template>
    <ckeditor :editor="editor"></ckeditor>
</template>

<script>
    import BalloonBlockEditor from '@ckeditor/ckeditor5-build-balloon-block';

    export default {
        name: 'ui-ckeditor',

        data() {
            return {
                editor: BalloonBlockEditor,
            }
        },
    }
</script>
