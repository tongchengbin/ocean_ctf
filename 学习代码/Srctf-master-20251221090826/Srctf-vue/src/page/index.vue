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
import ZvShjOverNumberEzsZ from './components/shj-over-number-EzsZ/index.vue'
import ZvShjTextDbOq from './components/shj-text-DbOq/index.vue'
import ZvShjOverNumberCxvX from './components/shj-over-number-CxvX/index.vue'
import ZvShjTextbLcs from './components/shj-text-bLcs/index.vue'
import ZvShjOverNumberxiVW from './components/shj-over-number-xiVW/index.vue'
import ZvShjTextJXFQ from './components/shj-text-JXFQ/index.vue'
import ZvShjOverNumberoysD from './components/shj-over-number-oysD/index.vue'
import ZvShjTextoKWS from './components/shj-text-oKWS/index.vue'
import ZvShjOverNumbercEPV from './components/shj-over-number-cEPV/index.vue'
import ZvShjTextumhj from './components/shj-text-umhj/index.vue'
import ZvShjOverNumberrcmc from './components/shj-over-number-rcmc/index.vue'
import ZvShjTextqdWV from './components/shj-text-qdWV/index.vue'
import ZvShjOverNumberzPFJ from './components/shj-over-number-zPFJ/index.vue'
import ZvShjTextMlhS from './components/shj-text-MlhS/index.vue'
import ZvShjOverNumberlUZg from './components/shj-over-number-lUZg/index.vue'
import ZvShjTextbGgM from './components/shj-text-bGgM/index.vue'
import ZvShjRealTimeEUFB from './components/shj-real-time-EUFB/index.vue'
import ZvShjOverNumbermhWy from './components/shj-over-number-mhWy/index.vue'
import ZvShjTextzBxJ from './components/shj-text-zBxJ/index.vue'
import ZvShjTextGIDX from './components/shj-text-GIDX/index.vue'
import ZvShjLineSmoothAreaMpPM from './components/shj-line-smooth-area-MpPM/index.vue'
import ZvShjNonesyTV from './components/shj-none-syTV/index.vue'
import ZvShjStaticTabsamIG from './components/shj-static-tabs-amIG/index.vue'
import ZvShjStaticTabsJJJw from './components/shj-static-tabs-JJJw/index.vue'
import ZvShjStaticTabsrIBs from './components/shj-static-tabs-rIBs/index.vue'
import ZvShjNoneithQ from './components/shj-none-ithQ/index.vue'
const { pageRef, transform } = useAutoSize1(2560, 1440, false)
const pageStore = usePageStore()
const { currentPage } = storeToRefs(pageStore)
const pageLoading = ref<boolean>(true)
onMounted(() => {
pageStore.setCurrentPage(config)
pageLoading.value = false
})
import view1 from './views/view1/index.vue'
import view2 from './views/view2/index.vue'
</script>
<template>
    <div class="shj-page autoAdapter" ref="pageRef">
                <div class="shj-page-content" :style="{ transform }" v-if="!pageLoading">
                <bg-scene></bg-scene>
                <div class="layer-wrap layer-wrap_ozfekz" id="LA3_GZBi7pz5sYRuCNmg">
                    <div class="layer-main">
                        <div class="group">

                <div class="layer-wrap layer-wrap_UaYxJu" id="XGD3clk1rCbtmUoEuPUs">
                    <div class="layer-main">
                        <div class="group">

                    <div class="layer-wrap layer-wrap_ForXTd" id="krJnJB1-PpvtjFLw_dSq">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvShjOverNumberEzsZ />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_gDcUuS" id="hssTBjsTQVB1vHs3j0lH">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-WhKl"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_WQBXFM" id="AtaSAIuyAnDRkOTOeQ-x">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-bKbC">我也是一个标题</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_sLUNWz" id="MA5mmK3fS_p5QX9qDeuT">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-olxw"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_VMakTh" id="oSaVda_ys329XOpr4CAj">
                    <div class="layer-main">
                        <div class="group">

                    <div class="layer-wrap layer-wrap_JIwhqp" id="PJ0JDnZDcI5_QD5rAhT1">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvShjTextDbOq />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_riJTVo" id="m5QNhZmdlS31LOfhd5LA">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-npwv"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_FqQAEN" id="VGowaPji2cGSaAw2f-K1">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-uHPx"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_iBNQkI" id="fxE8TGpu4heBjC0oYDIg">
                    <div class="layer-main">
                        <div class="group">

                <div class="layer-wrap layer-wrap_hDDoet" id="S24VypxQIsE91TKibuWk">
                    <div class="layer-main">
                        <div class="group">

                    <div class="layer-wrap layer-wrap_aiYLZb" id="CQwBqeA6gD8UM3sctbhT">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvShjOverNumberCxvX />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_bnhXqO" id="21duVXVH76zA50YcDkkO">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-mefJ"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_GInhHe" id="4rRvfDiOr7loQkrRFm-u">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-HfrS">我也是一个标题</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_UwxRUs" id="z2MEv12vybN4IeF9UFBG">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-NXOv"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_jnGzuU" id="MVWuugwWjUEuloFv5PHQ">
                    <div class="layer-main">
                        <div class="group">

                    <div class="layer-wrap layer-wrap_Kriygx" id="3xFD3GIg-DGjLDsQGAb3">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvShjTextbLcs />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_RZUZMv" id="hWu-O0E8-4XIj-5I4VG2">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-hOIt"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_FpciVX" id="TM3K1D8aVqmFl58xdL45">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-hAgF"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_KIodXx" id="BWbVgEfcpkw4ZpFwpyTQ">
                    <div class="layer-main">
                        <div class="group">

                <div class="layer-wrap layer-wrap_mQSLTm" id="OHstT-5KjPUr7NNfDTJe">
                    <div class="layer-main">
                        <div class="group">

                    <div class="layer-wrap layer-wrap_DGOcHZ" id="hGTBa1qKlKW5_mg_Bo_7">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvShjOverNumberxiVW />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_InLULc" id="y6shXPPvi77jvkG1qxRJ">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-xbqT"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_XJDjnH" id="BchTYGP5yqYwAcI-j4yf">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-QxiU">我也是一个标题</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_orvtqp" id="4SUFxoEAMr9uEuR3YxKD">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-SZTX"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_wdsUml" id="hnzdmWLwa1zK6pDHYRHY">
                    <div class="layer-main">
                        <div class="group">

                    <div class="layer-wrap layer-wrap_cmuJgl" id="nxnxtC-Qe0JZf_nVXsmm">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvShjTextJXFQ />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_KFFJST" id="ubR9r9GJ5ezgewEAW0Pe">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-HBtg"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_hQtMCQ" id="u5KvE6BJas0JhJe1EiQI">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-Rltg"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_NMSyTS" id="pYBWQlB5dr_GPUWQ-Ddn">
                    <div class="layer-main">
                        <div class="group">

                <div class="layer-wrap layer-wrap_sehrMf" id="nAvLM6u7v115squvvj8N">
                    <div class="layer-main">
                        <div class="group">

                    <div class="layer-wrap layer-wrap_OcmAMd" id="I1K7J1KbWMWrosGkX-Vd">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvShjOverNumberoysD />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_cyrkZg" id="5S5kDj0Ip3H_rajLvXcl">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-usop"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_tKAlXx" id="pnSh0xcr0dE5cYKi33fs">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-jptX">我也是一个标题</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_oPQDdV" id="ZEh85uz-xPauUmghTcLq">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-zaTr"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_XZXkFC" id="y3WmMNCpBjuXeeYMhKic">
                    <div class="layer-main">
                        <div class="group">

                    <div class="layer-wrap layer-wrap_qSGZHo" id="NdWimgvi6fi6KGkw9USi">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvShjTextoKWS />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_PzEDhe" id="Tnu6m0BKouRPb54xUnYZ">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-rziR"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_ayHpmK" id="IDgpWt036vSq3DILQQwM">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-mbWL"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_VcJkxf" id="X1x7ThpdOxFI1LfNN6sW">
                    <div class="layer-main">
                        <div class="group">

                <div class="layer-wrap layer-wrap_oSPImx" id="t6UZq4URQy9K9QzbDVIN">
                    <div class="layer-main">
                        <div class="group">

                    <div class="layer-wrap layer-wrap_vrdDVO" id="RkYq3VifiCh_JOr3UdqN">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvShjOverNumbercEPV />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_kmpSdS" id="rNCef7RsvMXNepwOH6RM">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-PoVm"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_rXIMzZ" id="boKqd0_IcWGiDoBdI9SV">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-WNzQ">我也是一个标题</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_exEkar" id="BG35Dgtpve9L5Yz1UoZ2">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-tiXV"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_vadfQC" id="ZCQxjXSavyezLszs8WmU">
                    <div class="layer-main">
                        <div class="group">

                    <div class="layer-wrap layer-wrap_bCSyDA" id="LKgD8VLBVwTy9nDoU_hp">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvShjTextumhj />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_NKcCyX" id="sYvJbHRaO4qc1D9ERKzA">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-EYGA"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_HPOuyy" id="3BoqqfX-hB6fdxbj5vjF">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-MFhp"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_pfNxfB" id="zZ2jcYpXdOkfDqJmv7F5">
                    <div class="layer-main">
                        <div class="group">

                <div class="layer-wrap layer-wrap_XZuIEg" id="-eDkS1qaAfY57mdjp1k6">
                    <div class="layer-main">
                        <div class="group">

                    <div class="layer-wrap layer-wrap_UqgUan" id="cTxPVXfgQMZ3ImWToDcO">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvShjOverNumberrcmc />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_SSMDkO" id="lp3aFgqR3Rj4gWGfet3d">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-VfsT"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_ueBeWk" id="cTgJkU3LDIWj4wtc4wfq">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-useb">我也是一个标题</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_EaBxGP" id="3ni0egdwrnA_29mX8WbE">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-OCjg"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_tIePwb" id="dOOSwl-qtp0HVTwFpQeM">
                    <div class="layer-main">
                        <div class="group">

                    <div class="layer-wrap layer-wrap_pAGkcW" id="jBYgVUx-3XDpGsmd5y31">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvShjTextqdWV />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_ocAjaT" id="80bgl2by-gVzLEK3_MZh">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-NQWQ"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_KOdLNo" id="dNmoqg8gkUq50jck8VCO">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-GiFx"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_qiiJwY" id="zYMnOHxUUPcO-lXd4DMJ">
                    <div class="layer-main">
                        <div class="group">

                <div class="layer-wrap layer-wrap_TIluiG" id="T22db775OcqEYqHl9oFl">
                    <div class="layer-main">
                        <div class="group">

                    <div class="layer-wrap layer-wrap_rarPif" id="jegPZNmKnaLA7Io95XP7">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvShjOverNumberzPFJ />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_zXeYIw" id="y0M1Ulw3R_5CPKpgtz0c">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-ZUaK"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_wSYHBF" id="i0s3kYhfCN-PwJzi8Xdw">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-afmA">我也是一个标题</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_Nncugp" id="ERngdYgFLKXIDBRa0v1C">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-JDjB"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_ZYvGMd" id="8kPgmYI74tmbcT6HWZZr">
                    <div class="layer-main">
                        <div class="group">

                    <div class="layer-wrap layer-wrap_oKDeZD" id="8LqESjInv_VHOm8XpzeM">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvShjTextMlhS />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_HtjsSk" id="h7uFmzD58wHxmPPLNzs2">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-SLvE"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_MQKgXk" id="kLCzVooI7513LAyy8AdU">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-JUzG"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_mCPMVT" id="n0D_vT-ILEt9JBrG9fbQ">
                    <div class="layer-main">
                        <div class="group">

                <div class="layer-wrap layer-wrap_DmPAAH" id="MSIkFvUUOwXdqZH8NDYi">
                    <div class="layer-main">
                        <div class="group">

                    <div class="layer-wrap layer-wrap_SBYymB" id="EI1egKV7b69lU1WLQPAB">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvShjOverNumberlUZg />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_EBoKOX" id="qNfBD_yPzyG8D376aN2I">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-GvqR"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_wTixVA" id="Fzp7zTA3Iezr7A-MAYsA">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-iTfm">我也是一个标题</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_fEufbn" id="Qu-rX1MvDgV5gRxFuq5X">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-QVzF"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_aqHJRj" id="25mD0fGfRYjguC1S9FIn">
                    <div class="layer-main">
                        <div class="group">

                    <div class="layer-wrap layer-wrap_UUlXwE" id="m-_73JAyB5rp2c30MYlb">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvShjTextbGgM />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_AOGaKy" id="I0Bp6_N58Z90J8zser41">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-LkSI"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_yJJoJx" id="_3l_00Boc_AQO6P2HO5y">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-pLyM"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_TfAIqe" id="I5Ggm1kust7f734cvCU3">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvShjRealTimeEUFB />
                            </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_cHfJlT" id="uZTJpDyWysxFVb-qNEDv">
                    <div class="layer-main">
                        <div class="group">

                <div class="layer-wrap layer-wrap_arFXID" id="Dd9WyywrbZf_Gz6a6jYG">
                    <div class="layer-main">
                        <div class="group">

                    <div class="layer-wrap layer-wrap_PvjUfx" id="ncHhuInXyPfvx8_wxofh">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvShjOverNumbermhWy />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_jdpMnY" id="H_--_SjWkHUbJZ2QBuSy">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-twHI"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_VdaFNY" id="Lq7VFQNOYYWu0c5VnesK">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-zZmg">我也是一个标题</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_nqoCRn" id="UZN8YfhJwPTzSS-_kw08">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-TYpD"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_iwgNBH" id="Rmhcj8GA9z5tnZRvN1zh">
                    <div class="layer-main">
                        <div class="group">

                    <div class="layer-wrap layer-wrap_xbRaxj" id="cnlZ4Og3kB_7rr5rZ5Pq">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvShjTextzBxJ />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_cdCSat" id="1rFI4quObbU6eLs3ksRd">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-qzzT"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_foVWaT" id="VCMChZut6KGFNHSTIXuQ">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-dyuG"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_HSPLSX" id="gWZtcN0c0yPkocTgdGZL">
                    <div class="layer-main">
                        <div class="group">

                <div class="layer-wrap layer-wrap_vDAIZg" id="iLdYUNEYwkTEmwGFOvTN">
                    <div class="layer-main">
                        <div class="group">

                    <div class="layer-wrap layer-wrap_aXtEIa" id="5Ofof0PImcxi0u6sYdSd">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-Qwij">数据小标题文本</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_XaqTRi" id="L4sYMmnhZ8NwLGGKrQJG">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-oVHw"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_azKQnt" id="4C90e6ZijSjWkHbu0yVt">
                    <div class="layer-main">
                        <div class="group">

                    <div class="layer-wrap layer-wrap_tJpMXM" id="fuV04dSZgq0gYngRzKE8">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvShjTextGIDX />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_adINHt" id="wqjHvxkbo9dnHAwgfA6o">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-ONty"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_HpIbWa" id="XLenHplNdWmWDUCfAhBn">
                    <div class="layer-main">
                        <div class="group">

                <div class="layer-wrap layer-wrap_GxMNzI" id="uXQo9idKj4aQ5uYNlx0D">
                    <div class="layer-main">
                        <div class="group">

                    <div class="layer-wrap layer-wrap_DBEtNa" id="W0YiLgOd9gooU1TBgBJz">
                        <div class="layer-main">
                            <div class="layer" >
                                        <p class="text-uqLV">数据小标题文本</p>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_EXkhRT" id="Rov1Wa6haRJQwYWYxvB1">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-SIZA"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_SpGAqM" id="ooq7fzAbYK1OH9kVUU8Q">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvShjLineSmoothAreaMpPM />
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_XXZlwz" id="SLUmoa4dP9gjYMLrSEhF">
                    <div class="layer-main">
                        <div class="group">

                    <div class="layer-wrap layer-wrap_NFwCEB" id="bSPS0QsJAvOiz-mSglTs">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvShjNonesyTV />
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_qoKwub" id="dCoHLNaQOCvq5kFn7EnQ">
                    <div class="layer-main">
                        <div class="group">

                    <div class="layer-wrap layer-wrap_AzpofR" id="Vr2RqQLEYRPvF4yRRun5">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvShjStaticTabsamIG />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_xGFDYN" id="eTptZAdD2pHp4a2xgB9b">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-YYRS"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_gOwcVj" id="DEnSJOJVJzEcw4c0cb3Q">
                    <div class="layer-main">
                        <div class="group">

                    <div class="layer-wrap layer-wrap_eqIIjf" id="t0xI9X0obBEeVjI5klFG">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvShjStaticTabsJJJw />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_lmLfKK" id="sfF160StNCuSYXnlvhWa">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvShjStaticTabsrIBs />
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_yUaVqz" id="MEXUfKGJP9qQRsKiYh07">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-lmaA"></div>
                            </div>
                    </div>
                </div>
                    <div class="layer-wrap layer-wrap_txtwBK" id="8YrgSQi4iQ6BGE1JgCvH">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-DTvS"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_MLmTwH" id="LDoI1ALRMtn0szrg4O9F">
                    <div class="layer-main">
                        <div class="group">

                    <div class="layer-wrap layer-wrap_xYrlxz" id="9Aak3l1V36mWseiYDnPa">
                        <div class="layer-main">
                            <div class="layer" >
                                    <ZvShjNoneithQ />
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_SRqODh" id="PatQMsnK8E9xzGl5sxg7">
                    <div class="layer-main">
                        <div class="group">

                    <div class="layer-wrap layer-wrap_hzTRBx" id="vBCPWJrczoPECK1QHzlu">
                        <div class="layer-main">
                            <div class="layer" >
                                    <div class="img-odTB"></div>
                            </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
            
            <view1 v-if="currentPage.defaultView ==='4GVHzKXLYbWpkXnEz6xB' "></view1>
            <view2 v-if="currentPage.defaultView ==='qWLdteJbLBmlGENl2ucl' "></view2>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @import url(./resources/scss/page.scss);
    @import url(./resources/scss/index.scss);
</style>