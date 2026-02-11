import { nextTick } from 'vue'
import { isArray } from 'lodash'
import { type IVisibledAction } from '@shjjs/visual-ui'

const timeoutTimerList: any[] = []

/**
 * 执行显示/隐藏
 * @param event 事件
 */
export const executeVisibledAction = (visibledAction: IVisibledAction) => {
  try {
    if (visibledAction.layerIds && isArray(visibledAction.layerIds)) {
      nextTick(() => {
        visibledAction.layerIds.forEach((id: string) => {
          const layer = document.getElementById(id) as HTMLElement
          const isExistTimer = timeoutTimerList.find((item) => item.id === layer.id)
          if (isExistTimer) {
            clearTimeout(isExistTimer.timer)
            timeoutTimerList.splice(
              timeoutTimerList.findIndex((item) => item.id === layer.id),
              1,
            )
          }
          if (layer) {
            if (visibledAction.status === 'show') execEventAnimationEnter(visibledAction, layer)
            if (visibledAction.status === 'hide') execEventAnimationExit(visibledAction, layer)
            if (visibledAction.status === 'toggle')
              layer.style.visibility === 'visible'
                ? execEventAnimationExit(visibledAction, layer)
                : execEventAnimationEnter(visibledAction, layer)
          }
        })
      })
    }
  } catch (error) {
    console.error('执行 显示/隐藏错误', error, event)
  }
}

/**
 * 执行 进入动画
 * @param event 事件
 * @param layer 层
 */
function execEventAnimationEnter(visibledAction: IVisibledAction, layer: HTMLElement) {
  try {
    const { animations } = visibledAction
    /** 1 播放动画 */
    const firstChild = layer.firstElementChild as HTMLElement
    firstChild.style.animation = `${animations.enter.name} ${animations.enter.duration}ms ease ${animations.enter.delay}ms  normal both running ${animations.enter.count}`
    /** 2 处理子集及DOM */
    if (animations.enter.name) {
      console.log('执行 显示 + 进入动画', layer.id)
      showDom(layer)
    }
    if (!animations.enter.name) {
      console.log('执行 显示', layer.id)
      showDom(layer)
    }
  } catch (error) {
    console.error('执行 显示错误', error, event)
  }
}

/**
 * 执行 退出动画
 * @param event 事件
 * @param layer 层
 */
function execEventAnimationExit(visibledAction: IVisibledAction, layer: HTMLElement) {
  try {
    const { animations } = visibledAction
    /** 1 播放动画 */
    const firstChild = layer.firstElementChild as HTMLElement
    firstChild.style.animation = `${animations.exit.name} ${animations.exit.duration}ms ease ${animations.exit.delay}ms  normal both running ${animations.exit.count}`
    /** 2 处理子集及DOM */
    if (animations.exit.name) {
      console.log('执行 隐藏 + 退出动画', layer.id)
      const totalDuration =
        (animations.exit.delay + animations.exit.duration) * animations.exit.count
      const timeoutTimer = setTimeout(() => {
        hiddenDom(layer)
        timeoutTimerList.splice(
          timeoutTimerList.findIndex((item) => item.id === layer.id),
          1,
        )
      }, totalDuration)
      timeoutTimerList.push({ id: layer.id, timer: timeoutTimer })
    }
    if (!animations.exit.name) {
      console.log('执行 隐藏', layer.id)
      hiddenDom(layer)
    }
  } catch (error) {
    console.error('执行 隐藏错误', error, event)
  }
}

/**
 * 显示DOM
 * @param dom
 */
function showDom(dom: HTMLElement) {
  dom.style.visibility = 'visible'
  dom.style.display = 'block'
}

/**
 * 隐藏DOM
 * @param dom
 */
function hiddenDom(dom: HTMLElement) {
  dom.style.visibility = 'hidden'
  dom.style.display = 'none'
}
