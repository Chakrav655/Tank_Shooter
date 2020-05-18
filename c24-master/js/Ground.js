class Ground {
  constructor(x, y) {
    var options ={
      isStatic : true
    }
    this.body=Bodies.rectangle(x,y,580,20,options);
    this.width=520;
    this.height=20;
  };

  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill( 130, 224, 170 );
    rect(pos.x, pos.y, this.width, this.height);
  }
};



