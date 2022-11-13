//getting the canvas element
const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

canvasLeft = canvas.offsetLeft + canvas.clientLeft;
canvasTop = canvas.offsetTop + canvas.clientTop;
console.log(canvasLeft,canvasTop)

var xx;
var yy;
canvas.addEventListener('click',(event)=>{
    xx = event.pageX - canvasLeft;
    yy = event.pageY - canvasTop;
    console.log(xx,yy)
});

const redX = [-454,-444,-424,-408,-408,-422,-430,-452,-450,-445,-437,-424,-417,-434,-440,-448,-450,-440,-424,-417,-432,-449,-457,-426];
const redY = [-190,-190,-188,-188,-172,-174,-175,-175,-168,-163,-166,-166,-159,-146,-150,-159,-134,-132,-135,-138,-158,-158,-172,-172];

// cosole.log(redX.filter(t=>t==xx)[0])


var setY = 0
//set the area of our canvas element It should be equals
//to hieght and width specifide in style.css fofr #canvas

canvas.width = 800;
canvas.height = 450;

//static circle
const drawCircle = (aa,color) => {
    context.fillStyle = color;
    context.beginPath();
    context.arc(100,aa,50, 0, 2 * Math.PI)
    context.closePath();
    context.stroke();
    context.fill();
}


//dyanamic circle
const drawCircle3 = (x,y,r,color) => {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
    context.closePath();
    context.stroke();
    context.fill();
}

//whole wide arrow
const drawArrow = () => {
    context.beginPath();
    context.moveTo(600, 105);
    context.lineTo(630, 70);
    context.lineTo(630, 95);
    context.lineTo(750, 95);
    context.lineTo(750, 115);
    context.lineTo(630, 115);
    context.lineTo(630, 140);
    context.lineTo(600, 105);
    context.stroke();
    context.fill();

}

const array = [600,400,155] // x cordinates for movement of the arrow.
const moveArrow = () => {
    for (let i = 0; i<array.length; i++) {
        let color = ''
        if(i == array.length-1){
            color = "black"
           
        }else{
            color = 'white';
        }
       setInterval(()=>{
        
        a(array[i],setY,color)
        if(i == array.length-1){
            drawCircle(setY,'grey')
        }
       },0)
    }
    
}

var a = (i,y,color) =>{
    this.i = i;
    this.y = y;
    setY = this.y
    context.strokeStyle = color;
    context.beginPath();
    context.moveTo(i,this.y);
    context.lineTo(i+100,this.y);
    context.moveTo(i,this.y);
    context.lineTo(i+20,this.y-15);
    context.moveTo(i,this.y);
    context.lineTo(i+20,this.y+15);
    context.lineWidth = 5;
    context.stroke();
    context.fill()
    context.closePath()
}

//drawing the Canvas Elements.
drawCircle3(100,70,50,"red");
a(600,70,'black')
function Moving1(){
    drawCircle3(100,70,50,"red");
    a(600,70,'black')
    moveArrow();
}

drawCircle3(100,175,50,'blue');
a(600,175,'black')
function Moving2(){
    drawCircle3(100,175,50,'blue');
    a(600,175,'black')
    moveArrow();
}


drawCircle3(100,280,50,'green');
a(600,280,'black')
function Moving3(){
    drawCircle3(100,280,50,'green');
    a(600,280,'black')
    moveArrow();
}

drawCircle3(100,385,50,'yellow');
a(600,385,'black')
function Moving4(){
    drawCircle3(100,385,50,'yellow');
    a(600,385,'black')
    moveArrow();
}

var RelodWin = () =>{
    location.reload()
}











// a(600);
// a(155);
// a(400)

// drawCircle1();


//getting image to our canvas

// const img = new Image();
// img.src = './b.jpeg'

// img.addEventListener('load',()=>{
//     context.drawImage(img,0,0)
// })



