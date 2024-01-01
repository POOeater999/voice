x=0
y=0
draw_circle=""
draw_rectangle=""

function setup(){
    canvas=createCanvas(1800,800)
}

var SpeechRecognition = window.webkitSpeechRecognition ;
var Recognition = new SpeechRecognition()

function start(){
    document.getElementById("status").innerHTML = "SAY SOMETHING YOU BIG POOPIE 💩🚽" ;
    Recognition.start()
}


Recognition.onresult = function(event){
    console.log(event) ;
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "speech has been recognised as - " + content +" 💩🚽" ;
    if(content=="circle"){
        x = Math.floor(Math.random()*1900)
        y = Math.floor(Math.random()*800)
        document.getElementById("status").innerHTML = "started drawing a big fat 💩🚽 CIRCLE" ;

        draw_circle = "set"
    }

    if(content=="rectangle"){
        x = Math.floor(Math.random()*1800)
        y = Math.floor(Math.random()*800)
        document.getElementById("status").innerHTML = "started drawing a big fat 💩🚽 RecTAngle" ;

        draw_rectangle = "set"
    }

    
}







function draw() {
    if (draw_circle == "set") {
        radius = Math.floor(Math.random()*1000)
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "finished drawing a big fat 💩🚽 Circlec" ;
        draw_circle = ""
        
    }










    if (draw_rectangle == "set") {
        length = Math.floor(Math.random()*1000)
        width = Math.floor(Math.random()*400)

        rect(x,y,length,width);
        document.getElementById("status").innerHTML = "finished drawing a big fat 💩🚽 RECTANGLEE" ;
        draw_rectangle = ""
        
    }
}
