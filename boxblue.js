class Box extends BaseClass 
{
  constructor(x,y,width,height)
  {
    super(x,y,width,height);
    //this.image = loadImage("polygon.png");
  }

  display()
  {
    fill(103,209,234);
    super.display();
  }
}