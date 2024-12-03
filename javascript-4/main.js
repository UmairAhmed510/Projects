
let names = document.querySelector(".name")
let btn = document.querySelector(".changeName");
let userInput = document.querySelector("#userInput")
btn.addEventListener("click" , function(){
names.innerHTML = userInput.value;
});

let descInput = document.querySelector("#userInput")
let changedescbtn = document.querySelector(".changeDescription");
let occupation = document.querySelector(".occupation");
changedescbtn.addEventListener("click" , function(){
    occupation.innerHTML = descInput.value;
});

let image = document.querySelector("#profile-image")
let changePicBtn = document.querySelector(".changePicture");
let imageUrls = [
    "photo-2.jpg",
    "photo-3.jpg",
    "photo-4.jpg",
    "photo-5.jpg",

    
];
let currentImagesIndex = 0 ;
changePicBtn.addEventListener("click" , function(){
    image.setAttribute("src" ,imageUrls[currentImagesIndex])
    currentImagesIndex = (currentImagesIndex + 1) % imageUrls.length;
});

let changeBackGroundbtn = document.querySelector(".changeBackground");
let backroundColor = document.querySelector(".profile-card")    
let color = ["skyblue" , "Orange" , "Blue" , "green" , "gray"];
count = 0;
changeBackGroundbtn.addEventListener("click" , function(){
    backroundColor.style.backgroundColor = color[count];
    count = (count + 1) % color.length;
})

let resetBtn = document.querySelector(".resetFile");
resetBtn.addEventListener("click" , function(){
names.innerHTML = "UMAIR AHMED";
occupation.innerHTML = "STUDENT";
backroundColor.style.backgroundColor = "aqua    ";
image.setAttribute("src" ,"photo-2.jpg");
})