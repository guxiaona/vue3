import { createRouter, createWebHashHistory } from 'vue-router'
import Base from '../views/Base.vue'

const routes = [{
        path: '/',
        name: 'Base',
        component: Base,
    },
    {
        path: '/method',
        name: 'Method',

        component: () =>
            import ('../views/Method.vue')
    },
    {
        path: '/computed',
        name: 'Computed',
        component: () =>
            import ('../views/Computed.vue')
    },
    {
        path: '/if',
        name: 'If',
        component: () =>
            import ('../views/If.vue')
    },
    {
        path: '/for',
        name: 'For',
        component: () =>
            import ('../views/For.vue')
    },
    {
        path: '/todo',
        name: 'Todo',
        component: () =>
            import ('../views/Todo.vue')
    },
    {
        path: '/eventpro',
        name: 'EventPro',
        component: () =>
            import ('../views/EventPro.vue')
    },
    {
        path: '/vmodel',
        name: 'VModel',
        component: () =>
            import ('../views/VModel.vue')
    },
    {
        path: '/component',
        name: 'Component',
        component: () =>
            import ('../views/Component.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router