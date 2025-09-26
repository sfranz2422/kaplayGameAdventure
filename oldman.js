import { dialog } from "./dialog.js";
import oldmanLines from "./oldmanDialog.js";
import { gameState, oldManState } from "./stateManager.js";
import { playAnimIfNotPlaying, returnRandomInteger } from "./utils.js"

const directionalStates = [
                "left",
                "right",
                "up",
                "down"]



export function generateOldManComponents(position){
    return [
        sprite("assets",{
            anim:"oldman-down",
        }),
        area({
            shape: new Rect(vec2(2,4),12,12),
        }),
        body({isStatic:true}),
        pos(position),
        "oldman",

    ]
}



export function endInteraction(oldman){
            playAnimIfNotPlaying(oldman,"oldman-down")

}


export async function startInteraction(oldman,player){
    if (player.direction === "left"){
        oldman.flipX = true;
        playAnimIfNotPlaying(oldman,"oldman-side")
    }
        if (player.direction === "right"){
        oldman.flipX = false;
        playAnimIfNotPlaying(oldman,"oldman-side")
    }
    if (player.direction === "down"){
        playAnimIfNotPlaying(oldman,"oldman-up")
    }
    const responses = oldmanLines[gameState.getLocal()]
    // console.log(responses)



    if (oldManState.getNbTalkedOldMan() > 2 ){
        oldManState.setNbTalkedOldMan(1)
       
    }

    if (responses[oldManState.getNbTalkedOldMan()]){
        await dialog(vec2(250,500),responses[oldManState.getNbTalkedOldMan()] )
        oldManState.setNbTalkedOldMan(oldManState.getNbTalkedOldMan()+1)

    }

}




