import Canvas from "../../Canvas"
import Vector from "../../Vector"

export default class Ball{
    public constructor(
        public pos:Vector=new Vector(),
        public vel:Vector=new Vector(),
        public mass:number=1,
        public radius:number=10,
        public color:string='red',
    ){
        this.pos=pos
        this.vel=vel
        this.mass=mass
        this.radius=radius
        this.color=color
    }
    draw(canvas:Canvas, fill:boolean=false){
        canvas.arc(this.pos, this.radius, this.color, fill)
    }
    bound(x:number,y:number, width:number, height:number){
        if (this.pos.x + this.radius > width){
            this.pos.x = width - this.radius
            this.vel.x *= -1
        }else if (this.pos.x - this.radius < x){
            this.pos.x = x+this.radius
            this.vel.x *= -1
        }
        if (this.pos.y + this.radius > height){
            this.pos.y = height - this.radius
            this.vel.y *= -1
        }else if (this.pos.y - this.radius < y){
            this.pos.y = y+this.radius
            this.vel.y *= -1
        }
    }
    move(friction:number){
        this.vel.scale(friction)
        this.pos.add(this.vel)
    }
}