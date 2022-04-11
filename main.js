function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/LVOB51wc2/model.json",modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
if(error)
{
    console.error(error);
}
else{
    console.log(results);
    red=Math.round(Math.random()*255)+1;
    blue=Math.round(Math.random()*255)+1;
    green=Math.round(Math.random()*255)+1;
document.getElementById("result_label").innerHTML="I can hear..."+results[0].label;


if (results[0].label=="Cat"){
    img.src="https://th.bing.com/th/id/OIP.Ti0zaOrN9DOu-F3qEXSxBAHaLx?pid=ImgDet&rs=1";
}

else if (results[0].label=="dog"){
    img.src="https://cdn.imgbin.com/19/3/24/imgbin-cute-dog-GyEfxxXF3amYuGF7LGfV2JSqm.jpg";
}

else if (results[0].label=="snake"){
    img.src="https://i.pinimg.com/736x/cc/87/2f/cc872f05dadd3c8b13080b8ed5273a19.jpg";
}

else if (results[0].label=="cow"){
    img.src="https://i.pinimg.com/originals/ce/c8/0d/cec80de196db8ba98ea409e35aa8ae1c.jpg";
}

else if (results[0].label=="lion"){
    img.src="https://th.bing.com/th/id/OIP.pIN73kfEkCLzyP0sUZBZCwAAAA?pid=ImgDet&rs=1";
}

else{
    img.src="https://th.bing.com/th/id/OIP._GB40KsJqNYIJjxs9kDmZwHaHv?pid=ImgDet&rs=1";
}
}
}