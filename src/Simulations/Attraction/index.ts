import Canvas from "../../lib/Canvas";
import Ball from "../../lib/PhysicsObject/Ball";
import Vector from "../../lib/Vector";

export default class Attraction {
    agents: Ball[] = [];
    attractor: Ball;
    repulsor: Ball;

    constructor(public canvas: Canvas) {
        this.agents = new Array(50).fill(0).map(() => Ball.randomBall(canvas.size.width, canvas.size.height));
        this.attractor = new Ball().setPos(new Vector(canvas.size.width / 4, canvas.size.height / 2)).setRadius(10).setColor("green");
        this.repulsor = new Ball().setPos(new Vector(3 * canvas.size.width / 4, canvas.size.height / 2)).setRadius(10).setColor("red");
    }

    animate() {
    }
}
