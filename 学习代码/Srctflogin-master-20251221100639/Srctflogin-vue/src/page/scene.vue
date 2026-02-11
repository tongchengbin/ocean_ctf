<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { usePageStore } from '@/commons/stores/pageStore'
import { SHJUtils } from '@shjjs/visual-ui'

const pageStore = usePageStore()
const { currentPage } = storeToRefs(pageStore)

const sceneOption = {"background":{"image":"","color":"#161B24","size":""}}
const globalEvent = currentPage.value.globalEvent
</script>
<template>
    <div class="shj-scene">
        <shj-default
            :ref="SHJUtils.registerRef('scene-default-1')"
            :option="sceneOption"
            :sources="[]"
            :use-events="globalEvent"
        />
    </div>
</template>
<style lang="scss" scoped>
.shj-scene {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
}
</style>
