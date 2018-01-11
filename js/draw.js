$(function() {
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

 
var painting = document.getElementById('paint');
var paint_style = getComputedStyle(painting);
canvas.width = parseInt(paint_style.getPropertyValue('width'));
canvas.height = parseInt(paint_style.getPropertyValue('height'));

var mouse = {x: 0, y: 0};
 
canvas.addEventListener('mousemove', function(e) {
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
}, false);


ctx.lineJoin = 'round';
ctx.lineCap = 'round';
$('#strokeWidth').change(function(){
	var Width;
		Width = $(this).val();
		ctx.lineWidth = Width;
})
 $('#strokeColour').change(function(){
	var colour;
		colour = $(this).val();
		ctx.strokeStyle = colour;
})
 
canvas.addEventListener('mousedown', function(e) {
    ctx.beginPath();
    ctx.moveTo(mouse.x, mouse.y);
 
    canvas.addEventListener('mousemove', onPaint, false);
}, false);
 
canvas.addEventListener('mouseup', function() {
    canvas.removeEventListener('mousemove', onPaint, false);
}, false);


var onPaint = function() {
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
};

       document.getElementById('clear').addEventListener('click', function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        }, false);
       document.getElementById('save').addEventListener('click', function() {
        localStorage.setItem("imgCanvas",canvas.toDataURL());
        }, false);
		
		if(localStorage && localStorage.getItem('imgCanvas')){
			alert("Previously drawn kit has been loaded");
	  var img=new Image();
     img.onload=function(){
      ctx.drawImage(img,0,0);
                        }
      img.src=localStorage.getItem("imgCanvas");
		}
})




