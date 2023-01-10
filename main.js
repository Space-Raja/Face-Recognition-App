// https://teachablemachine.withgoogle.com/models/oZ86FFLJi/

Webcam.set({
    width:400,
    height:300,
    img_format:"jpg",
    jpg_quality:90,
});

Webcam.attach(camera);

camera = document.getElementById("camera");

function snap(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="snapshot" src="'+data_uri+'"/>';
    })
}


console.log("ml5 version", ml5.version);

model = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/oZ86FFLJi/model.json", model_loaded);

function model_loaded(){
    console.log("Model Saved!!!!!");
}

function check(){
    img= document.getElementById("snapshot");
    model.classify(img, modelClassify);
}

function modelClassify(error, results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("person_name").innerHTML=results[0].label;
    document.getElementById("person_accuracy").innerHTML=results[0].confidence.toFixed(2);
}
}