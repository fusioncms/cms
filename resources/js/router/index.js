import Router from 'vue-router'
import Vue from 'vue'
import { before, resolve, after } from '@/router/hooks'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: window.config.path,
    routes: [
        {
            path: '/',
            component: () => import('@/pages/Dashboard'),
            name: 'dashboard',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },

        {
            path: '/login',
            component: () => import('@/pages/Auth/Login'),
            name: 'login',
            meta: {
                requiresAuth: false,
                layout: 'error'
            }
        },

        {
            path: '/insight',
            component: () => import('@/pages/SEO/Insight'),
            name: 'insight',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            },
        },

        {
            path: '/blueprints',
            component: () => import('@/pages/Blueprints/Index'),
            name: 'blueprints',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },

        {
            path: '/blueprints/:blueprint/edit',
            component: () => import('@/pages/Blueprints/Edit'),
            name: 'blueprints.edit',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },

        {
            path: '/taxonomies',
            component: () => import('@/pages/Taxonomies/Index'),
            name: 'taxonomies',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/taxonomies/create',
            component: () => import('@/pages/Taxonomies/Create'),
            name: 'taxonomies.create',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/taxonomies/:taxonomy/edit',
            component: () => import('@/pages/Taxonomies/Edit'),
            name: 'taxonomies.edit',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/navigation',
            component: () => import('@/pages/Navigation/Index'),
            name: 'navigation',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/navigation/create',
            component: () => import('@/pages/Navigation/Create'),
            name: 'navigation.create',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/navigation/:navigation/edit',
            component: () => import('@/pages/Navigation/Edit'),
            name: 'navigation.edit',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/navigation/:navigation/nodes',
            component: () => import('@/pages/Nodes/Index'),
            name: 'navigation.nodes',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/navigation/:navigation/nodes/:node/edit',
            component: () => import('@/pages/Nodes/Edit'),
            name: 'navigation.nodes.edit',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/matrices',
            component: () => import('@/pages/Matrices/Index'),
            name: 'matrices',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/matrices/create',
            component: () => import('@/pages/Matrices/Create'),
            name: 'matrices.create',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/matrices/:matrix/edit',
            component: () => import('@/pages/Matrices/Edit'),
            name: 'matrices.edit',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/single/:single',
            component: () => import('@/pages/Singles/Index'),
            name: 'single.index',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/single/:single/edit',
            component: () => import('@/pages/Singles/Edit'),
            name: 'single.edit',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/collection/:collection',
            component: () => import('@/pages/Collections/Index'),
            name: 'collection.index',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/collection/:collection/create',
            component: () => import('@/pages/Collections/Create'),
            name: 'collection.create',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/collection/:collection/:id/edit',
            component: () => import('@/pages/Collections/Edit'),
            name: 'collection.edit',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/taxonomies/:taxonomy',
            component: () => import('@/pages/Terms/Index'),
            name: 'terms.index',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/taxonomies/:taxonomy/create',
            component: () => import('@/pages/Terms/Create'),
            name: 'terms.create',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/taxonomies/:taxonomy/:id/edit',
            component: () => import('@/pages/Terms/Edit'),
            name: 'terms.edit',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/fieldsets',
            component: () => import('@/pages/Fieldsets/Index'),
            name: 'fieldsets',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/fieldsets/create',
            component: () => import('@/pages/Fieldsets/Create'),
            name: 'fieldsets.create',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/fieldsets/:fieldset/edit',
            component: () => import('@/pages/Fieldsets/Edit'),
            name: 'fieldsets.edit',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/forms',
            component: () => import('@/pages/Forms/Index'),
            name: 'forms',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/forms/create',
            component: () => import('@/pages/Forms/Create'),
            name: 'forms.create',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/forms/:form/edit',
            component: () => import('@/pages/Forms/Edit'),
            name: 'forms.edit',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/inbox',
            component: () => import('@/pages/Inbox/Index'),
            name: 'inbox',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/users',
            component: () => import('@/pages/Users/Index'),
            name: 'users',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/users/create',
            component: () => import('@/pages/Users/Create'),
            name: 'users.create',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/users/:user/edit',
            component: () => import('@/pages/Users/Edit'),
            name: 'users.edit',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/users/:user',
            component: () => import('@/pages/Users/Show'),
            name: 'users.show',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/users/:role',
            component: () => import('@/pages/Users/Index'),
            name: 'users.role',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/roles',
            component: () => import('@/pages/Roles/Index'),
            name: 'roles',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/roles/create',
            component: () => import('@/pages/Roles/Create'),
            name: 'roles.create',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/roles/:role/edit',
            component: () => import('@/pages/Roles/Edit'),
            name: 'roles.edit',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/roles/:role',
            component: () => import('@/pages/Roles/Show'),
            name: 'roles.show',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/permissions',
            component: () => import('@/pages/Permissions'),
            name: 'permissions',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/settings',
            component: () => import('@/pages/Settings/Index'),
            name: 'settings',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            }
        },
        {
            path: '/settings/:group',
            component: () => import('@/pages/Settings/Edit'),
            name: 'setting.group',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            }
        },
        {
            path: '/theme',
            component: () => import('@/pages/Theme'),
            name: 'theme',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            }
        },
        {
            path: '/customize',
            component: () => import('@/pages/Customize'),
            name: 'customize',
            meta: {
                requiresAuth: true,
                layout: 'blank',
            }
        },
        {
            path: '/files',
            component: () => import('@/pages/FileManager/Index'),
            name: 'file-manager.index',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            }
        },
        {
            path: '/files/:uuid',
            component: () => import('@/pages/FileManager/Show'),
            name: 'file-manager.show',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            }
        },
        {
            path: '/logs',
            component: () => import('@/pages/Logs/Index'),
            name: 'logs.index',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },

        {
            path: '/backups',
            component: () => import('@/pages/Backups/Index'),
            name: 'backups',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },

        {
            path: '/backups/:backup',
            component: () => import('@/pages/Backups/Show'),
            name: 'backups.show',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },

        {
            path: '/scripts',
            component: () => import('@/pages/Scripts/Index'),
            name: 'scripts',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/scripts/create',
            component: () => import('@/pages/Scripts/Create'),
            name: 'scripts.create',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/scripts/:script/edit',
            component: () => import('@/pages/Scripts/Edit'),
            name: 'scripts.edit',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },

        {
            path: '/addons',
            component: () => import('@/pages/Addons'),
            name: 'addons',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },

        {
            path: '/updates',
            component: () => import('@/pages/Updates/Index'),
            name: 'updates',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },

        {
            path: '/styleguide',
            component: () => import('@/pages/Styleguide/Index'),
            name: 'styleguide',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },

        {
            path: '/styleguide/tables',
            component: () => import('@/pages/Styleguide/Tables'),
            name: 'styleguide.tables',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },

        {
            path: '/403',
            component: () => import('@/pages/403'),
            name: '403',
            meta: {
                layout: 'error'
            }
        },

        {
            path: '/404',
            component: () => import('@/pages/404'),
            name: '404',
            meta: {
                layout: 'error'
            }
        },

        {
            path: '*',
            redirect: '/404'
        },
    ],
})

router.beforeEach(before)
router.beforeResolve(resolve)
router.afterEach(after)

export default router
