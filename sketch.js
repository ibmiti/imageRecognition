//creating classifier
let mobilenet;

//will later place images within images/
let puffin;

function modelReady(){
  console.log('Model is ready!!!');
  mobilenet.predict(puffin, gotResults); // asking mobile net to predict the image
}
//m5 works with error first argument.. meaning check for error first then results
function gotResults(error, results) {
  if (error) {
    console.error(error);  // ... if error then return error to console
  } else {
    console.log(results);  // else display results into console
    // the results of the predicting.. will return an array with objects with most likely results...
    // for a sum total of 100 percent... we are returning the first index or the top prediction
    // we are then drawing the results into the canvas.. previously we returned it within the
    // console..
    let label = results[0].className;
    let probability  = results[0].probability;
    fill(0);
    textSize(64);
    text(label, 10, height - 100);
    // creating dom elements | will exists below the canvas.. as block-level elements of p 
    createP(label);
    createP(probability);
  }
}

// making sure image fits into the p5 canvas..
// the width, height will fit into the canvas...
function imageReady(){
  image(puffin, 0,0, width,height)
}

function setup() {
  createCanvas(640,480); // creates a canvas with the given dimensions
  //placing image within the canvas | will later place an image of an puffin in images/
  puffin = createImg('images/puffin.jpg', imageReady);
  puffin.hide();
  background(0);  // color of background for canvas

 // m5 supports callbacks and promises
  mobilenet = ml5.imageClassifier('MobileNet', modelReady);

}
