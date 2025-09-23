import {playAnimIfNotPlaying} from "./utils.js";

export function generatePlayerComponents(position){
    return [
     sprite("assets",{
         anim:"player-idle-down"
     }),
        area({
            shape: new Rect(vec2(3,4),10,12),

        }),
        body(),
        pos(position),
        opacity(),
        {
            speed:100,
            attackPower:1,
            direction:"down",
            isAttacking:false,
        },
        "player",

    ]
}

export function setPlayerMovement(player){
    onKeyDown((key) => {
        // console.log(key)
        if (["left","a"].includes(key)){
            player.flipX = true
            playAnimIfNotPlaying(player,"player-side")
            player.move(-player.speed,0)
            player.direction = "left"
            return
        }

        else if (["right","d"].includes(key)){

            player.flipX = false
            playAnimIfNotPlaying(player,"player-side")
            player.move(player.speed,0)
            player.direction = "right"
            return
        }

        else if (["up","w"].includes(key)){
            player.flipX = false
            playAnimIfNotPlaying(player,"player-up")
            player.move(0,-player.speed)
            player.direction = "up"
            return
        }
        else if (["down","s"].includes(key)){
            player.flipX = false
            playAnimIfNotPlaying(player,"player-down")
            player.move(0,player.speed)
            player.direction = "down"
            return
        }


    }) // end of on key down

    onKeyRelease(()=>{
        player.stop()
    })


}