<script setup>
import * as Cesium from 'cesium'
import { onMounted } from 'vue'
import { cesiumCofig } from './cesiumConfig'

Cesium.Ion.defaultAccessToken = cesiumCofig.cesium_token;
onMounted(async () => {
    try {
        // wmts 接口，不推荐,慢
        var tdtVecImageryProviderWMTS = new Cesium.WebMapTileServiceImageryProvider({
            url: "https://t0.tianditu.gov.cn/img_w/wmts?tk=" + cesiumCofig.tianditu_token,
            layer: "img",
            style: "default",
            format: "image/jpeg",
            tileMatrixSetID: "w", // 向服务器请求 Web Mercator 投影的瓦片
            credit: new Cesium.Credit("© Tianditu", "http://www.tianditu.gov.cn/"),
        })

        // 瓦片直取接口，推荐
        var tdtVecImageryProviderTile = new Cesium.UrlTemplateImageryProvider({
            url: "https://t0.tianditu.gov.cn/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=" + cesiumCofig.tianditu_token,
            credit: new Cesium.Credit("© Tianditu", "http://www.tianditu.gov.cn/"),
        })
        const viewer = new Cesium.Viewer('cesiumContainer', {
            imageryProvider: false,                // 不加载默认影像
            terrainProvider: await Cesium.createWorldTerrainAsync({
                //  requestVertexNormals: true, // 请求法线，增强视觉效果
                // requestWaterMask: true       // 请求水体遮罩，用于渲染水体
            }), // 使用默认椭球体地形

            /* 关闭 Cesium 默认 UI 控件 */
            animation: false,           // 动画控件
            timeline: false,            // 时间轴
            baseLayerPicker: false,     // 图层选择器
            homeButton: false,          // 首页按钮
            geocoder: false,            // 地名搜索
            sceneModePicker: false,     // 2D/3D 切换
            navigationHelpButton: false,// 帮助按钮
            fullscreenButton: false,    // 全屏按钮
            vrButton: false,            // VR 模式按钮
            infoBox: false,             // 信息框
            selectionIndicator: false,  // 选择指示器

            // 隐藏 Cesium 默认 logo
            creditContainer: document.createElement('div'),
            contextOptions: {
                webgl: {
                    alpha: true,
                    depth: false
                }
            }
        })
        //viewer.scene.fxaa = false;
        viewer.imageryLayers.addImageryProvider(tdtVecImageryProviderTile);
        setTimeout(() => {
            viewer.camera.flyTo({
                destination: Cesium.Cartesian3.fromDegrees(117.4175, 32.655, 5000),
                orientation: {
                    heading: Cesium.Math.toRadians(0.0), // 方位角，正北方向
                    pitch: Cesium.Math.toRadians(-90.0), // 俯仰角，垂直向下
                },
                duration: 3
            });
        }, 1000);
    } catch (error) {
        console.error('初始化Cesium地球失败:', error);
    }
})

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
