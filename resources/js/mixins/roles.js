export default {
	methods: {
		isAssignable(name, level) {
			return ! _.includes(['guest'], name) && this.$level(level)
		},

		isRemovable(name, level) {
			return !_.includes(['owner', 'user', 'guest'], name) && this.$level(level)
		},

		hasPermissions(name) {
			return ! _.includes(['owner'], name);
		}
	}
}