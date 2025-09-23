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
        {
            speed:30,
            attackPower:0.5,

        },
        "slime",

    ]
}