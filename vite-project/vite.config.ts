import {defineConfig} from 'vite'
import Components from 'unplugin-vue-components/vite'
import {NaiveUiResolver,AntDesignVueResolver} from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias:{
            '@': path.resolve(__dirname,'src'),
            'components': path.resolve(__dirname,'src/components'),
            'pages': path.resolve(__dirname,'src/pages')
        }
    },
    plugins: [
        vue(),
        Components({
            // 指定组件位置, 默认
            dirs: ['src/components','src/pages'],
            extensions: ['vue'],
            // 组件按需引入
            resolvers:[
                NaiveUiResolver(),
                AntDesignVueResolver()
            ],
            // 生成TS文件
            dts: true,
            // 搜索组件子目录
            deep: true,
        })
    ]
})



