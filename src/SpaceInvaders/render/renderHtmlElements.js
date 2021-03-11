import SpaceInvadersConfig from "../config/SpaceInvadersConfig.js" 

export default {
    renderHtmlElements() {
        this.renderContainer()
        this.renderInvaders()
        this.renderShip()
    },
    renderContainer() {
        const containerElement = document.createElement( 'div' ) 
        containerElement.classList.add( ...[ 'game-container', 'js_game_container' ])
        
        this.containerElement = containerElement
        this.targetAppElement.append( containerElement )
    },
    renderInvaders() {
        const invadersContainer = document.createElement( 'div' )
        invadersContainer.classList.add( ...[ 
            'invaders-container',
            'invaders-container-animation',
            'js_invaders_container'
        ] )
        
        this.invadersContainer = invadersContainer
        this.containerElement.append( invadersContainer );
        
        ////////////////////////////////

        [ ...new Array( SpaceInvadersConfig.numberOfInvaders ) ].map( _ => {

            const invaderElement = document.createElement( 'div' )
            invaderElement.classList.add( ...[ 'invader', 'js_invader' ] )

            this.invadersContainer.append( invaderElement )
        })

        //////////////////////////////////

        setInterval( _ => {
            const reverseIt = +Math.random().toString().substr( 5, 3 ) % 2 === 0
            this.invadersContainer.style.animationDirection = reverseIt ? 'alternate, normal' : 'alternate-reverse, normal'
        }, (SpaceInvadersConfig.gameDificulty * 1000) / 2)
    },
    renderShip() {},
}