import { storeToRefs } from 'pinia'
import { type ISwitchViewAction } from '@shjjs/visual-ui'

import { usePageStore } from '../../../stores/pageStore'

/**
 * 执行切换子页面
 * @param event 事件
 */
export const executeSwitchViewAction = (switchViewAction: ISwitchViewAction) => {
  try {
    const designerStore = usePageStore()
    const { currentPage } = storeToRefs(designerStore)

    currentPage.value.defaultView = switchViewAction.viewId
  } catch (error) {
    console.error('切换子页面错误', error, event)
  }
}
