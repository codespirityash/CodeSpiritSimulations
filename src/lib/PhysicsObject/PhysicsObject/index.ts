import Vector from "../../Vector"

export default class PhysicsObject {
    pos:Vector=new Vector()
    vel:Vector=new Vector()
    mass:number=1
    constructor(){}
    /**
     * uses Newton's Law of Gravitation
     * 
     * forceMag = G * m1 * m2 / r^2
     * AforceDir = A-B
     * BforceDir = B-A
     * A(force) = AforceDir * forceMag
     * B(force) = BforceDir * forceMag
     * 
     * @param obj PhysicsObject
     * @param mag number to scale the force
     * @returns this
     */
    attract(obj:PhysicsObject, mag:number=1){
        return this
    }
    /**
     * uses Newton's Law of Gravitation
     * 
     * forceMag = -G * m1 * m2 / r^2
     * AforceDir = A-B
     * BforceDir = B-A
     * A(force) = AforceDir * forceMag
     * B(force) = BforceDir * forceMag
     * 
     * @param obj PhysicsObject
     * @param mag number to scale the force
     * @returns this
     */
    repel(obj:PhysicsObject, mag:number=1){
        return this
    }
    /**
     * Reverses velocity(axis) if position is out of bounds
     * @param x min x
     * @param y min y
     * @param width max x
     * @param height max y
     * @returns 
     */
    bound(x:number,y:number,width:number,height:number){
        return this
    }
    /**
     * Adds a force to the objects velocity
     * @param f Vector
     * @returns 
     */
    addForce(f:Vector){
        return this
    }
    /**
     * Adds updated velocity to the objects position
     * @returns 
     */
    updateMotion(){
        return this
    }
    static Gravity:Vector=new Vector(0,0.1)
}