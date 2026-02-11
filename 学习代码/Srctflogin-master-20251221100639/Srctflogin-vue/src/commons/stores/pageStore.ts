import { defineStore } from 'pinia'
import { DataSourceUtils, EventUtils } from '@shjjs/visual-ui'

/**
 * 用于存储当前正在渲染的页面基础的信息
 * 包含变量、环境、状态等集合信息
 */
export const usePageStore = defineStore('page', {
  state() {
    return {
      currentPage: {},
    } as {
      currentPage: {
        sceneId: number
        sceneOption: any
        globalEvent: any[]
        variableData: any[]
        environments: any[]
        states: any[]
        defaultView: string
      }
    }
  },
  actions: {
    setCurrentPage(page: any): void {
      this.currentPage = page
      /**
       * 设置必要数据
       */
      DataSourceUtils.setEnvironments(page.environments)
      DataSourceUtils.executeAllVariable(page.variableData)
      EventUtils.setGlobalEvent(page.globalEvent)
    },
  },
})
