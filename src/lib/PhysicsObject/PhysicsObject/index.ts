import Vector from "../../Vector";

export default class PhysicsObject {
    pos: Vector;
    vel: Vector;
    mass: number;

    constructor(pos: Vector = new Vector(), vel: Vector = new Vector(), mass: number = 1) {
        this.pos = pos;
        this.vel = vel;
        this.mass = mass;
    }

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
    attract(obj: PhysicsObject, mag: number = 1) {
        const direction = new Vector(obj.pos.x - this.pos.x, obj.pos.y - this.pos.y);
        const distance = direction.mag();
        const forceMagnitude = (mag * this.mass * obj.mass) / (distance * distance);
        direction.normalize();
        direction.scale(forceMagnitude / this.mass);
        this.vel.add(direction);
        return this;
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
    repel(obj: PhysicsObject, mag: number = 1) {
        const direction = new Vector(this.pos.x - obj.pos.x, this.pos.y - obj.pos.y);
        const distance = direction.mag();
        const forceMagnitude = (mag * this.mass * obj.mass) / (distance * distance);
        direction.normalize();
        direction.scale(forceMagnitude / this.mass);
        this.vel.add(direction);
        return this;
    }

    /**
     * Reverses velocity(axis) if position is out of bounds
     * @param x min x
     * @param y min y
     * @param width max x
     * @param height max y
     * @returns 
     */
    bound(x: number, y: number, width: number, height: number) {
        if (this.pos.x < x || this.pos.x > width) {
            this.vel.x *= -1;
        }
        if (this.pos.y < y || this.pos.y > height) {
            this.vel.y *= -1;
        }
        return this;
    }

    /**
     * Adds a force to the object's velocity
     * @param f Vector
     * @returns 
     */
    addForce(f: Vector) {
        this.vel.add(f);
        return this;
    }

    /**
     * Adds updated velocity to the objects position
     * @returns 
     */
    updateMotion() {
        this.pos.add(this.vel);
        return this;
    }

    static Gravity: Vector = new Vector(0, 0.1);
}
