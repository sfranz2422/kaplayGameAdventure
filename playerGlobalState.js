export default function playerGlobalStateManager(){
 let instance = null

        function createInstance(){
            let isSwordEquipped = false
            const maxHealth = 3
            let health = maxHealth
            let hasKey = false

            return {
            setIsSwordEquipped(value){
                isSwordEquipped = value
            },
            getIsSwordEquipped(){
                return isSwordEquipped
            },
            setHealth(value){
                health = value
            },
            getHealth(){
                return health
            },
                getMaxHealth(){
                return maxHealth
            },
                setHasKey(value){
                hasKey = value
            },
            getHasKey(){
                return hasKey
            },
            



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
