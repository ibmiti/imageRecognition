//creating classifier
let mobilenet;
let video;
let label = '';

function modelReady(){
  console.log('Model is ready!!!');
  mobilenet.predict(gotResults);
}
//m5 works with error first argument.. meaning check for error first then results
function gotResults(error, results) {
  if (error) {
    console.error(error);  // ... if error then return error to console
  } else {
    console.log(results);  // else display results into console
    let label = results[0].className;
    // fill(0);
    // textSize(64);
    // text(label, 10, height - 100);
    mobilenet.predict(gotResults);
  }
}

// making sure image fits into the p5 canvas..
// the width, height will fit into the canvas...
// function imageReady(){
//   image(puffin, 0,0, width,height)
// }

function setup() {
  createCanvas(640,550); // creates a canvas with the given dimensions
  video = createCapture(VIDEO);
  video.hide();
  background(0);  // color of background for canvas
  mobilenet = ml5.imageClassifier('MobileNet', video , modelReady);
}

function draw(){
  background(0);
  image(video, 0,0);
  fill(255);
  textSize(32);
  text(label, 10, height - 20);

}
