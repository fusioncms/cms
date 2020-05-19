export default {
	methods: {
		isAssignable(name) {
			return ! _.includes([], name)
		},

		isRemovable(name) {
			return ! _.includes(['developer', 'owner', 'admin', 'user', 'guest'], name);
		},

		hasPermissions(name) {
			return ! _.includes(['developer', 'owner'], name);
		}
	}
}