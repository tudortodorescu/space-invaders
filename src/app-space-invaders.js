
import spaceInvaders from './SpaceInvaders/SpaceInvaders.js'

spaceInvaders.construct({ 
    targetElementSelector: '#spaceInvadersApp'
})

window.spaceInvaders = spaceInvaders
spaceInvaders.init()

