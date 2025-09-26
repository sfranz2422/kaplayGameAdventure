import globalStateManager from  "./globalState.js";
import oldManGlobalStateManager from "./oldManGlobalState.js";
import playerGlobalStateManager from "./playerGlobalState.js";



// globalStateManager.setFreezePlayer(true)
// console.log(globalStateManager.getFreezePlayer())
export const oldManState = oldManGlobalStateManager().getInstance()

export const gameState = globalStateManager().getInstance()

export const playerState = playerGlobalStateManager().getInstance()


