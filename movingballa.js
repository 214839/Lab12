function preload (){
}
function setup() {
  createCanvas(480, 270);
	x = 20;
	y = 40;
	c = 480;
	f = true;
	b = true;
  
}

function draw() {
	background(255);
	fill(255,0,0);
	ellipse(x,y,50,50);  
	if(x == 20)
	{
		f = true;
		b = false;
	}
	if(x == 480)
	{
		f = false;
		b = true
	}
	if(b == true)
	{
		x = x - 5;
	}
	if(f == true)
	{
		x = x  + 5;
	}			
}