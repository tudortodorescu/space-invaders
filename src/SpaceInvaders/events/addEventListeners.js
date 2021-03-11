import SpaceInvadersConfig from "../config/SpaceInvadersConfig.js" 

export default {
    addEventListeners() {
        const keydownConfig = { 
            'ArrowUp': 'handleSpaceMoveUp',
            'ArrowLeft': 'handleSpaceMoveLeft',
            'ArrowRight': 'handleSpaceMoveRight',
        }
        addEventListener( 'keydown', event => {
            if ( !keydownConfig[ event.key ] ) return

            this[keydownConfig[ event.key ]]()
        })

        //////////////////////////

        setInterval( _ => {
            const { gameHeight, shipHeight } = SpaceInvadersConfig
            const { y: topDistance, height: containerHeight } = this.invadersContainer.getBoundingClientRect()
        
            if ( 
                gameHeight - shipHeight <
                topDistance + containerHeight
            ) {
                console.log( 'game over' )
                this.invadersContainer.classList.remove( 'invaders-container-animation' )
                this.invadersContainer.style.display = 'none'
            }
        }, 10)
    },
    handleSpaceMoveUp() { },
    handleSpaceMoveLeft() { },
    handleSpaceMoveRight() { },
}