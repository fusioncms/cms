<template>
    <div class="buttons ml-1">
		<div class="buttons__group">
			<ui-button icon @click.prevent="toggleView('list')" :disabled="view == 'list'" title="View by list">
				<fa-icon class="icon" icon="bars"></fa-icon>
			</ui-button>

			<ui-button icon @click.prevent="toggleView('grid')" :disabled="view == 'grid'"  title="View by grid">
				<fa-icon class="icon" icon="th-large"></fa-icon>
			</ui-button>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	export default {
		name: 'file-manager-view-action',

		computed: {
			...mapGetters({
				view: 'filemanager/getView',
			})
		},

		watch: {
			view(value) {
				this.fetchFilesAndDirectories()
			}
		},

		methods: {
			...mapActions({
				fetchFilesAndDirectories: 'filemanager/fetchFilesAndDirectories',
				toggleView: 'filemanager/toggleView',
			})
		}
	}
</script>