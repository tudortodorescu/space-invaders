import SpaceInvadersConfig from "../config/SpaceInvadersConfig.js" 

export default {
    renderHtmlHead() {
        this.renderHtmlHeadTitle()
        this.renderHtmlHeadFavicon()
    },
    
    renderHtmlHeadTitle() {
        const titleElement = document.createElement( 'title' )
        titleElement.innerHTML = SpaceInvadersConfig.htmlHeadTitle

        document.head.append( titleElement )
        this.titleElement = titleElement
    },

    renderHtmlHeadFavicon() {
        const faviconElement = document.createElement( 'link' )
        faviconElement.setAttribute( 'rel', 'icon' )
        faviconElement.setAttribute( 'type', 'image/png' )
        faviconElement.setAttribute( 'href', SpaceInvadersConfig.faviconImage )

        document.head.append( faviconElement )
        this.faviconElement = faviconElement
    }
}