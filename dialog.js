async function displayLine(textContainer,line){

    for (const char of line){
        await new Promise((resolve, reject)=>{
            setTimeout(()=>{
                textContainer.text += char
                resolve()
            },10)
        })
    }

}


export async function dialog(position,content){
    const dialogBox = add([
        rect(800,200),
        pos(position),
        fixed()
    ])

    const textContainer = dialogBox.add([
        text("",{
            font:"gameboy",
            width:700,
            lineSpacing:15,
            size:30,
        }),
        color(27,29,52),
        pos(20,40),
        fixed(),

    ])

    let index = 0
    await displayLine(textContainer,content[index])
    let lineFinishedDisplayed = true

    const dialogKey = onKeyPress("space",async ()=>{
        if (!lineFinishedDisplayed) return
        index++
        if (!content[index]){
            destroy(dialogBox)
            dialogKey.cancel()
            return
        }
        textContainer.text = ""
        lineFinishedDisplayed = false
        await displayLine(textContainer,content[index])
        lineFinishedDisplayed = true
    })

}