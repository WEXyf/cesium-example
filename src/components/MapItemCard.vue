<script setup>
import { defineProps } from 'vue'

defineProps({
  title: String,
  desc: String
})
</script>

<template>
    <div class="map-item-card">
        <img class="map-item-card-image" src="https://img2.baidu.com/it/u=3422224222,2423224222&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" alt="">
        <div class="map-item-card-content">
            <div class="map-item-card-title">
                {{ title }}
            </div>
            <div class="map-item-card-desc">
                {{ desc }}
            </div>
        </div>
    </div>

</template>

<style scoped>
.map-item-card {
    width: 100%;
    height: 100px;
    border: 1px solid #c4c4c4;
    border-radius: 4px;
    padding: 2px;
    margin: 5px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}
.map-item-card-image {
    width: 85px;
    height: 85px;
    
    margin: 5px;
}
.map-item-card-content {
    width: calc(100% - 80px);
    height: 100%;
}
.map-item-card-title {
    font-size: 16px;
    font-weight: bold;
    color: #333;
}
.map-item-card-desc {
    font-size: 14px;
    color: #666;    
    margin-top: 5px;   
}
</style>
