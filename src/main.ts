import Canvas from "./lib/Canvas";
import Vector from "./lib/Vector";

const canvas = new Canvas(document.getElementById("app") as HTMLElement)
canvas.setSize(500,500)
const pos = new Vector(0,0,0)
const size = 10;

function draw(){
    canvas.clear()
    canvas.arc(pos, size, "red", true)
    requestAnimationFrame(draw)
}
draw()