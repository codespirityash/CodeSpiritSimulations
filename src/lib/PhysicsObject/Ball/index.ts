import Canvas from "../../Canvas";
import Vector from "../../Vector";
import PhysicsObject from "../PhysicsObject";

export default class Ball extends PhysicsObject {
    radius: number;
    color: string;

    constructor(pos: Vector = new Vector(), vel: Vector = new Vector(), radius: number = 1, color: string = "blue", mass: number = 1) {
        super(pos, vel, mass);
        this.radius = radius;
        this.color = color;
    }

    setPos(pos: Vector) {
        this.pos = pos;
        return this;
    }

    setVel(vel: Vector) {
        this.vel = vel;
        return this;
    }

    setRadius(radius: number) {
        this.radius = radius;
        return this;
    }

    setColor(color: string) {
        this.color = color;
        return this;
    }

    draw(canvas: Canvas, fill: boolean = false) {
        canvas.arc(this.pos, this.radius, this.color, fill);
        return this;
    }

    move() {
        this.updateMotion();
        return this;
    }

    static randomBall(width: number, height: number) {
        return new Ball(
            new Vector(Math.random() * width, Math.random() * height),
            new Vector((Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2), 
            Math.random() * 5+ 10, 
            "blue", 
            1 
        );
    }
}
