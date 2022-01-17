
import { createApp } from 'vue'
import App from './App.vue'
import useNaiveUI from './plugins/useNaiveUI';
import router from './router';
import store from './store';

const app = createApp(App);
app.use(store).use(router).use(useNaiveUI)

router.isReady().then(() => {
    app.mount('#app')
})

setTimeout(() => {
    window.$message.info('router.isReady')
}, 100);
// 调试
if (import.meta.env.DEV) {
    window.app = app
    window.store = store
    window.router = router
}
