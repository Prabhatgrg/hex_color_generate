
var hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];


const change = document.getElementById("changer");
const color_name = document.querySelector(".color");

change.addEventListener('click', function(){
    let hex_color = "#";
    for(i=0;i<6;i++){
        hex_color += hex[random_number];
    }

    color_name.textContent = hex_color;
    document.body.style.backgroundColor = hex_color;
})

function random_number()
{
    return Math.floor(Math.random()*hex.length);
}