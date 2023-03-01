// import kaboom lib
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

// add a piece of text at position (120, 80)
add([
    text("hello"),
    pos(120, 80),
]);
loadSprite("góry","góry.png")
add([
    sprite("góry"),
    pos(0,0)
])
loadSprite("swiatlo","swiatlo.png")

const swiatlo = add([ 
    sprite("swiatlo"),
    pos(0,0)
])

onUpdate(()=>{
    if(swiatlo.pos.x <500) swiatlo.pos.x=swiatlo.pos.x+1
})
loadSound("muzyka","Feliz navidad ale nie.mp3")

add([
    play("muzyka")
    
])