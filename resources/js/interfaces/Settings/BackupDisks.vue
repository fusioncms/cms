<template>
	<div class="row">
	    <div class="content-container">
			<h3>Coming Soon</h3>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	export default {
		name: 'settings-backup-disks',

		computed: {
			...mapGetters({
				disks: 'disks/getDisks',
			})
		},

		created() {
            this.$store.dispatch('disks/fetchDisks')
        },
	}
</script>