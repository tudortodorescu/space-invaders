
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
    },
    handleSpaceMoveUp() { },
    handleSpaceMoveLeft() { },
    handleSpaceMoveRight() { },
}