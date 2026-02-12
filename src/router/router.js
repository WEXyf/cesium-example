<<<<<<< HEAD
import { createMemoryHistory, createRouter } from 'vue-router'

export const routes = [
  { path: '/', name: 'home', component: () => import('@/views/Home.vue'), title: '地图', desc: '地图' },
  { path: '/InitCesiumEarth', name: 'InitCesiumEarth', component: () => import('@/views/InitCesiumEarth.vue'), title: 'Cesium初始化地球', desc: '初始化一个干净地球界面,底图基于天地图 DataServer' },
  { path: '/map', name: 'map', component: () => import('@/views/map.vue'), title: '地图', desc: '地图' },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;
=======
import { createMemoryHistory, createRouter } from 'vue-router'

export const routes = [
  { path: '/', name: 'home', component: () => import('@/views/Home.vue'), title: '地图', desc: '地图' },
  { path: '/InitCesiumEarth', name: 'InitCesiumEarth', component: () => import('@/views/InitCesiumEarth.vue'), title: 'Cesium初始化地球', desc: '初始化一个干净地球界面,底图基于天地图 DataServer' },
  { path: '/map', name: 'map', component: () => import('@/views/map.vue'), title: '地图', desc: '地图' },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;
>>>>>>> 8f9c08a1684d7a6ded566d77839c1d945f6e0f8c
