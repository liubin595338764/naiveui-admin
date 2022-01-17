import { defineConfig, UserConfigExport, ConfigEnv } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
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
    plugins: [
        vue(),
        viteMockServe({
            // default
            mockPath: '/mock',
            localEnabled: true,
            prodEnabled: true,
            //  这样可以控制关闭mock的时候不让mock打包到最终代码内
            injectCode: `
                import { setupProdMockServer } from '../mock/mockProdServer';
                setupProdMockServer();
            `,
        }),
    ],
})
