stat="";
input_value="";
function preload()
{

}
function setup()
{
    canvas=createCanvas(480,380);
    canvas.center();
    cam=createCapture(VIDEO);
    cam.size(480,380);
    cam.hide();
}
function start()
{
    objd=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
    input_value=document.getElementById("inputbox").value;
}
function modelLoaded()
{
    console.log("CocoSSD Model loaded!");
    stat=true;
}
function draw()
{
    image(cam,0,0,480,380);
}