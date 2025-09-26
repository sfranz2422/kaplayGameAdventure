export default function globalStateManager(){
 let instance = null

 function createInstance(){
    let freezePlayer = false
    let fontSize = 30
    return {
        setFreezePlayer(value){
            freezePlayer = value
        },
        getFreezePlayer(){
            return freezePlayer
        },
        setFontSize(value){
            fontSize = value
        },
        getFontSize(){
            return fontSize
        }
    }

    return {
        getInstance(){
            if(!instance){
                instance = createInstance()
            }
            return instance
        }
    }
 }


}
