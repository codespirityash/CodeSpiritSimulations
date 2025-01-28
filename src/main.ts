import Canvas from "./lib/Canvas";
import FallAndBounce from "./Simulations/FallAndBounce";

const canvas = new Canvas(document.body as HTMLElement)
canvas.setSize(window.innerWidth, window.innerHeight)

const fallAndBounce = new FallAndBounce(canvas)
function animation(){
    fallAndBounce.animate()
    requestAnimationFrame(animation)
}
animation()