let audio = document.getElementById("audio");
let canvas = document.getElementById("wave");
options = { type:"bars", stroke:5,colors:["#24292e","#547ee2"]}
let wave = new Wave();
wave.fromElement(audio,canvas,{
               type: "shine",
               colors: ["red", "white", "blue"]
            });
console.log("Hi!")