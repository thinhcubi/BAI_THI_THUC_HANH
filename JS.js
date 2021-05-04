

 class Circle{
    constructor(x,y,radius,color) {
      this.x = x;
       this.y = y;
        this.radius = radius;
        this.color = color;
        this.ctx = document.getElementById("myCanvas").getContext('2d')
   } render(){
        this.ctx.beginPath();
       this.ctx.fillStyle = this.color;
        this.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI)
         this.ctx.fill();
     }
}
