import { createMemoryHistory, createRouter } from 'vue-router'

export const routes = [
  { path: '/', name: 'home', component: () => import('@/views/Home.vue'), title: '地图', desc: '地图' },
  { path: '/InitCesiumEarth', name: 'InitCesiumEarth', component: () => import('@/views/InitCesiumEarth.vue'), title: 'Cesium初始化地球', desc: '初始化一个干净地球界面,底图基于天地图 DataServer' },
  { path: '/OGC_MapServer', name: 'OGC_MapServer', component: () => import('@/views/OGC_MapServer.vue'), title: 'OGC标准', desc: 'WMS,WMTS,TMS' },
  { path: '/Cesium_DataSource', name:'Cesium_DataSource',component: () => import('@/views/Cesium_DataSource.vue'), title: '常规数据添加', desc: 'geojson、kml、tiff' }
]


const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;
