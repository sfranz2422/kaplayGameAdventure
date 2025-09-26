import { endInteraction, generateOldManComponents, startInteraction } from "./oldman.js";
import { generatePlayerComponents, setPlayerMovement } from "./player.js";
import { colorizeBackground, drawBoundries, drawTiles, fetchMapData } from "./utils.js";

export default async function house(){
    colorizeBackground(27,29,52)

const mapData = await fetchMapData("house.json")
const map = add([
    pos(520,200)
    ]
)
const entities = {
oldman:null,
player:null,

}


 const layers = mapData.layers;
    for (const layer of layers){
        if (layer.name === "Boundaries"){
            drawBoundries(map,layer)
            continue;
        }
        if (layer.name === "SpawnPoints"){
            for (const object of layer.objects){
                if (object.name === "player"){
                    entities.player = map.add(generatePlayerComponents(vec2(object.x, object.y)))
                    // continue
                }
                else if (object.name === "oldman"){
                    entities.oldman = map.add(generateOldManComponents(vec2(object.x, object.y)))
                                }
                
            }
            // need custom logic

            continue;
        }
      drawTiles(map,layer, mapData.tileheight,mapData.tilewidth)


    }

    setCamScale(4)
        setPlayerMovement(entities.player)

        entities.player.onCollide("door-exit",()=>{
            go("world")
        })
    
   entities.player.onCollide("oldman",()=>{
        startInteraction(entities.oldman, entities.player)
   })

   entities.player.onCollideEnd("oldman",()=>{
        endInteraction(entities.oldman)
   })

}
