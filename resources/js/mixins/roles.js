export default {
	methods: {
		isAssignable(name) {
			return ! _.includes(['guest'], name)
		},

		isRemovable(name) {
			return ! _.includes(['owner', 'admin', 'user', 'guest'], name);
		},

		hasPermissions(name) {
			return ! _.includes(['owner'], name);
		}
	}
}