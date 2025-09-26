export default function globalStateManager(){
 let instance = null

 function createInstance(){
    let freezePlayer = false
    let fontSize = 30
    let locale = "english"
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
        },
        setLocal(value){
            locale = value
        },
        getLocal(){
            return locale
        }

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
