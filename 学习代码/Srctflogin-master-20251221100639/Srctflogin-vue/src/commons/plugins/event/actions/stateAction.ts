import { storeToRefs } from 'pinia'
import { SHJUtils, type IStateAction } from '@shjjs/visual-ui'

import { usePageStore } from '../../../stores/pageStore'

/**
 * 执行状态切换
 * @param event 事件
 */
export const executeStateAction = (stateAction: IStateAction) => {
  try {
    const designerStore = usePageStore()
    const { currentPage } = storeToRefs(designerStore)

    if (!stateAction) {
      return
    }

    stateAction.stateList.forEach((state, index) => {
      const layerId = state.split('[layerId-stateId]')[0]
      const stateId = state.split('[layerId-stateId]')[1]
      const result = currentPage.value.states.find((item) => item.id === layerId)

      /** 设置状态 */
      if (result && result.states) {
        if (stateId === 'default') {
          result.useState = ''
        } else {
          result.useState = stateId
        }

        /** 设置下一次状态 */
        if (stateAction.toggle) {
          const stateIds = ['default', ...result.states.map((item: any) => item.stateId)]
          const nextState = SHJUtils.getNextElement(stateIds, stateId || '')
          if (nextState) {
            stateAction.stateList[index] = `${layerId}[layerId-stateId]${nextState}`
          }
        }
      }

      /** 过度效果 */
      const layer = document.getElementById(layerId || '') as any
      const renderer = (parent: Element) => {
        if (parent && parent.children) {
          for (let i = 0; i < parent.children.length; i++) {
            const child = parent.children[i] as any

            if (child._transitionTimer) {
              clearTimeout(child._transitionTimer)
            }

            if (stateAction.speed !== '') {
              child.style.transition = `all ${stateAction.duration}ms ${stateAction.speed} ${stateAction.delay}ms`

              const timer = stateAction.duration + stateAction.delay
              child._transitionTimer = setTimeout(() => {
                child.style.transition = ''
              }, timer)
            }

            renderer(child)
          }
        }
      }
      if (layer._transitionTimer) {
        clearTimeout(layer._transitionTimer)
      }
      if (stateAction.speed !== '') {
        layer.style.transition = `all ${stateAction.duration}ms ${stateAction.speed} ${stateAction.delay}ms`

        const timer = stateAction.duration + stateAction.delay
        layer._transitionTimer = setTimeout(() => {
          layer.style.transition = ''
        }, timer)
      }
      renderer(layer)
    })
  } catch (error) {
    console.error('执行 切换状态错误', error, event)
  }
}
