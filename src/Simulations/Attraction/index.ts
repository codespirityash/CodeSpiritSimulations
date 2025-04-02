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
        this.canvas.clear();
        
        for (let i = 0; i < this.agents.length; i++) {
            const agent = this.agents[i];
            if (agent.pos.distance(this.attractor.pos) < 200) {
                agent.attract(this.attractor, 2);
            }
            if (agent.pos.distance(this.repulsor.pos) < 200) {
                agent.repel(this.repulsor, 2);
            }
            
            agent.move().draw(this.canvas, true);
        }
        
        this.attractor.draw(this.canvas, true);
        this.repulsor.draw(this.canvas, true);
    }
}