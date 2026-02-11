import { useResizeObserver } from '@vueuse/core'
import { onMounted, ref } from 'vue'

/**
 * 自适应方案1
 * @param width
 * @param height
 * @returns
 */
export const useAutoSize1 = (width: number, height: number, definition: boolean) => {
  const pageRef = ref()
  const transform = ref<string>('scale(1)')

  const autoSize = () => {
    const scaleX = pageRef.value.offsetWidth / width
    const scaleY = pageRef.value.offsetHeight / height
    if (definition) {
      transform.value = 'scale(' + Math.floor(Math.min(scaleX, scaleY) * 20) / 20 + ')'
    } else {
      transform.value = 'scale(' + Math.min(scaleX, scaleY) + ')'
    }
  }

  onMounted(() => {
    useResizeObserver(pageRef.value, (entries) => {
      autoSize()
    })
  })

  return {
    pageRef,
    transform,
  }
}

/**
 * 自适应方案2
 * @param width
 * @returns
 */
export const useAutoSize2 = (width: number) => {
  const pageRef = ref()
  const transform = ref<string>()

  const autoSize = () => {
    const scaleX = pageRef.value.offsetWidth / width
    transform.value = 'scaleX(' + scaleX + ') scaleY(' + scaleX + ')'
  }

  onMounted(() => {
    useResizeObserver(pageRef.value, (entries) => {
      autoSize()
    })
  })

  return {
    pageRef,
    transform,
  }
}

/**
 * 自适应方案3
 * @param height
 * @returns
 */
export const useAutoSize3 = (height: number) => {
  const pageRef = ref()
  const transform = ref<string>()

  const autoSize = () => {
    const scaleY = pageRef.value.offsetHeight / height
    transform.value = 'scaleX(' + scaleY + ') scaleY(' + scaleY + ')'
  }

  onMounted(() => {
    useResizeObserver(pageRef.value, (entries) => {
      autoSize()
    })
  })

  return {
    pageRef,
    transform,
  }
}

/**
 * 自适应方案4
 * @param width
 * @param height
 * @returns
 */
export const useAutoSize4 = (width: number, height: number, definition: boolean) => {
  const pageRef = ref()
  const transform = ref<string>()

  const autoSize = () => {
    const scaleX = pageRef.value.offsetWidth / width
    const scaleY = pageRef.value.offsetHeight / height
    if (definition) {
      transform.value =
        'scaleX(' + Math.floor(scaleX * 20) / 20 + ') scaleY(' + Math.floor(scaleY * 20) / 20 + ')'
    } else {
      transform.value = 'scaleX(' + scaleX + ') scaleY(' + scaleY + ')'
    }
  }

  onMounted(() => {
    useResizeObserver(pageRef.value, (entries) => {
      autoSize()
    })
  })

  return {
    pageRef,
    transform,
  }
}
