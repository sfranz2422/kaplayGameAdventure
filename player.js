import {areAnyOfTheseKeysDown, playAnimIfNotPlaying} from "./utils.js";

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

        if (key === "left" && areAnyOfTheseKeysDown(["up", "down", "w", "s","a"]) === false){
            player.flipX = true
            playAnimIfNotPlaying(player,"player-side")
            player.move(-player.speed,0)
            player.direction = "left"
            return
        }

        else if (key === "a" && areAnyOfTheseKeysDown(["up", "down", "w", "s","left"]) === false){
            player.flipX = true
            playAnimIfNotPlaying(player,"player-side")
            player.move(-player.speed,0)
            player.direction = "left"
            return
        }

        // if (["left","a"].includes(key) && areAnyOfTheseKeysDown(["up", "down", "w", "s"]) === false){
        //     player.flipX = true
        //     playAnimIfNotPlaying(player,"player-side")
        //     player.move(-player.speed,0)
        //     player.direction = "left"
        //     return
        // }

        else if (key === "d" && areAnyOfTheseKeysDown(["up", "down", "w", "s","left","right"]) === false){
            player.flipX = false
            playAnimIfNotPlaying(player,"player-side")
            player.move(player.speed,0)
            player.direction = "right"
            return
        }

        else if (key === "right" && areAnyOfTheseKeysDown(["up", "down", "w", "s","left","d"]) === false){
            player.flipX = false
            playAnimIfNotPlaying(player,"player-side")
            player.move(player.speed,0)
            player.direction = "right"
            return
        }

        // else if (["right","d"].includes(key) && areAnyOfTheseKeysDown(["up", "down", "w", "s"]) === false){

        //     player.flipX = false
        //     playAnimIfNotPlaying(player,"player-side")
        //     player.move(player.speed,0)
        //     player.direction = "right"
        //     return
        // }

        else if (key === "up" && areAnyOfTheseKeysDown(["left", "right", "a", "d","w"]) === false){
           player.flipX = false
            playAnimIfNotPlaying(player,"player-up")
            player.move(0,-player.speed)
            player.direction = "up"
            return
        }
        else if (key === "w" && areAnyOfTheseKeysDown(["left", "right", "a", "d","up"]) === false){
           player.flipX = false
            playAnimIfNotPlaying(player,"player-up")
            player.move(0,-player.speed)
            player.direction = "up"
            return
        }
        // else if (["up","w"].includes(key) && areAnyOfTheseKeysDown(["left", "right", "a", "d"]) === false){
        //     player.flipX = false
        //     playAnimIfNotPlaying(player,"player-up")
        //     player.move(0,-player.speed)
        //     player.direction = "up"
        //     return
        // }

        else if (key === "s" && areAnyOfTheseKeysDown(["left", "right", "a", "d","down"]) === false){
            player.flipX = false
            playAnimIfNotPlaying(player,"player-down")
            player.move(0,player.speed)
            player.direction = "down"
            return
        }
        else if (key === "down" && areAnyOfTheseKeysDown(["left", "right", "a", "d","s"]) === false){
            player.flipX = false
            playAnimIfNotPlaying(player,"player-down")
            player.move(0,player.speed)
            player.direction = "down"
            return
        }
        // else if (["down","s"].includes(key)&& areAnyOfTheseKeysDown(["left", "right", "a", "d"]) === false){
        //     player.flipX = false
        //     playAnimIfNotPlaying(player,"player-down")
        //     player.move(0,player.speed)
        //     player.direction = "down"
        //     return
        // }


    }) // end of on key down

    onKeyRelease(()=>{
        player.stop()
    })


}