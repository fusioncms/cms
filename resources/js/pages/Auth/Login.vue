<template>
	<div class="bg-gray-200 mx-auto h-full flex flex-1 flex-col items-center justify-center" style="transition: 0.1s;">
        <div id="login-form" class="w-full max-w-xs">
            <div class="text-center relative mb-10">
                <img src="/vendor/fusion/img/illustrations/login.svg" alt="Illustration">
            </div>

            <div class="card">
                <div class="card__body">
                    <div class="flex flex-col items-center leading-none mb-6">
                        <span class="mb-3 text-gray-600 text-sm font-bold ">Welcome to</span>
                        <span class="font-bold text-xxl">FusionCMS</span>
                    </div>

                    <form @submit.prevent="submit">
                        <p-input
                            name="email"
                            label="E-mail"
                            autocomplete="off"
                            :has-error="form.errors.has('email')"
                            :error-message="form.errors.get('email')"
                            autofocus
                            required
                            v-model="form.email"
                        ></p-input>

                        <p-input
                            name="password"
                            type="password"
                            label="Password"
                            autocomplete="off"
                            :has-error="form.errors.has('password')"
                            :error-message="form.errors.get('password')"
                            autofocus
                            required
                            v-model="form.password"
                        ></p-input>

                        <button
                            type="submit"
                            class="button button--primary"
                            @click.prevent="submit"
                        >Login</button>
                    </form>
                </div>
            </div>
        </div>

        <footer class="p-6 text-xs text-gray-600 flex flex-col items-center justify-center leading-loose md:leading-none">
            <span>Built with <fa-icon :icon="['fas', 'heart']" class="text-danger-200 mx-1"></fa-icon> + <fa-icon :icon="['fas', 'coffee']" class="text-gray-600 mx-1"></fa-icon> by the efelle team</span>
        </footer>
    </div>
</template>

<script>
	import Form from '@/services/Form'

	export default {
        name: 'login',

        head: {
            title() {
                return {
                    inner: 'Log In'
                }
            }
        },

        data() {
            return {
                form: new Form({
                    email: '',
                    password: '',
                })
            }
        },

		methods: {
            submit() {
                this.form.post('/login')
                    .then(response => {
                        if (!!this.$route.query.redirect)
                            location.href = this.$route.query.redirect
                        else
                            location.href = '/' + config.path
                    })
                    .catch(error   => {})
            }
        }
	}
</script>