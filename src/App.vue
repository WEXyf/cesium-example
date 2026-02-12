<script setup>
import { NLayout, NLayoutHeader, NLayoutContent, NLayoutFooter, NSplit, NScrollbar } from 'naive-ui'
import MapItemCard from './components/MapItemCard.vue'
import { routes } from './router/router.js'
</script>

<template>
  <n-layout class="layout">
    <n-layout-header class="header">
      <div class="header-content">Cesium Example</div>
    </n-layout-header>
    <n-layout-content class="content">
      <n-split direction="horizontal" :default-size="0.3" :max="0.5" :min="0.25">
        <template #1>
          <n-scrollbar>
            <div class="example-list">
              <div v-for="item in routes.slice(1)" :key="item.name" class="example-item">
                <router-link :to="item.path">
                  <MapItemCard :title="item.title" :desc="item.desc" />
                </router-link>
              </div>
            </div>
          </n-scrollbar>
        </template>
        <template #2>
          <router-view></router-view>
        </template>
      </n-split>
    </n-layout-content>
    <n-layout-footer class="footer">成府路</n-layout-footer>
  </n-layout>
</template>

<style scoped>
.layout {
  height: 100vh;
}

.header {
  display: flex;
  height: 50px;
  font-size: 24px;
  border-bottom: 1px solid #c4c4c4;
}

.header-content {
  background: -webkit-linear-gradient(right, #0a0094, #00FF00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-left: 12px;
}

.content {
  height: calc(100vh - 90px);
  padding: 0px;
}

a:-webkit-any-link {
  color: skyblue;
  cursor: pointer;
  text-decoration: none;

}

.example-list {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.example-item {
  word-wrap: break-word;
  word-break: break-all;
  max-width: 100%;
  padding-right: 15px;
}
</style>
