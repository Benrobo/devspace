let box = document.querySelectorAll(".box")
console.log(box.length)
let animeOP = ["fade-up","fade-left", "flip-left","zoom-in"]
let rand = Math.floor(Math.random() * animeOP.length)
if(box.length > 1){
    box.forEach((bx)=>{
        bx.setAttribute("data-aos", animeOP[rand])
    })
}
else{
    box[0].setAttribute("data-aos", animeOP[rand])
}