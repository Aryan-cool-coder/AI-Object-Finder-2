var status = "";
function preload() {
    video = createVideo(VIDEO);
    video.hide();
    
}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();

}
function draw() {
    image(video, 0, 0, 500, 500);

}

function start() {
    objectDetection = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('modelStatus').innerHTML = "Status: Detecting Objects";
    detectingObject = document.getElementById('objectDetect').value;
}

function modelLoaded() {
    console.log("model is loaded");
    status = true;
}