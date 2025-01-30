import Vector from "../../Vector"

export default class PhysicsObject {
    pos:Vector=new Vector()
    vel:Vector=new Vector()
    mass:number=1
    constructor(){}
    attract(obj:PhysicsObject, mag:number=1){
        return this
    }
    repel(obj:PhysicsObject, mag:number=1){
        return this
    }
    bound(x:number,y:number,width:number,height:number){
        return this
    }
    addForce(f:Vector){
        return this
    }
    updateMotion(){
        return this
    }
    static Gravity:Vector=new Vector(0,0.1)
}