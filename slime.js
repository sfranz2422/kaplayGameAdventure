import { playAnimIfNotPlaying, returnRandomInteger } from "./utils.js"

const directionalStates = [
                "left",
                "right",
                "up",
                "down"]



export function generateSlimeComponents(position){
    return [
        sprite("assets",{
            anim:"slime-idle-down"
        }),
        area({
            shape: new Rect(vec2(0,6),16,10),

        }),
        body(),
        pos(position),
        opacity(),
        offscreen(),
        state(
            "idle",
            [
                "idle",
                ...directionalStates
            ]
        ),
        {
            speed:30,
            attackPower:0.5,

        },
        "slime",

    ]
}

// function changeSlimeDirectionOnCollision(slime){
//         if (slime.getCollisions().length > 0){
//            slime.enterState(
//             directionalStates[
//                 Math.floor(Math.random()*directionalStates.length)
//             ]
//         )
//             return
//         }
// }

export function setSlimeAI(slime){
// console.log(slime.states)


    onUpdate(()=>{
        switch (slime.state){
            case "right":
                slime.move(slime.speed,0)
                break
            case "left":
                slime.move(-slime.speed,0)
                break
            case "up":
                slime.move(0,-slime.speed)
                break
            case "down":
                slime.move(0,slime.speed)
                break
            default:


        }



    })



    const idle = slime.onStateEnter("idle", async ()=>{
        slime.stop()
        playAnimIfNotPlaying(slime,"slime-idle-side")
        await wait(3)
        slime.enterState(
            directionalStates[
                Math.floor(Math.random()*directionalStates.length)
            ]
        )
    })
    const right = slime.onStateEnter("right",async ()=>{
        slime.flipX = false
        playAnimIfNotPlaying(slime,"slime-side")
        await wait(returnRandomInteger(3))
        slime.enterState("idle")

   

    })
    const left = slime.onStateEnter("left", async ()=>{
     slime.flipX = true
        playAnimIfNotPlaying(slime,"slime-side")

        await wait(returnRandomInteger(3))
        slime.enterState("idle")
    })

    const up = slime.onStateEnter("up",async ()=>{
 slime.flipX = false
        playAnimIfNotPlaying(slime,"slime-up")
        await wait(returnRandomInteger(3))
        
        slime.enterState("idle")

    })

    const down = slime.onStateEnter("down",async ()=>{
slime.flipX = false
        playAnimIfNotPlaying(slime,"slime-down")
        await wait(returnRandomInteger(3))

        slime.enterState("idle")
    })

    onSceneLeave(()=>{
        idle.cancel()
        up.cancel()
        left.cancel()
        right.cancel()
        down.cancel()
    })


}