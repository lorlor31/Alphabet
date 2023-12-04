//! pourquoi le zindex marchepas
//comment mettre le focus direct sur li'nput
//pourquoi lapremiere fois que j'appuie sur la touchce, 
//ça fait keypress  vide voir les events key ?
//définir les setimeout en constante pour avoir un id pour les arreter avant de 
//recréer un nouvel élément image ( c peut etre ça la source du pb du pourquoi elle apparait pas)
const images = [
    ["chat","c"] ,
    ["cochon" ,"c"],
    ["girafe" ,"g" ],
    ["singe" , "s" ],
    ["tortue" , "t"],
]


const wrapper = document.querySelector(".wrapper")
const input =document.querySelector(".letters")
//Creation d'une image et animation
const imageAnimated = {
    
    setTimeout1 : 
        setTimeout(()=>image.classList.add("fall"),100)
    ,
    //setTimeout2 : setTimeout(()=>removeImage(),14500),    
    createImage : function () {
        image=document.createElement("img") ,
        imageIndex=parseInt(Math.random()*5) ;
        console.log(imageIndex) ,
        image.src=`./images/${images[imageIndex][0]}.png`;
        //image.src="./images/cochon.png";
        wrapper.append(image) ;
        
        setTimeout(()=>image.classList.add("fall"),100);
        //setTimeout(()=>image.classList.add("disappear"),12000);
        },
}

// image.src=`./images/${images[0][0]}.png` ;



function removeImage(){
    image.classList.toggle("disappear") ;
    clearTimeout(imageAnimated.setTimeout1) ;
    //clearTimeout(imageAnimated.setTimeout2) ;
    image.classList.toggle("fall") ;
    image.remove() ;
    //setTimeout(()=>imageAnimated.image.remove(),500) ;
}

input.addEventListener("keyup",handleKeyUp)
function handleKeyUp(event) {
    let keyPressed=event.target.value;
    console.log(keyPressed)
    if (keyPressed==`${images[imageIndex][1]}`) {
        removeImage() ;

        setTimeout(()=>{imageAnimated.createImage(); 
            // image.style.top ="14dvh" ;
            // image.style.zIndex ="1332" ;
            console.log("coufdfdfd")},10) ;
    }
    event.target.value="" ;
}

imageAnimated.createImage() ;
console.log(imageAnimated.setTimeout1);