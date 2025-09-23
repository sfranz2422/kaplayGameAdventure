
import kaplay from "https://unpkg.com/kaplay@3001.0.19/dist/kaplay.mjs";

import world from "./scenes/world.js"

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

    loadSprite("assets", "assets/topdownasset.png",
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
                "slime-idle-down":858,

            }

        });
    scene("world", world);   // no need to pass k
    go("world");
}




// Ensure DOM exists before we run:
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
} else {
    start();
}

