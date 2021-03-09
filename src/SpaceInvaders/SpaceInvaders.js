import renderHtmlHead from "./render/renderHtmlHead.js"
import renderHtmlElements from "./render/renderHtmlElements.js"
import renderCssStyles from "./render/renderCssStyles.js"
import addEventListeners from "./events/addEventListeners.js"

export default {
    construct({ targetElementSelector }) {
        const targetAppElement =  document.querySelector( targetElementSelector )
        if ( !targetAppElement ) return

        this.targetElementSelector = targetElementSelector
        this.targetAppElement = targetAppElement
    },
    init() {
        this.renderHtmlHead()
        this.renderHtmlElements()
        this.renderCssStyles()
        this.addEventListeners()
    },

    ...renderHtmlHead,
    ...renderHtmlElements,
    ...renderCssStyles,
    ...addEventListeners,
    
}