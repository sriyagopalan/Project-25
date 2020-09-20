class Ground{
    constructor(){
        var options = {
            isStatic:true 
        }
        this.body = Bodies.rectangle(420, 590, 200, 10, options);
        this.width = 1200;
        this.height = 15;
        World.add(world, this.body);
    };
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("yellow");
        rect(pos.x, pos.y, this.width, this.height);
    }
}