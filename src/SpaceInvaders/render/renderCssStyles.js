import SpaceInvadersConfig from "../config/SpaceInvadersConfig.js" 

export default {
    renderCssStyles() {
        const { targetElementSelector } = this
        const { backgroundImage, gameWidth, gameHeight, invadersContainerWidth, gameDificulty, playerEnemyDimension } = SpaceInvadersConfig

        const styleContent = `
            ${ targetElementSelector } .game-container {
                background: url( ${ backgroundImage } );
                background-size: contain;
                position: absolute;
                top: 10px;
                left: 10px;
                width: ${ gameWidth }px;
                height: ${ gameHeight }px;
                border: 2px solid #000;
            }

            ${ targetElementSelector } .invaders-container {
                width: ${ invadersContainerWidth }px;
                display: flex;
                flex-wrap: wrap;
                position: absolute;
                align-items: center;
                justify-content: center;
            }

            ${ targetElementSelector } .invaders-container .invader {
                width: ${ playerEnemyDimension }px;
                height: ${ playerEnemyDimension }px;
                margin: 2.5px;
                background: pink;
                border-radius: 50%;
            }

            ${ targetElementSelector } .game-container .spaceship {
                width: ${ playerEnemyDimension }px;
                height: ${ playerEnemyDimension }px;
                background: red;
                border-radius: 50%;
                position: relative;
                top: ${ gameHeight - playerEnemyDimension * 2 }px;
                left: ${ gameWidth / 2 - playerEnemyDimension / 2  }px;
            }

            /********************************************/

            .invaders-container-animation {
                animation: invadersContainerAnimationHorizontal, invadersContainerAnimationVertical;
                animation-duration: ${ gameDificulty }s, ${ gameDificulty * 30 }s;
                animation-iteration-count: infinite;
                animation-fill-mode: both, forwards;
            }
            @keyframes invadersContainerAnimationHorizontal {
                0% { left: 0; }
                50% { left: ${ gameWidth - invadersContainerWidth }px }
                100% { left: 0; }
            }
            @keyframes invadersContainerAnimationVertical {
                0% { top: 0; }
                100% { top: ${ gameHeight }px }
            }
        `

        const styleElement = document.createElement( 'style' )
        styleElement.innerHTML = styleContent

        this.styleElement = styleElement
        document.head.append( styleElement )
    }
}