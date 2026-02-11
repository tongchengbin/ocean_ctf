<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ref, onMounted } from 'vue'
import bgScene from './scene.vue'
import config from './config.json'
import { usePageStore } from '@/commons/stores/pageStore'
import { DataSourceUtils, EventUtils } from "@shjjs/visual-ui"
import { useAutoSize1} from '@/commons/hook/useAutoSize'
/** 导出工具类，包含页面JSON处理，初始化变量，执行事件，图层属性动态渲染等 */
import { execEvent, execStatesEvent, layerRenderStyles1, layerRenderStyles2, layerRenderStyles3, findLayerUseState } from '@/commons/utils/utils'
import ZvShjInputuoQw from './components/shj-input-uoQw/index.vue'
import ZvShjInputXuUG from './components/shj-input-XuUG/index.vue'
import ZvShjTextRvze from './components/shj-text-Rvze/index.vue'
const { pageRef, transform } = useAutoSize1(2560, 1440, true)
const pageStore = usePageStore()
const { currentPage } = storeToRefs(pageStore)
const pageLoading = ref<boolean>(true)
onMounted(() => {
pageStore.setCurrentPage(config)
pageLoading.value = false
})
</script>
<template>
    <div class="shj-page autoAdapter" ref="pageRef">
                <div class="shj-page-content" :style="{ transform }" v-if="!pageLoading">
                <bg-scene></bg-scene>
                    <div class="layer-wrap layer-wrap_cjdXBI" id="UheAMgF8MZvicz2IMPPi">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-ThZJ">登录</p>
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_IAtzeh" id="F24St5SioPfewYjJGoBP">
                    <div class="layer-main">
                        <div class="group">

                    <div class="layer-wrap layer-wrap_oGpDhU" id="Z75LF6my8BkRLjeLAxVH">
                        <div class="layer-main">
                            <div class="layer" >
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_cUtCPX" id="eBTmZiDfLcUQxe0vi3ZK">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvShjInputuoQw />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_zPNOux" id="lorxNJZJxSSFjKw8ASIe">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvShjInputXuUG />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_laUPGp" id="pPxTyJ77os7YPpIkV4Yu">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-GCSJ"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_sARrGT" id="bXU5IewbReT9rcZb2EVF">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-XCmo"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_mvrHPb" id="8MPuuy7R3mYq8IcfwumT">
                    <div class="layer-main">
                        <div class="group">

                    <div class="layer-wrap layer-wrap_jdmfPo" id="DreUlFLCL9A5g3SOWPMX">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-uoVy"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_QGRhor" id="ynvdv1vIRCMRsxGKdaFn">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvShjTextRvze />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_jRdsbj" id="cW4EHn7UtenynPY6Nlrf">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-zAJV"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
            
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @import url(./resources/scss/page.scss);
    @import url(./resources/scss/index.scss);
</style>