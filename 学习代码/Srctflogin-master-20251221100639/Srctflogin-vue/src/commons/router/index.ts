import { SHJDatasourceV2 } from '@shjjs/visual-ui'
        import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
            history: createWebHistory(),
routes: [
        {
        path: '/',
        redirect: '/page',
        },
        {
        path: '/page',
        name: '无标题',
        component: () => import('@/page/index.vue')
        }
]
})

router.beforeEach((to, form, next) => {
    SHJDatasourceV2.destroy()

    next()
})

export default router