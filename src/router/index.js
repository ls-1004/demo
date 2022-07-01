import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        component: () => import('@/view/IndexMain.vue'),
        children: [
            {
                path: 'first',
                component: () => import('@/view/FirstMode.vue')
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router