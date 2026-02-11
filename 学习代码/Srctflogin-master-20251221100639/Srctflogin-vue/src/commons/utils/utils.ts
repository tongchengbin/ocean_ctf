import { SHJParseEvent } from '@shjjs/visual-ui'
import { isNumber } from 'lodash'

/**
 * 执行事件
 * @param event 事件集合
 * @param type 事件类型
 * @param params 事件参数
 */
export const execEvent = (event: any[], type: string, params?: any) => {
  SHJParseEvent.parseEvents(event, type, params)
}

/**
 * 执行图层状态事件
 * @param layerId 图层ID
 * @param states 状态集合
 * @param type 事件类型
 * @param params 事件参数
 */
export const execStatesEvent = (layerId: string, states: any[], type: string, params?: any) => {
  let layer: any = states.find((item) => item.id === layerId)
  if (layer.useState) {
    const result = layer.states.find((item: any) => item.stateId === layer.useState)
    if (result) {
      layer = result
    }
  }
  SHJParseEvent.parseEvents(layer.layerEvent, type, params)
}

/**
 * 查找图层状态
 * @param layerId 图层ID
 * @param states 状态集合
 * @returns
 */
export const findLayerUseState = (layerId: string, states: any[]) => {
  const layer = states.find((item) => item.id === layerId)
  if (layer) {
    return layer.useState
  }
  return ''
}

/**
 * 图层样式1
 * @param layerId 图层ID
 * @param states 状态集合
 * @returns
 */
export const layerRenderStyles1 = (layerId: string, states: any[]): any => {
  let layer: any = states.find((item) => item.id === layerId)
  if (layer.useState) {
    const result = layer.states.find((item: any) => item.stateId === layer.useState)
    if (result) {
      layer = result
    }
  }
  if (layer) {
    if (layer.rotate3dX === undefined) layer.rotate3dX = 0
    if (layer.rotate3dY === undefined) layer.rotate3dY = 0
    if (layer.rotate3dZ === undefined) layer.rotate3dZ = 0
    if (layer.transformOriginX === undefined) layer.transformOriginX = 50
    if (layer.transformOriginY === undefined) layer.transformOriginY = 50

    let perspective = ''
    if (layer.rotate || layer.rotate3dX || layer.rotate3dY || layer.rotate3dZ) {
      perspective = layer.perspective === undefined ? '20000px' : `${layer.perspective}px`
    }
    return {
      width: parseInt(layer.width.toString()) + 'px',
      height: parseInt(layer.height.toString()) + 'px',
      transform: `matrix(1, 0, 0, 1, ${parseInt(layer.left.toString())}, ${parseInt(layer.top.toString())})`,
      visibility: layer.visible ? 'visible' : 'hidden',
      display: layer.visible ? 'block' : 'none',
      zIndex: layer.zIndex,
      mixBlendMode: layer.blendMode || '',
      perspective,
    }
  }
}

/**
 * 图层样式2
 * @param layerId 图层ID
 * @param states 状态集合
 * @returns
 */
export const layerRenderStyles2 = (layerId: string, states: any[]): any => {
  let layer: any = states.find((item) => item.id === layerId)
  if (layer.useState) {
    const result = layer.states.find((item: any) => item.stateId === layer.useState)
    if (result) {
      layer = result
    }
  }
  if (layer) {
    let animations = ''
    if (
      layer.animation &&
      layer.animation.enter &&
      layer.animation.enter.name &&
      layer.animation.enter.count > 0
    ) {
      animations = `${layer.animation.enter.duration}ms ease ${layer.animation.enter.delay}ms  normal both running ${layer.animation.enter.count} ${layer.animation.enter.name}`
    }
    return {
      transform: `rotate(${layer.rotate}deg) rotateX(${layer.rotate3dX}deg) rotateY(${layer.rotate3dY}deg) rotateZ(${layer.rotate3dZ}deg)`,
      transformOrigin: `${layer.transformOriginX}% ${layer.transformOriginY}%`,
      animation: animations,
    }
  }
}

/**
 * 图层样式3
 * @param layerId 图层ID
 * @param states 状态集合
 * @returns
 */
export const layerRenderStyles3 = (layerId: string, states: any[]): any => {
  let layer: any = states.find((item) => item.id === layerId)
  if (layer.useState) {
    const result = layer.states.find((item: any) => item.stateId === layer.useState)
    if (result) {
      layer = result
    }
  }
  if (layer) {
    const border = layer.border
    const shadow = layer.shadow

    let borderTop = '0px'
    let borderLeft = '0px'
    let borderRight = '0px'
    let borderBottom = '0px'

    if (layer.border) {
      borderTop = border.value.itemStyle.top ? border.value.width + 'px' : '0px'
      borderLeft = border.value.itemStyle.left ? border.value.width + 'px' : '0px'
      borderRight = border.value.itemStyle.right ? border.value.width + 'px' : '0px'
      borderBottom = border.value.itemStyle.bottom ? border.value.width + 'px' : '0px'
    }

    try {
      layer.radius = JSON.parse(layer.radius)
    } catch {
      //
    }

    return {
      pointerEvents: layer.layerEvent && layer.layerEvent.length > 0 ? 'all' : 'none',
      opacity: layer.opacity ? layer.opacity + '%' : 0,
      borderWidth: border.show ? border.value.width + 'px' : '0px',
      borderStyle: border.show ? border.value.style : '',
      borderColor: border.show ? border.value.color : '',
      borderTopWidth: borderTop,
      borderLeftWidth: borderLeft,
      borderRightWidth: borderRight,
      borderBottomWidth: borderBottom,
      borderRadius: isNumber(layer.radius)
        ? layer.radius + 'px'
        : ` ${layer.radius.leftTop}px ${layer.radius.rightTop}px ${layer.radius.rightBottom}px ${layer.radius.leftBottom}px`,
      background: layer.background.show ? layer.background.value : '',
      boxShadow: shadow.show
        ? `${shadow.value.x}px ${shadow.value.y}px ${shadow.value.ambiguity}px ${shadow.value.diffusion}px ${shadow.value.color}`
        : '',
    }
  }
}
