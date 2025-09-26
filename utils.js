export function playAnimIfNotPlaying(gameObj,animationName){
    if(gameObj.curAnim() !== animationName){
        gameObj.play(animationName)
    }
}

export function areAnyOfTheseKeysDown(keys){
    for (const key of keys){
        if (isKeyDown(key)) return true
    }
    return false
}


export async function fetchMapData(mapPath){
    return await (await fetch(mapPath)).json()

}


export function colorizeBackground(r,g,b){
add([
    rect(canvas.width,canvas.height),
    color(r,g,b),
    fixed(),
])

}

export function drawTiles(map,layer,tileheight, tilewidth){
let nbOfDrawnTiles = 0
    const tilePos = vec2(0,0)
    for (const tile of layer.data){
        if (nbOfDrawnTiles % layer.width === 0) {
            tilePos.x = 0
            tilePos.y += tileheight

        }else{
            tilePos.x += tilewidth
        }
        nbOfDrawnTiles ++
        if (tile === 0) continue;
        map.add([
            sprite("assets", {frame:tile-1}),
            pos(tilePos.x, tilePos.y),
            offscreen(),

        ])
    }
}

export function returnRandomInteger(num){
    return Math.floor(Math.random()*num) + 1
}

export function parallaxBackground(){
 loadSprite("back", "back.png");
    const IMAGE_WIDTH = 1280
    add([sprite("back"),pos(0,-50)])

    const layers = [
    {
        speed: -3,
        parts: [
            add([sprite("back"), pos(0,-50)],fixed()),
            add([sprite("back"), pos(IMAGE_WIDTH,-50)]),
       ],
       //if other pictures add them here
    }
]


onUpdate(() => {
  for (const layer of layers) {
    if (layer.parts[1].pos.x < 0) {
      layer.parts[0].moveTo(layer.parts[1].pos.x + IMAGE_WIDTH, 0);
      layer.parts.push(layer.parts.shift());
    }

    layer.parts[0].move(layer.speed, 0);
    layer.parts[1].move(layer.speed, 0);
  }
});



} // end of parallaxBackground

export function generateColliderBoxComponents(width, height,position,tag){
    return [
        area({
            shape:new Rect(vec2(0),width,height),
        }),
        pos(position),
        body({isStatic:true}),
        offscreen(),
        tag,
    ]
}
export function drawBoundries(map,layer){
    for (const object of layer.objects){
        map.add(generateColliderBoxComponents(
            object.width,
            object.height,
            vec2(object.x,object.y+16),
            object.name,
            )
            );
    }
}

