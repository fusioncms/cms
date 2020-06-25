let filesize = function(value) {
	let thresh = 1000

	if (Math.abs(value) < thresh) {
	    return value + ' B'
	}

	let index = -1
	let units = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

	do {
	    value /= thresh
	    ++index
	} while (Math.abs(value) >= thresh && index < units.length - 1)

	return value.toFixed(1) + ' ' + units[index]
}


export default {
	props: {
		accept: {
			type: String,
			required: false,
			default: ''
		}
	},

	filters: {
        bytes(value) {
            return filesize(value)
        }
    },

	computed: {
        acceptRegex() {
            let regex = this.accept
				.split(',')
				.filter((item) => !_.isEmpty(item))
				.map((item) => `\\.${item.trim('.')}`)
				.join('|')

        	return RegExp(regex, 'i')
        }
    },

	methods: {
		filesize(value) {
			return filesize(value)
		},

		validExtension(file) {
			if (_.isEmpty(this.accept)) {
				return true;
			}

			return this.acceptRegex.exec(file.name) !== null
		}
	}
}