import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';

const app = createApp(App);
app.use(store).use(router)
router.isReady().then(() => {
    app.mount('#app')
})


// 调试
if (process.env.NODE_ENV === 'development') {
    window.app = app
    window.store = store
    window.router = router
}
