class Barell {
    constructor(x, y,angle) {
        var options = {
        isStatic: true
       }
       this.body=Bodies.rectangle(x,y,75,25,options);
       this.width=75;
       this.height=25;
       Matter.Body.setAngle(this.body,angle);
       World.add(world,this.body);
  
      };
  
      display(){
        // Draw the tanker the way you like.
        // You could also use an image if you want a specific look
        var pos = this.body.position;
        rectMode(CENTER);
        fill(  93, 109, 126 );
        rect(pos.x,pos.y,this.width,this.height);
        
  
      };
  }
  