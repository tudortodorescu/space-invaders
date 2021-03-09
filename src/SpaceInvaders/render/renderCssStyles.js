import SpaceInvadersConfig from "../config/SpaceInvadersConfig.js" 

export default {
    renderCssStyles() {
        const styleContent = `
            ${ this.targetElementSelector } .game-container {
                background: url( ${ SpaceInvadersConfig.backgroundImage } );
                background-size: contain;
                position: absolute;
                top: 10px;
                left: 10px;
                width: ${ SpaceInvadersConfig.gameWidth }px;
                height: ${ SpaceInvadersConfig.gameHeight }px;
                border: 2px solid #000;
            }
        `

        const styleElement = document.createElement( 'style' )
        styleElement.innerHTML = styleContent

        this.styleElement = styleElement
        document.head.append( styleElement )
    }
}