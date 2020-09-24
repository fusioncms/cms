<template>
	<ui-breadcrumbs>
		<ui-breadcrumb  v-for="(breadcrumb, index) in breadcrumbs" :key="breadcrumb.name" @click="navigate(breadcrumb)" :divider="index > 0">
			{{ breadcrumb.name }}
		</ui-breadcrumb>
	</ui-breadcrumbs>
</template>

<script>
	export default {
		name: 'file-manager-breadcrumb-action',

		mixins: [
			require('../../../mixins/filebrowser').default,
		]
	}
</script>