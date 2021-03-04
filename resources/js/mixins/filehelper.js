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
	data() {
		return {
			validExtensions: (this.accept || '')
		}
	},

	filters: {
		bytes(value) {
            return filesize(value)
        }
    },

    computed: {
        acceptRegex() {
            let regex = this.validExtensions
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

		filetype(value) {
			return value.split('/')[0]
		},

		validExtension(file) {
			if (_.isEmpty(this.validExtensions)) {
				return true;
			}

			return this.acceptRegex.exec(file.name) !== null
		},

		fileSrc(file, width = 100, height = 100, fit = 'crop') {
			switch(file.type) {
				case 'image':
					return `${file.url}?w=${width}&h=${height}&fit=${fit}&t=${this.$moment.utc(file.updated_at).format('X')}`
				default:
					return `/vendor/fusion/img/${file.type}-large.svg`
			}
		}
	}
}