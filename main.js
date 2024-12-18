canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
nasa_image_array=["mars.jpg", "mars1.jpg", "mars2.jpg", "mars3.jpg", "mars4.jpg", "mars5.jpg"];
random_nuber=Math.floor(Math.random()*6);
background_image = nasa_image_array[random_nuber];
rover_image="rover.png";
rover_width = 100;
rover_height = 90;
rover_x = 10;
rover_y = 10;
function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;
    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}
function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadrover() 
{
ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
keyPressed=e.keyCode;
console.log(keyPressed);
if(keyPressed=="38")
{
up();
console.log("up")
}
if(keyPressed=="40")
{
    down();
    console.log("down")
}
if(keyPressed=="37")
    {
        left();
        console.log("left")
    }
    if(keyPressed=="39")
        {
            right();
            console.log("right")
        }
}
function up()
{
if (rover_y>=0)
{
rover_y=rover_y-10;
uploadBackground();
uploadrover();
}
}
function down()
{
if (rover_y<=500)
{
rover_y=rover_y+10;
uploadBackground();
uploadrover();
}
}
function left()
{
if (rover_x>=10)
{
rover_x=rover_x-10;
uploadBackground();
uploadrover();
}
}
function right()
{
if (rover_x<=700)
{
rover_x=rover_x+10;
uploadBackground();
uploadrover();
}
}