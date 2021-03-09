import SpaceInvadersConfig from "../config/SpaceInvadersConfig.js" 

export default {
    renderHtmlElements() {
        this.renderContainer()
        this.renderInvaders()
        this.renderShip()
    },
    renderContainer() {
        const containerElement = document.createElement( 'div' ) 
        containerElement.classList.add( 'game-container' )
        this.containerElement = containerElement

        this.targetAppElement.append( containerElement )
    },
    renderInvaders() {
        [ ...new Array(20) ].map( item => {

            document.createElement( 'div' )
        
        })
    },
    renderShip() {},
}