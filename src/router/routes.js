
const routes = [
    { path: '/', redirect: '/login' },
    {
        path: '/dashboard',
        component: () => import('../views/dashboard/dashboard.vue')
    },
    {
        path: '/aaa',
        component: () => import('../views/aaa/aaa.vue')
    },
    {
        path: '/login',
        component: () => import('../views/login/login.vue')
    },
]

export default routes