<template>
    <div class="dashboard-links">
        <div class="row" v-if="links.length">
            <div class="flex items-stretch col w-full sm:w-1/2 xl:w-1/3 xxl:w-1/4" v-for="link in links" :key="link.handle">
                <div class="quicklink">
                    <router-link :to="link.admin_path" class="quicklink__link" :aria-label="link.name">
                        <div class="quicklink__icon">
                            <fa-icon :icon="['fas', (link.icon || 'pencil-alt')]"></fa-icon>
                        </div>

                        <div class="quicklink__text">
                            <h2 class="text-heading--sm">{{ link.name }}</h2>
                            <p v-if="link.description">{{ link.description }}</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            links: {
                type: Array,
                default: () => {
                    return []
                }
            }
        }
    }
</script>