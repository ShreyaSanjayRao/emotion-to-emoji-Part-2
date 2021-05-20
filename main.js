var Predicition1="";
var Predicition2="";
Webcam.set({
    width :350,
    height:350,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function Camera()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_img" src=" '+data_uri +'">';
    });
}
console.log("ml5.version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/6n-N7Rmnm/model.json",modelLoaded);
function modelLoaded()
{
    console.log("modleLoaded");
}
function speak()
{
    var synth=window.speechSynthesis;
    speak_data1="The First Predicition is: "+Predicition1;
    speak_data2="And The Second Predicition is: "+Predicition2;
    var utterthis=new SpeechSynthesisUtterance(speak_data1 + speak_data2);
    synth.speak(utterthis);
}