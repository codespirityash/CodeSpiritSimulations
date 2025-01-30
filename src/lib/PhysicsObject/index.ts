import Ball from "./Ball";


export default {
    Ball
}

class PhysicsObject {
    position: { x: number; y: number };
    velocity: { x: number; y: number };
    acceleration: { x: number; y: number };
    mass: number;
  
    constructor(x = 0, y = 0, mass = 1) {
      this.position = { x: x, y: y };
      this.velocity = { x: 0, y: 0 };
  
      this.acceleration = { x: 0, y: 0 };
  
      this.mass = mass;
    }
  
    applyForce(force: { x: number; y: number }) {
      this.acceleration.x = this.acceleration.x + force.x / this.mass;
      this.acceleration.y = this.acceleration.y + force.y / this.mass;
    }
  
    // Function to update the object's position over time
    update(deltaTime: number) {
      // Update velocity using acceleration
      this.velocity.x = this.velocity.x + this.acceleration.x * deltaTime;
      this.velocity.y = this.velocity.y + this.acceleration.y * deltaTime;
  
      // Update position using velocity
      this.position.x = this.position.x + this.velocity.x * deltaTime;
      this.position.y = this.position.y + this.velocity.y * deltaTime;
  
      // Reset acceleration (forces are temporary)
      this.acceleration.x = 0;
      this.acceleration.y = 0;
    }
  
    // Function to log the object's current state
    logStatus() {
      console.log("Position:", this.position);
      console.log("Velocity:", this.velocity);
    }
  }
  
  const ball = new PhysicsObject(0, 0, 5); 
  console.log("Initial state:");
  ball.logStatus();
  
  ball.applyForce({ x: 10, y: -9.8 }); // Apply a force 
  console.log("\nAfter applying force:");
  ball.logStatus();
  
  ball.update(0.1); // Update the object for 0.1 seconds
  console.log("\nAfter update:");
  ball.logStatus();
  