import { nextTick, onMounted, onUnmounted, ref } from 'vue'

export const useObserveLayerWrapDisplay = (id: string) => {
    const show = ref(false)

    let observer: MutationObserver | null = null

    const observeLayerWrapDisplay = () => {
        const currentElement = document.getElementById(id)
        if (!currentElement) {
            console.warn('未找到当前组件元素')
            return
        }
        const layerWrapElement = currentElement.closest('.layer-wrap')
        if (!layerWrapElement) {
            console.warn('未找到layer-wrap父元素')
            return
        }

        observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (
                    mutation.type === 'attributes' &&
          mutation.attributeName === 'style'
                ) {
                    const target = mutation.target as HTMLElement
                    const display = window.getComputedStyle(target).display
                    show.value = display !== 'none'
                }
            })
        })

        observer.observe(layerWrapElement, {
            attributes: true,
            attributeFilter: ['style']
        })

        const display = window.getComputedStyle(layerWrapElement).display
        show.value = display !== 'none'
    }

    onMounted(() => {
        nextTick(() => {
            observeLayerWrapDisplay()
        })
    })

    onUnmounted(() => {
        if (observer) {
            observer.disconnect()
            observer = null
        }
    })

    return { show }
}
