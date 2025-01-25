export default class Vector {
    
    constructor(public x:number=0,public y:number=0,public z:number=0){}
    add(v:Vector){
        this.x += v.x
        this.y += v.y
        this.z += v.z
    }
    sub(v:Vector){
        this.x -= v.x
        this.y -= v.y
        this.z -= v.z
    }
    mag(){
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    }
    normalize(){
        const m = this.mag()
        this.x /= m
        this.y /= m
        this.z /= m
    }
    scale(s:number){
        this.normalize()
        this.x *= s
        this.y *= s
        this.z *= s
    }
    distance(v:Vector){
        return Math.sqrt((v.x - this.x) * (v.x - this.x) + (v.y - this.y) * (v.y - this.y) + (v.z - this.z) * (v.z - this.z))
    }
}