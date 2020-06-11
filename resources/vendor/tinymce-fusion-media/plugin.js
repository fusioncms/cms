const FusionMedia = function(editor) {
}
const FusionMediaFilePickerCallback = function(tinyVue) {
	return function(callback, value, meta) {
		tinyVue.$on('fileSelected', function(file) {
			console.log(file.url);
			callback(file.url);
		});
		tinyVue.open();
		
	}
}

export { FusionMedia, FusionMediaFilePickerCallback };