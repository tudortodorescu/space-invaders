import AppConfig from "./AppConfig.js"

export default {
    htmlHeadTitle: 'Space Invaders',
    gameWidth: 350,
    gameHeight: 450,
    backgroundImage: `${ AppConfig.imageFolder }/background.png`,
    faviconImage: `${ AppConfig.imageFolder }/favicon.png`,
    numberOfInvaders: 20,
    invadersContainerWidth: 250,
    playerEnemyDimension: 30,
    gameDificulty: 1 /** 5 easiest | 1 hardest */
}