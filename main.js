
// import kaplay from "https://unpkg.com/kaplay@3001.0.19/dist/kaplay.mjs";
import kaplay from "./kaplay.mjs";


import world from "./world.js"
import house from "./house.js";

// Create kaboom *when called*, not on import.
function initKaplay() {
    return kaplay({
        global:true,
        width: 1280,
        height: 720,
        letterbox: true,
    });
}









function start() {
    initKaplay();// sets up global kaboom API
    loadFont("gameboy", "gb.ttf")
   
    loadSprite("assets", "topdownasset.png",
        {
            sliceX:39,
            sliceY:31,
            anims:{
                "player-idle-down":936,
                "player-down":{
                  from:936,
                  to:939,
                  loop:true,

                },
                "player-idle-side":976,
                "player-idle-up":1014,
                "player-side":{
                    from:976,
                    to:978,
                    loop:true,

                },
                "player-up":{
                    from:1014,
                    to:1017,
                    loop:true,

                },
                "slime-idle-down":{
                    from:858, to: 859, loop:true
                },
                "slime-idle-up":{
                    from:897, to: 898, loop:true
                },
                "slime-idle-side":{
                    from:860, to: 861, loop:true
                },
                "slime-down":{
                    from:858, to: 859, loop:true
                },
                "slime-side":{
                    from:860, to: 861, loop:true
                },
                "slime-up":{
                    from:897, to: 898, loop:true
                },
                "oldman-down":866,
                "oldman-side":907,
                "oldman-up":905,

            },

        });
    scene("world", world);   // no need to pass k
    scene("house", house)
    go("world");
}




// Ensure DOM exists before we run:
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
} else {
    start();
}

