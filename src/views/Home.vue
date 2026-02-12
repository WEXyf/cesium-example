<template>
  <div class="home-container">
    <div class="welcome-card">
      <h1>欢迎使用 Cesium Example</h1>
      <p>
        这是一个基于 CesiumJS (v1.138.0) 的 3D 地球可视化示例项目，实现了底图、数据、交互、特效等多种功能，
        帮助你快速学习和提高 CesiumJS 开发技能。
      </p>
    </div>

    <div class="feature-list">
      <h2>核心功能</h2>
      <div class="feature-item">
        <h3>🌍 3D 地球渲染</h3>
        <p>基于 CesiumJS 实现高性能 3D 地球可视化，支持海量地理数据流畅展示。</p>
      </div>
      <div class="feature-item">
        <h3>🗺️ 多源地图服务</h3>
        <p>无缝集成天地图、OpenStreetMap 等多种底图服务，满足不同场景需求。</p>
      </div>
      <div class="feature-item">
        <h3>📊 空间数据可视化</h3>
        <p>支持点、线、面等矢量数据以及影像数据的叠加渲染与交互分析。</p>
      </div>
    </div>

    <div class="quick-start">
      <h2>快速开始</h2>
      <p>点击左侧菜单中的示例，即可在右侧区域加载并运行对应的 Cesium 功能演示。</p>
      <div class="tip">
        💡 提示：首次加载地球可能需要几秒时间，请耐心等待。
      </div>
    </div>
  </div>
</template>

<script setup>
// 这里可以添加组件逻辑，如获取当前路由信息、统计示例数量等
</script>

<style scoped>
.home-container {
  width: 100%;
  height: 100%;
  padding: 24px;
  box-sizing: border-box;
  background-color: #f8f9fa;
  overflow-y: auto;
}

.welcome-card {
  background: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
}

.welcome-card h1 {
  color: #0052d9;
  margin-top: 0;
  margin-bottom: 12px;
}

.feature-list {
  background: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
}

.feature-item {
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #eee;
}

.feature-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.feature-item h3 {
  margin-top: 0;
  margin-bottom: 8px;
  color: #333;
}

.quick-start {
  background: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.tip {
  background-color: #e7f3ff;
  border-left: 4px solid #1890ff;
  padding: 12px 16px;
  margin-top: 16px;
  border-radius: 4px;
  color: #0052d9;
}
</style>