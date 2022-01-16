import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            // src 目录路径
            '@': path.resolve(__dirname, 'src'),
            // 公共组件导入路径
            'components': path.resolve(__dirname, 'src/components')
        }
    },
    plugins: [vue()],
})
