const containerEL =document.querySelector(".container");
const careers = ["cs student" ,"ai ing" , "cyber security ing"]
let carrerindex = 0 ; 
 let charecterindex = 0 ;
updatetext()

function updatetext() {
    charecterindex++;
    containerEL.innerHTML = `<h1>i am a ${careers[carrerindex].slice(0,charecterindex)}</h1>`;
    if( charecterindex ===careers[carrerindex].length){
        carrerindex++
        charecterindex = 0
    }
    if (carrerindex === careers.length) {
        carrerindex = 0 ;
    }
    setTimeout(updatetext,400);
}
