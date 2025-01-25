import Vector from "../Vector";

export default class Canvas {
    canvas:HTMLCanvasElement=document.createElement("canvas");
    c:CanvasRenderingContext2D=this.canvas.getContext("2d") as CanvasRenderingContext2D;
    size={width:0,height:0}
    constructor(public parent:HTMLElement){
        this.canvas.width=this.size.width
        this.canvas.height=this.size.height
        this.parent.appendChild(this.canvas)
    }
    setSize(width:number,height:number){
        this.size.width=width
        this.size.height=height
        this.canvas.width=width
        this.canvas.height=height
    }
    clear(){
        this.c.clearRect(0,0,this.size.width,this.size.height)
    }
    arc(pos: Vector, size:number, color:string, fill:boolean=false){
        this.c.beginPath()
        this.c.arc(pos.x,pos.y,size,0,2*Math.PI)
        if (fill){
            this.c.fillStyle=color
            this.c.fill()
        }else{
            this.c.strokeStyle=color
            this.c.stroke()
        }
    }
}