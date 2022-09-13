import { App } from 'vue'

const customDirectives = {
  install(app: App) {
    app.directive('scroll', {
      mounted: (el: HTMLElement) => {
        const handleOnScroll = () => {
          // 画面内判定がtrueの際に実行
          if (isInScreen(el)) {
            window.removeEventListener('scroll', handleOnScroll)
            el.classList.add('is_visible')
          }
        }
        window.addEventListener('scroll', handleOnScroll)
      },
    })
    // 画面内判定処理の切り出し
    const isInScreen = (el: HTMLElement) => {
      const { top: elementTop, bottom: elementBottom } = el.getBoundingClientRect()
      // 画面下端 < HTML要素の下端 && HTML要素の上端 < 画面上端
      return window.screenTop < elementTop && elementBottom < window.innerHeight
    }
  },
}

export default customDirectives
