class bin{
    constuctor(x,y,width,height){
        this.leftBody=Bodies.rectangle(350,100,20,100)
       this.rightBody=Bodies.rectangle(400,100,20,100)
this.bottomBody=Bodies.rectangle(100,100,200,20)
World.add(World.this.bottomBody)
World.add(World.this.rightBody)
World.add(World.this.leftBody)
    }
    display()
    {
     var posbottom=this.bottomBody.position
     var posright=this.rightBody.position
     var posleft=this.leftBody.position
     Push()
         translate(posbottom.x,posbottom.y)
         rotate(angle)
         rectMode(CENTRE)
         Fill(255)
         rect(0,0,this.width,this.height)
         Pop()
    }


}
