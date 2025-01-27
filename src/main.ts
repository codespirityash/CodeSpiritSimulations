import Canvas from "./lib/Canvas";
import FallAndBounce from "./Simulations/FallAndBounce";

const canvas = new Canvas(document.getElementById("app") as HTMLElement)
canvas.setSize(500,500)

const fallAndBounce = new FallAndBounce(canvas)
function animation(){
    fallAndBounce.animate()
    requestAnimationFrame(animation)
}
animation()