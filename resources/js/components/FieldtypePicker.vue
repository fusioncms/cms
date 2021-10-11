<template>
    <div>
        <form class="grid" id="dropdownMenu" @submit.prevent>
            <input v-model="input_value" ref="something" type="text" class="mb-3" placeholder="Search for field...">
        </form>
        <div v-if="Object.keys(filtered('fields')).length" class="pb-3">Fields</div>
        <div class="grid grid-cols-3 lg:grid-cols-6 gap-3 pb-3">
            <ui-button
                v-for="(fieldtype, index) in filtered('fields')"
                :key="`add-${fieldtype.handle}`"
                class="flex items-center justify-center"
                @click.prevent="$emit('click', fieldtype)">

            <fa-icon :icon="fieldtype.icon" class="icon"></fa-icon>
            {{ fieldtype.name }}
        </ui-button>
        </div>
        <div v-if="Object.keys(filtered('fieldset')).length" class="pb-3">Fieldset</div>
        <div class="grid grid-cols-3 lg:grid-cols-6 gap-3">
            <ui-button
                v-for="(fieldtype, index) in filtered('fieldset')"
                :key="`add-${fieldtype.handle}`"
                class="flex items-center justify-center"
                @click.prevent="$emit('click', fieldtype)">

                <fa-icon :icon="fieldtype.icon" class="icon"></fa-icon>
                {{ fieldtype.name }}
            </ui-button>
        </div>
    </div>
</template>

<script>
 import { mapGetters } from 'vuex'

 export default {
     name: 'fieldtype-picker',

     props: ['value'],

     data() {
	 return {
             input_value: '',
             all: [],
             fuzzy_all: []
	 }
     },

     computed: {
         ...mapGetters({
             fieldtypes: 'fieldtypes/getFilteredFieldtypes'
         }),
         windowWidth() {
             return this.parentElement.clientWidth;
         },
         fuzzyFieldtypes() {
             if (this.input_value.length > 0) {
                 return this.fuzzy_all.reduce((object, item) => (object[item.obj.id] = item.obj, object), {});
             }
             else {
                 return this.fieldtypes;
             }
         },
     },

     methods: {
         filtered(item) {
             const { ['fieldset']: fieldset, ...rest } = this.fuzzyFieldtypes;
             if (item === 'fieldset')
                 return fieldset === undefined ? {} : {['fieldset']: fieldset};
             else
                 return rest;
         },

         setFuzzyScript() {
             let recaptchaScript = document.createElement('script');
             recaptchaScript.setAttribute('src', 'https://rawgit.com/farzher/fuzzysort/master/fuzzysort.js');
             document.head.appendChild(recaptchaScript);
         },
     },

     created() {
         this.$store.dispatch('fieldtypes/fetch')
         this.setFuzzyScript();
     },

     watch: {
         'fieldtypes': function() {
             this.all = Object.keys(this.fieldtypes).map(key => this.fieldtypes[key]);
         },
         'input_value': function() {
             if (this.input_value !== '') {
                 this.fuzzy_all = fuzzysort.go(this.input_value, this.all, {key:'id'}).slice(0, 5);
             }
         },
         'value': function() {
             this.value ? this.$refs.something.focus() : this.input_value = '';
         }
     }
 }
</script>
