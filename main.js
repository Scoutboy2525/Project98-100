var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout(function()
    {
        var image_id = "pic_1";
        take_snapshot();
        speak_data = "Taking your next Selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis); 
        
    }, 5000);

    setTimeout(function()
{
    var image_id = "pic_2";
    take_snapshot();
    speak_data = "Taking your next Selfie in 10 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis); 
    
}, 10000);

setTimeout(function()
{
    var image_id = "pic_3";
    take_snapshot();
    speak_data = "Taking your next Selfie in 10 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis); 
    
}, 15000);

}

function take_snapshot()
{
    console.log(img_id);

    Webcam.snap(function(data_uri) {
        if(img_id=="pic1"){
            document.getElementById("result1").innerHTML = "<img id="pic1" src="'+data_uri+'"/>';
        }

        if(img_id=="pic2"){
            document.getElementById("result2").innerHTML = "<img id="pic2" src="'+data_uri+'"/>';
        }

        if(img_id=="pic3"){
            document.getElementById("result3").innerHTML = "<img id="pic3" src="'+data_uri+'"/>';
        }

    });
}


