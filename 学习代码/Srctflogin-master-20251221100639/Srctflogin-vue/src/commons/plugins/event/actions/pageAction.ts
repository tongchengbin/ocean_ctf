import { DataSourceUtils, EventUtils, type IPageAction } from '@shjjs/visual-ui'

import router from '../../../router'

/**
 * 执行页面跳转
 * @param event 事件
 * @param params 参数
 * @returns
 */
export const executePageAction = (pageAction: IPageAction) => {
  const parameter = DataSourceUtils.replaceStringVariables(pageAction.parameter)
  const query = parameter ? EventUtils.urlParamToJson(parameter) : null

  router.replace({ path: pageAction.target, query })
}
