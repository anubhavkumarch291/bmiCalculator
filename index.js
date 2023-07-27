let weightSlider=document.getElementById("myWeight");
let weightOutput=document.getElementById("inputWeight");
// height sliders

let heightSlider=document.getElementById("myHeight");
let heightOutput=document.getElementById("inputHeight");

// display slider value

weightOutput.innerHTML=weightSlider.value;
heightOutput.innerHTML=heightSlider.value;

// update sliders in real time while dragging them

weightOutput.oninput=function(){
    weightOutput.innerHTML=this.value;
}
heightOutput.oninput=function(){
    heightOutput.innerHTML=this.value;
}
    
// change weight and height slider value on number

function ShowValWeight(newVal){
    weightSlider.value=newVal;
}
function ShowValHeight(newVal){
    heightSlider.value=newVal;
}
 // event update

 weightSlider.addEventListener("input",function(e){
    weightOutput.value=e.srcElement.value;
 })
 heightSlider.addEventListener("input",function(e){
    heightOutput.value=e.srcElement.value;
 })

 // calculate BMI

 function calculateBMI(){
    let weight=document.bmiForm.realweight.value;
    let height=(document.bmiForm.realheight.value)/100;
    let result=(weight)/Math.pow(height,2);
    let res=document.getElementById("yourbmi");
    let messageOutput=document.getElementById("eveluationMessage");
    let rounded=result.toFixed(1);
    // clear before message calculating new BMI
    // messageOutput.innerHTML="";
    res.innerHTML=" "+ rounded;  // print BMI

    // appropriate message for your BMI Rating

    if(rounded>26){
        messageOutput.innerHTML="<br>Start Workout";
    }
    }
  calculateBMI();