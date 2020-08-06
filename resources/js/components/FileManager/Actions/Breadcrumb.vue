<template>
	<p-breadcrumbs>
		<p-breadcrumb  v-for="(breadcrumb, index) in breadcrumbs" :key="breadcrumb.name" @click="navigate(breadcrumb)" :divider="index > 0">
			{{ breadcrumb.name }}
		</p-breadcrumb>
	</p-breadcrumbs>
</template>

<script>
	export default {
		name: 'file-manager-breadcrumb-action',

		mixins: [
			require('../../../mixins/filebrowser').default,
		]
	}
</script>