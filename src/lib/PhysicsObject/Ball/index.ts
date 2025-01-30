import Canvas from "../../Canvas"
import Vector from "../../Vector"
import PhysicsObject from "../PhysicsObject"

export default class Ball extends PhysicsObject {
    radius: number=1
    color: string="red"

    constructor() {
        super()
    }
    setPos(pos: Vector) {
        this.pos = pos
        return this
    }
    setVel(vel: Vector) {
        this.vel = vel
        return this
    }
    setRadius(radius: number) {
        this.radius = radius
        return this
    }
    setColor(color: string) {
        this.color = color
        return this
    }
    draw(canvas: Canvas, fill: boolean = false) {
        canvas.arc(this.pos, this.radius, this.color, fill)
        return this
    }
    move() {
        this.updateMotion()
        return this
    }
    static randomBall(width: number, height: number) {
        return new Ball()
    }
}