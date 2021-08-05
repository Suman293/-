function preload()
{
   
}

function setup()
{
  Canvas=createCanvas(300,300);
  Canvas.position(620,390);

  Video=createCapture(VIDEO)
  Video.hide();

  classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json",modelLoaded);
}

function draw()
{
   image(Video,0,0,300,300);
   classifier.classify(Video,gotResult)
}

function modelLoaded()
{
  console.log("Yay Model Loaded!!!");
}

function gotResult(error,result)
{
  if (error) {
    console.log(error)
  }
  else {
    console.log(result)
    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHTML.confidense.toFixed(3);
  }
}
