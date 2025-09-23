import { playAnimIfNotPlaying } from "./utils.js"

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


export function setSlimeAI(slime){
// console.log(slime.states)
    const idle = slime.onStateEnter("idle", async ()=>{
        slime.stop()
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
        await wait(3)

        slime.enterState(
            directionalStates[
                Math.floor(Math.random()*directionalStates.length)
            ]
        )

    })
    const left = slime.onStateEnter("left", async ()=>{
     slime.flipX = true
        playAnimIfNotPlaying(slime,"slime-side")
        // slime.move(-slime.speed,0)

        await wait(3)

        slime.enterState(
            directionalStates[
                Math.floor(Math.random()*directionalStates.length)
            ]
        )
    })

    const up = slime.onStateEnter("up",async ()=>{
 slime.flipX = false
        playAnimIfNotPlaying(slime,"slime-up")
        await wait(3)

        slime.enterState(
            directionalStates[
                Math.floor(Math.random()*directionalStates.length)
            ]
        )

    })

    const down = slime.onStateEnter("down",async ()=>{
slime.flipX = false
        playAnimIfNotPlaying(slime,"slime-down")
        await wait(3)

        slime.enterState(
            directionalStates[
                Math.floor(Math.random()*directionalStates.length)
            ]
        )
    })

    onSceneLeave(()=>{
        idle.cancel()
        up.cancel()
        left.cancel()
        right.cancel()
        down.cancel()
    })


}