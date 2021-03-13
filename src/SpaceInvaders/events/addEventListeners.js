import SpaceInvadersConfig from "../config/SpaceInvadersConfig.js" 
import { detectColision } from '/src/utils/utils.js'

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
            if ( detectColision( this.shipElement, this.invadersContainer ) ) {
                console.log( 'game over' )
                this.invadersContainer.classList.remove( 'invaders-container-animation' )
                this.invadersContainer.style.display = 'none'
            }
        }, 10)
    },
    handleSpaceMoveUp() { 
        
    },
    handleSpaceMoveLeft() { 
        const { x: containerX } = this.containerElement.getBoundingClientRect()
        const { x: shipX } =this.shipElement.getBoundingClientRect()
        
        const shipStyleLeft = shipX - containerX
        
        if ( shipStyleLeft < 18 ) return
        this.shipElement.style.left = `${ shipStyleLeft - 20 }px`
    },
    handleSpaceMoveRight() { 
        const { x: containerX } = this.containerElement.getBoundingClientRect()
        const { x: shipX } =this.shipElement.getBoundingClientRect()
        
        const shipStyleLeft = shipX - containerX
        
        if ( shipStyleLeft > 300 ) return
        this.shipElement.style.left = `${ shipStyleLeft + 20 }px`
    },
}