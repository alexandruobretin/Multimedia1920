/*
skills to know when working with canvas:
1. create and resize canvas
2. draw elements
3. animate elements
4. interact with elements

Canvas objects:
1. rectangles
2. lines
3. arcs/circles
4. images
5. text
*/

var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');

/*

// rectangle
// ctx.fillRect(x, y, width, height)
ctx.fillStyle = "#FF0000"
ctx.fillRect(200, 200, 200, 200);
ctx.fillStyle = "blue"
ctx.fillRect(300, 500, 200, 200);
ctx.fillStyle = "rgba(200, 60, 120, 0.5)"
ctx.fillRect(500, 100, 200, 200);


// line
ctx.beginPath();
ctx.moveTo(100,100);
ctx.strokeStyle = "#FF0000"
ctx.lineTo(100,200);
ctx.lineTo(200,200);
ctx.closePath();
ctx.stroke();

// arcs and circles
// ctx.arc(x,y, radius, startAngle, endAngle, drawCounterclockwise)
ctx.beginPath();
ctx.arc(500, 500, 30, 0, Math.PI * 2, false);
ctx.fillStyle = "rgba(255,0,0,1)";
ctx.fill();

*/
mouse = {
	x: undefined,
	y: undefined
}

function Circle(x, y, radius, color) {
	this.x = x;
	this.y = y;
	this.dx = Math.random() * 2;
	this.dy = Math.random() * 2;
	this.color = color;
	this.radius = radius;
	
	this.draw = function(){
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		
		ctx.fillStyle = color;
		ctx.fill();
	}
	
	this.update = function(){
		if(this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
			this.dx = -this.dx;
		}
		
		if(this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
			this.dy = -this.dy;
		}
		
		this.x += this.dx;
		this.y += this.dy;
		
		if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50)
		{
			if(this.radius < 80)
			{
				this.radius += 5;
			}
		}
		else if(this.radius > radius)
		{
			this.radius -=1;
		}
		
		this.draw();
	}
}

var radius = 30;
var bubbles = [];

function init(){ 
	bubbles = [];
	
	for(var i=0; i<100; i++){
		var x = Math.random() * (window.innerWidth - 2 * radius) + radius;
		var y = Math.random() * (window.innerHeight - 2 * radius) + radius;
		
		var r = Math.random() * 255;
		var g = Math.random() * 255;
		var b = Math.random() * 255;
		var color = "rgba(" + r +"," + b+"," + g+ ", 0.5)";
		
		var each = new Circle(x,y,radius, color);
		each.draw();
		
		bubbles.push(each);
	}
}
init();

function animate(){
	requestAnimationFrame(animate);
	
	ctx.clearRect(0,0, innerWidth, innerHeight);
	
	for(var i=0; i<bubbles.length; i++){
		bubbles[i].update();
	}
}

animate();

window.addEventListener('mousemove', function(event){
	mouse.x = event.x;
	mouse.y = event.y;
});

window.addEventListener('resize', function(event) {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	
	init();
});