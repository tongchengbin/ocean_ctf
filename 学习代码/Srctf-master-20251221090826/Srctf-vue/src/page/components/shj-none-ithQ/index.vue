<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
import { useObserveLayerWrapDisplay } from "@/commons/hook/useObserveLayerWrapDisplay";
import { SHJUtils } from '@shjjs/visual-ui'
/** 导入当前组件的Option */
import option from './option.json'
/** 组件唯一ID */
const id = ref('9Aak3l1V36mWseiYDnPa')
const { show } = useObserveLayerWrapDisplay(id.value);
</script>
<template>
    <!-- 加载组件 -->
        <shj-none :uuid="id" v-if="show" :id="id"   :option="option" :ref="SHJUtils.registerRef(id)" />
</template>