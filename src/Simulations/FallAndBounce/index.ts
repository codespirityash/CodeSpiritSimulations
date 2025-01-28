import Canvas from "../../lib/Canvas";
import Ball from "../../lib/PhysicsObject/Ball";
import Vector from "../../lib/Vector";

export default class FallAndBounce {
    agents: Ball[] = []
    constructor(public canvas: Canvas) {
        this.agents = new Array(50).fill(0).map(() => Ball.randomBall(canvas.size.width, canvas.size.height))
    }
    computation() { }
    animate() {
        this.canvas.clear()
        for (let i = 0; i < this.agents.length; i++) {
            this.agents[i].bound(0, 0, this.canvas.size.width, this.canvas.size.height)
                .addForce(new Vector(0, 1))
                .move()
                .draw(this.canvas, true)

        }
    }
}