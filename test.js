// const canvas = document.getElementById('canvas')
// const context = canvas.getContext('2d')

// //set the area of our canvas element It should be equals
// //to hieght and width specifide in style.css fofr #canvas

// canvas.width = 800;
// canvas.height = 450;

// class ArrowAndCircle{
//     i = 600;
//     arrowColor = 'black'
//     constructor(x,y,radius,color){
//         this.x = x;
//         this.y = y;
//         this.radius = radius;
//         this.color = color;
//     }

//     drawCircle(context){
//         context.fillStyle = this.color;
//         context.beginPath();
//         context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
//         context.closePath();
//         context.stroke();
//         context.fill();
//     }

//     drawArrow(i,context){
//         context.strokeStyle = this.arrowColor;
//         context.beginPath();
//         context.moveTo(this.i,this.y);
//         context.lineTo(this.i+100,this.y);
//         context.moveTo(this.i,this.y);
//         context.lineTo(this.i+20,this.y-15);
//         context.moveTo(this.i,this.y);
//         context.lineTo(this.i+20,this.y+15);
//         context.lineWidth = 5;
//         context.stroke();
//         context.fill()
//         context.closePath()
//     }
// }

// let c1 = new ArrowAndCircle(100,105,50,'red')

// c1.drawCircle(context)
// c1.drawArrow(context)


// const array = [600,400,200,155]
// const moveArrow = () => {
//     for (let i = 0; i<array.length; i++) {
//         let color = ''
//         if(i == array.length-1){
//             color = "black"
           
//         }else{
//             color = 'white';
//         }
//        setInterval(()=>{
        
//         c1.drawArrow(arry[i],context)
//         if(i == array.length-1){
//             this.color = 'grey'
//             c1.drawCircle(context)
//         }
//        },100)
//     }
    
// }

aa = [-454,-444,-424,-408,-408,-422,-430,-452,-450,-445,-437,-424,-417,-434,-440,-448,-450,-440,-424,-417,-432,-449,-457,-426]
a = -454
b = aa.filter(t=>t==a)
console.log(b)