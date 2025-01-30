import Vector from "../../Vector"

export default class PhysicsObject {
    pos:Vector=new Vector()
    vel:Vector=new Vector()
    mass:number=1
    constructor(){}
    attract(obj:PhysicsObject, mag:number=1){}
    repel(obj:PhysicsObject, mag:number=1){}
    bound(x:number,y:number,width:number,height:number){}
    addForce(f:Vector){}
    updateMotion(){}
    static Gravity:Vector=new Vector(0,0.1)
}