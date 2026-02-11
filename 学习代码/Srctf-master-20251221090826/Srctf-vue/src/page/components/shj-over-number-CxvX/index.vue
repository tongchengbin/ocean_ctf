<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
import { useObserveLayerWrapDisplay } from "@/commons/hook/useObserveLayerWrapDisplay";
import { SHJUtils } from '@shjjs/visual-ui'
/** 导入当前组件的Option */
import option from './option.json'
/** 导入当前组件的数据源配置 */
import sources from './sources.json'
/** 组件唯一ID */
const id = ref('CQwBqeA6gD8UM3sctbhT')
const { show } = useObserveLayerWrapDisplay(id.value);
</script>
<template>
    <!-- 加载组件 -->
        <shj-over-number :uuid="id" v-if="show" :id="id"   :option="option" :ref="SHJUtils.registerRef(id)" :sources="sources"/>
</template>