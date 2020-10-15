<template>
    <header class="header">
        <div class="header__container relative">
            <div class="header__toggle">
                <nav-toggle></nav-toggle>
            </div>

            <div class="header__logo">
                <router-link to="/" class="nav-logo" @click.native="onClick()">
                    <span class="nav-logo__image"></span>
                    <span class="nav-logo__text">
                        Fusion<span class="font-bold">CMS</span>
                    </span>
                </router-link>
            </div>

            <div class="header__account">
                <renderless-dropdown id="account-menu-button">
                    <div class="dropdown dropdown--right" slot-scope="props" :class="{'dropdown--open': props.isOpen}" v-click-outside="props.close">
                        <button class="nav-button nav-button--full" @click.prevent="props.toggle()">
                            <mq-layout mq="xl+">
                                <span>{{ greeting }}, <strong>{{ $user.name }}</strong></span>
                            </mq-layout>

                            <mq-layout mq="xl+">
                                <fa-icon icon="chevron-down" class="hidden lg:inline-block fa-fw ml-2"></fa-icon>
                            </mq-layout>

                            <mq-layout :mq="['sm', 'md', 'lg']">
                                <span class="sr-only">User Menu</span>
                                <fa-icon icon="ellipsis-v" class="inline-block lg:hidden fa-fw fa-lg"></fa-icon>
                            </mq-layout>
                        </button>

                        <div class="dropdown__menu">
                            <mq-layout :mq="['sm', 'md', 'lg']">
                                <ui-dropdown-item>
                                    <p class="mb-0">
                                        {{ greeting }}, <strong>{{ $user.name }}</strong>
                                    </p>
                                </ui-dropdown-item>
                            </mq-layout>

                            <ui-dropdown-link href="/" target="_blank" @click.native="onClick()">
                                <fa-icon icon="eye" class="icon"></fa-icon>
                                View website
                            </ui-dropdown-link>

                            <ui-dropdown-divider />

                            <ui-dropdown-link :to="'/users/' + $user.id" @click.native="onClick()">
                                <fa-icon icon="id-card" class="icon"></fa-icon>
                                View Profile
                            </ui-dropdown-link>

                            <ui-dropdown-link :to="'/users/' + $user.id + '/edit'" @click.native="onClick()">
                                <fa-icon icon="user-cog" class="icon"></fa-icon>
                                Edit Profile
                            </ui-dropdown-link>

                            <ui-dropdown-divider />

                            <ui-dropdown-link href="/logout">
                                <fa-icon icon="sign-out-alt" class="icon"></fa-icon>
                                Log out
                            </ui-dropdown-link>
                        </div>
                    </div>
                </renderless-dropdown>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'layout-header',

        props: {
            greeting: {
                type: String,
                default: 'Hello'
            }
        },
    }
</script>