import {colorizeBackground, drawBoundries, drawTiles, fetchMapData} from "./utils.js";
import {generatePlayerComponents, setPlayerMovement} from "./player.js";
import {generateSlimeComponents} from "./slime.js";

export default async function world(){
    colorizeBackground(76,170,255)
    const mapData = await fetchMapData("world.json")
const map = add([
    pos(0,0)
    ]
)
const entities = {
    player:null,
    slimes:[],

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

                else if (object.name === "slime"){
                    entities.slimes.push(map.add(generateSlimeComponents(vec2(object.x, object.y))))
                }
            }
            // need custom logic

            continue;
        }
      drawTiles(map,layer, mapData.tileheight,mapData.tilewidth)


    }
    setCamScale(4)
    setCamPos(entities.player.worldPos())

    onUpdate(()=>{
        if (entities.player.pos.dist(camPos())){
             tween(
                camPos(),
                entities.player.worldPos(),
                0.15,
                (val)=>{
                    setCamPos(val)
                },
                easings.linear,
            )
        }
    })

    setPlayerMovement(entities.player)
}