<template>
	<div class="gallery-wrapper">
		<div
            class="gallery-item"
            :class="{ 'gallery-item--selected selectable--selected': isSelected, 'selectable': isSelectable }"
            @dblclick="$emit('dblclick')"
            :data-selection="form.id">

            <div class="h-full w-full text-gray-300 flex items-center justify-center">
            	<fa-icon :icon="['fas', 'clipboard']" class="fa-fw fa-3x"></fa-icon>
            </div>
		</div>

		<div class="gallery-subtitle">
			<span>{{ form.name }}</span>
		</div>

		<div class="gallery-text">
			<span class="text-gray-800 text-sm">{{ form.description }}</span>
		</div>

		<div class="gallery-text">
			{{ $moment(form.created_at).format('MMM Do, YYYY') }}
		</div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
		name: 'form-manager-form',

		props: {
			form: {
				type: Object,
				required: true,
			},

            isSelectable: {
            	type: Boolean,
            	default: true
            }
		},

		computed: {
            ...mapGetters({
                selected: 'formmanager/getSelected',
            }),

            isSelected() {
                return _.includes(this.selected, this.form.id)
            },
        }
    }
</script>