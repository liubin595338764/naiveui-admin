
const routes = [
    { path: '/', redirect: '/dashboard' },
    {
        path: '/dashboard',
        component: () => import('../views/dashboard/dashboard.vue')
    },
    {
        path: '/aaa',
        component: () => import('../views/aaa/aaa.vue')
    },
]

export default routes