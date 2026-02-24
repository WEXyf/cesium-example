<script setup>
import * as Cesium from "cesium";
import { onMounted } from "vue";
import { cesiumCofig } from "./cesiumConfig";

Cesium.Ion.defaultAccessToken = cesiumCofig.cesium_token;
onMounted(async () => {
  try {
    // wmts 接口，不推荐,慢
    var tdtVecImageryProviderWMTS = new Cesium.WebMapTileServiceImageryProvider(
      {
        url:
          "https://t0.tianditu.gov.cn/img_w/wmts?tk=" +
          cesiumCofig.tianditu_token,
        layer: "img",
        style: "default",
        format: "image/jpeg",
        tileMatrixSetID: "w", // 向服务器请求 Web Mercator 投影的瓦片
        credit: new Cesium.Credit("© Tianditu", "http://www.tianditu.gov.cn/"),
      },
    );

    // 瓦片直取接口，推荐
    var tdtVecImageryProviderTile = new Cesium.UrlTemplateImageryProvider({
      url:
        "https://t0.tianditu.gov.cn/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=" +
        cesiumCofig.tianditu_token,
      credit: new Cesium.Credit("© Tianditu", "http://www.tianditu.gov.cn/"),
    });

    // 高德地图瓦片服务
    var gaoDeImagery = new Cesium.UrlTemplateImageryProvider({
      url: "https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",
      minimumLevel: 1,
      maximumLevel: 18,
    });
    const viewer = new Cesium.Viewer("cesiumContainer", {
      imageryProvider: false, // 不加载默认影像
      // terrainProvider: await Cesium.createWorldTerrainAsync({
      //     //  requestVertexNormals: true, // 请求法线，增强视觉效果
      //     // requestWaterMask: true       // 请求水体遮罩，用于渲染水体
      // }), // 世界地形

      /* 关闭 Cesium 默认 UI 控件 */
      animation: false, // 动画控件
      timeline: false, // 时间轴
      baseLayerPicker: false, // 图层选择器
      homeButton: false, // 首页按钮
      geocoder: false, // 地名搜索
      sceneModePicker: false, // 2D/3D 切换
      navigationHelpButton: false, // 帮助按钮
      fullscreenButton: false, // 全屏按钮
      vrButton: false, // VR 模式按钮
      infoBox: false, // 信息框
      selectionIndicator: false, // 选择指示器

      // 隐藏 Cesium 默认 logo
      creditContainer: document.createElement("div"),
      contextOptions: {
        webgl: {
          alpha: true,
          depth: false,
        },
      },
    });
    window.viewer = viewer;
    viewer.scene.debugShowFramesPerSecond = true;
    // viewer.imageryLayers.addImageryProvider(tdtVecImageryProviderTile);
    var geo = viewer.dataSources.add(
      Cesium.GeoJsonDataSource.load("/public/merge.json", {
        fill: Cesium.Color.PINK.withAlpha(0.6), // 填充色+半透明（更实用）
        stroke: Cesium.Color.HOTPINK, // 描边色
        strokeWidth: 5, // 描边宽度
      }),
    );

    var kml = viewer.dataSources.add(
      Cesium.KmlDataSource.load("/矢量文件/kml/road.kml", {
        camera: viewer.scene.camera,
        canvas: viewer.scene.canvas,
      }),
    );

    var tileset = new Cesium.Cesium3DTileset({
      url: "/public/3D格式数据/Tileset/tileset.json",
      maximumScreenSpaceError: 2, //最大的屏幕空间误差
      maximumNumberOfLoadedTiles: 1000, //最大加载瓦片个数
     
    });
    // 添加到场景
    viewer.scene.primitives.add(tileset);
   
    // // 等待模型加载完成后再执行 zoomTo
    // await tileset.readyPromise;
    // console.log('3DTiles 模型加载成功');

    // 定位到模型（添加偏移，避免相机穿模）
    viewer.zoomTo(tileset);
  } catch (error) {
    console.error("初始化Cesium地球失败:", error);
  }
});
</script>

<template>
  <div id="cesiumContainer"></div>
</template>

<style scoped>
#cesiumContainer {
  height: 100%;
  width: 100%;
}
</style>
