import Router from 'vue-router'
import Vue from 'vue'
import { before, resolve, after } from './hooks'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: window.config.path,
    routes: [
        {
            path: '/',
            component: () => import('../pages/Dashboard'),
            name: 'dashboard',
            meta: {
                requiresAuth: true,
                layout: 'admin',
                permission: 'access.controlPanel'
            }
        },

        {
            path: '/login',
            component: () => import('../pages/Auth/Login'),
            name: 'login',
            meta: {
                requiresAuth: false,
                layout: 'error'
            }
        },

        {
            path: '/insight',
            component: () => import('../pages/SEO/Insight'),
            name: 'insight',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            },
        },

        {
            path: '/fieldsets',
            component: () => import('../pages/Fieldsets/Index'),
            name: 'fieldsets',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/fieldsets/create',
            component: () => import('../pages/Fieldsets/Create'),
            name: 'fieldsets.create',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/fieldsets/:fieldset/edit',
            component: () => import('../pages/Fieldsets/Edit'),
            name: 'fieldsets.edit',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/taxonomies',
            component: () => import('../pages/Taxonomies/Index'),
            name: 'taxonomies',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/taxonomies/create',
            component: () => import('../pages/Taxonomies/Create'),
            name: 'taxonomies.create',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/taxonomies/:taxonomy/edit',
            component: () => import('../pages/Taxonomies/Edit'),
            name: 'taxonomies.edit',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/menus',
            component: () => import('../pages/Menus/Index'),
            name: 'menus',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/menus/create',
            component: () => import('../pages/Menus/Create'),
            name: 'menus.create',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/menus/:menu/edit',
            component: () => import('../pages/Menus/Edit'),
            name: 'menus.edit',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/menus/:menu/nodes',
            component: () => import('../pages/Nodes/Index'),
            name: 'menu.nodes',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/menus/:menu/nodes/:node/edit',
            component: () => import('../pages/Nodes/Edit'),
            name: 'menu.nodes.edit',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/matrices',
            component: () => import('../pages/Matrices/Index'),
            name: 'matrices',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/matrices/create',
            component: () => import('../pages/Matrices/Create'),
            name: 'matrices.create',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/matrices/:matrix/edit',
            component: () => import('../pages/Matrices/Edit'),
            name: 'matrices.edit',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/extensions',
            component: () => import('../pages/Extensions/Index'),
            name: 'extensions',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/extensions/:extension/edit',
            component: () => import('../pages/Extensions/Edit'),
            name: 'extensions.edit',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/single/:single',
            component: () => import('../pages/Singles/Edit'),
            name: 'single.edit',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/collection/:collection',
            component: () => import('../pages/Collections/Index'),
            name: 'collection.index',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/collection/:collection/create',
            component: () => import('../pages/Collections/Create'),
            name: 'collection.create',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/collection/:collection/:id/edit',
            component: () => import('../pages/Collections/Edit'),
            name: 'collection.edit',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/taxonomies/:taxonomy',
            component: () => import('../pages/Terms/Index'),
            name: 'terms.index',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/taxonomies/:taxonomy/create',
            component: () => import('../pages/Terms/Create'),
            name: 'terms.create',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/taxonomies/:taxonomy/:id/edit',
            component: () => import('../pages/Terms/Edit'),
            name: 'terms.edit',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/forms',
            component: () => import('../pages/Forms/Index'),
            name: 'forms',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/forms/create',
            component: () => import('../pages/Forms/Create'),
            name: 'forms.create',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/forms/:form/edit',
            component: () => import('../pages/Forms/Edit'),
            name: 'forms.edit',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/inbox',
            component: () => import('../pages/Inbox/Index'),
            name: 'inbox',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/users',
            component: () => import('../pages/Users/Index'),
            name: 'users',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/users/create',
            component: () => import('../pages/Users/Create'),
            name: 'users.create',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/users/:user/edit',
            component: () => import('../pages/Users/Edit'),
            name: 'users.edit',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/users/:role',
            component: () => import('../pages/Users/Index'),
            name: 'users.role',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/roles',
            component: () => import('../pages/Roles/Index'),
            name: 'roles',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/roles/create',
            component: () => import('../pages/Roles/Create'),
            name: 'roles.create',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/roles/:role/edit',
            component: () => import('../pages/Roles/Edit'),
            name: 'roles.edit',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/permissions',
            component: () => import('../pages/Permissions'),
            name: 'permissions',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/settings',
            component: () => import('../pages/Settings/Index'),
            name: 'settings',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            }
        },
        {
            path: '/settings/:section',
            component: () => import('../pages/Settings/Edit'),
            name: 'setting.section',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            }
        },
        {
            path: '/theme',
            component: () => import('../pages/Theme'),
            name: 'theme',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            }
        },
        {
            path: '/customize',
            component: () => import('../pages/Customize'),
            name: 'customize',
            meta: {
                requiresAuth: true,
                layout: 'blank',
            }
        },
        {
            path: '/files',
            component: () => import('../pages/FileManager/Index'),
            name: 'file-manager.index',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            }
        },
        {
            path: '/files/:uuid',
            component: () => import('../pages/FileManager/Show'),
            name: 'file-manager.show',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            }
        },
        {
            path: '/logs',
            component: () => import('../pages/Logs/Index'),
            name: 'logs.index',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },

        {
            path: '/importer',
            component: () => import('../pages/Importer/Index'),
            name: 'importer',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },

        {
            path: '/importer/create',
            component: () => import('../pages/Importer/Create'),
            name: 'importer.create',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },

        {
            path: '/importer/:importer/edit',
            component: () => import('../pages/Importer/Edit'),
            name: 'importer.edit',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },

        {
            path: '/importer/:importer/view',
            component: () => import('../pages/Importer/View'),
            name: 'importer.view',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },

        {
            path: '/importer/:importer/mapping',
            component: () => import('../pages/Importer/Mapping'),
            name: 'importer.mapping',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },

        {
            path: '/backups',
            component: () => import('../pages/Backups/Index'),
            name: 'backups',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },

        {
            path: '/mailables',
            component: () => import('../pages/Mailables/Index'),
            name: 'mailables',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },

        {
            path: '/mailables/:mailable/edit',
            component: () => import('../pages/Mailables/Edit'),
            name: 'mailables.edit',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },

        {
            path: '/modules',
            component: () => import('../pages/Modules/Index'),
            name: 'modules',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },

        {
            path: '/styleguide',
            component: () => import('../pages/Styleguide/Index'),
            name: 'styleguide',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },

        {
            path: '/styleguide/tables',
            component: () => import('../pages/Styleguide/Tables'),
            name: 'styleguide.tables',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },

        {
            path: '*',
            component: () => import('../pages/404'),
            name: '404',
            meta: {
                layout: 'error'
            }
        },
    ],
})

router.beforeEach(before)
router.beforeResolve(resolve)
router.afterEach(after)

export default router
