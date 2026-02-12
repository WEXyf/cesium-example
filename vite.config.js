import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cesium from 'vite-plugin-cesium'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), cesium()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
      '@': path.resolve(__dirname, './src'),
    },
  },
  // server: {
  //   port: 5174, // 保持你的本地端口
  //   // 核心：配置天地图代理
  //   proxy: {
  //     // 匹配以 /tianditu 开头的请求，转发到天地图服务器
  //     '/tianditu': {
  //       target: 'https://t0.tianditu.gov.cn', // 天地图主域名（支持跨域）
  //       changeOrigin: true, // 开启跨域代理（关键）
  //       rewrite: (path) => path.replace(/^\/tianditu/, ''), // 去掉前缀 /tianditu
  //       secure: false, // 忽略 HTTPS 证书校验（可选，避免本地开发报错）
  //      // withCredentials: true // 携带凭证（可选，天地图一般不需要）
  //     }
  //   }
  // },
  
  // 扩展 Vite 的静态资源识别列表
  assetsInclude: [
    '**/*.glb',
    '**/*.gltf',
    '**/*.czml',
    '**/*.fbx',
    '**/*.obj',
    '**/*.3ds',
    '**/*.geojson',
  ],
})
