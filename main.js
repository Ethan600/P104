Webcam.set({
    width: 500,
    height:300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id = 'captured_emotion' src = '" + data_uri + "'>";
    });
}

console.log("ml5's version is," + ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/2NcXwizWv/model.json", emotion_model_loaded);

function emotion_model_loaded(){
    console.log("Model loaded successfully");
}