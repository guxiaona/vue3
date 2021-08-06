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
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router