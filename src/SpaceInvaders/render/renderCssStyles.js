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

            ${ this.targetElementSelector } .invaders-container {
                width: ${ SpaceInvadersConfig.invadersContainerWidth }px;
                display: flex;
                flex-wrap: wrap;
                position: absolute;
                align-items: center;
                justify-content: center;
            }

            ${ this.targetElementSelector } .invaders-container .invader {
                width: 30px;
                height: 30px;
                margin: 2.5px;
                background: pink;
                border-radius: 50%;
            }

            /********************************************/

            .invaders-container-animation {
                animation: invadersContainerAnimationHorizontal, invadersContainerAnimationVertical;
                animation-duration: ${ SpaceInvadersConfig.gameDificulty }s, ${ SpaceInvadersConfig.gameDificulty * 30 }s;
                animation-iteration-count: infinite;
                animation-fill-mode: both, forwards;
            }
            @keyframes invadersContainerAnimationHorizontal {
                0% { left: 0; }
                50% { left: ${ SpaceInvadersConfig.gameWidth - SpaceInvadersConfig.invadersContainerWidth }px }
                100% { left: 0; }
            }
            @keyframes invadersContainerAnimationVertical {
                0% { top: 0; }
                100% { top: ${ SpaceInvadersConfig.gameHeight }px }
            }
        `

        const styleElement = document.createElement( 'style' )
        styleElement.innerHTML = styleContent

        this.styleElement = styleElement
        document.head.append( styleElement )
    }
}