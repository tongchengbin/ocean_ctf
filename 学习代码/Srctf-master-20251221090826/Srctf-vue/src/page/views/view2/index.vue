<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ref, onMounted } from 'vue'
import { usePageStore } from '@/commons/stores/pageStore'
/** 导出工具类，包含页面JSON处理，初始化变量，执行事件，图层属性动态渲染等 */
import { execEvent, execStatesEvent, layerRenderStyles1, layerRenderStyles2, layerRenderStyles3, findLayerUseState } from '@/commons/utils/utils'
const pageStore = usePageStore()
const { currentPage } = storeToRefs(pageStore)
</script>
<template>
</template>
<style lang="scss" scoped>
    @import url(./resources/scss/index.scss);
</style>