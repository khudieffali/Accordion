// var btn1 = document.querySelector(".btn1")
// var btn2 = document.querySelector(".btn1")
// var btn3 = ocument.querySelector(".btn1")
// var p1 = document.querySelector(".p1")
// var p2 = document.querySelector(".p2")
// var p3 = document.querySelector(".p3")
// btn1.onclick = function () {
//     p1.style="display:block"
//     p2.style="display:none"
//     p3.style="display:none"
// }
// btn2.onclick = function () {
//     p1.style="display:none"
//     p2.style="display:block"
//     p3.style="display:none"
// }
// btn3.onclick = function () {
//     p1.style="display:none"
//     p2.style="display:none"
//     p3.style="display:block"
// }
// 'use strict'
// var btn=document.querySelectorAll(".tab button")
// var p=document.querySelectorAll(".tab p")
// for (let i = 0; i < btn.length; i++) {
//     btn[i].onclick=function () {
//         for (let h = 0; h < p.length; h++) {
//             p[h].classList.remove("active")

//         }
//         this.nextElementSibling.classList.toggle ("active")

//     }
//    }
// var mySlider = [
//     "img/post-sm-01.jpg",
//     "img/post-sm-02.jpg",
//     "img/post-sm-03.jpg",
//     "img/post-sm-04.jpg",
//     "img/post-sm-05.jpg"
// ]
// var img=document.querySelector(".slider img")
// img.src=mySlider[0]
// var sag=document.querySelector(".next")
// var sol=document.querySelector(".prev")
// currentSlide = 0
// sag.onclick = function(){
//     currentSlide++;
//     if(currentSlide>=mySlider.length) {
//         currentSlide=0
//     }
//     img.src=mySlider[currentSlide]
// }
// sol.onclick = function (){
//     currentSlide--;
//     if( currentSlide == -1) {
//         currentSlide = mySlider.length-1
//     }
//     img.src=mySlider[currentSlide]
// }
// sag.onclick=nextSlider
// function nextSlider() {
//     currentSlide=(currentSlide+1+mySlider.length)%mySlider.length;
//     img.src=mySlider[currentSlide]
// }
// sol.onclick=prevSlider
// function prevSlider() {
//     currentSlide=(currentSlide-1+mySlider.length)%mySlider.length;
//     img.src=mySlider[currentSlide]
// }







// const score=95

// if (score>=51 && score < 61){
// console.log(" Belede");
// }else if(score>=61 && score <71) {
// console.log(" Kafi");
// }else if (score>=71 && score<81){
//     console.log(" yaxsi");
// }else if (score>=81 && score < 91) {
//     console.log(" cox yaxsi");
// }else if (score>=91 && score<=100) {
//     console.log(" BU ISIN ICINDESENDE");
// }else {
//     console.log("Bu is senniy deyil");
// }
// var fruit1={
//     name:"kivi",
//     price:2.50
// }

// var fruit2={
//     name:"orange",
//     price:3
// }

// var fruit3={
//     name:"banan",
//     price:5
// }

// var fruits=[fruit1,fruit2,fruit3]

// var currentPrice=20
// var res=prompt(" Hansi meyveni almaq isteyirsiz?")

// console.log(res);
// for (var i = 0; i < fruits.length; i++) {
//         if(fruits[i].name==res){
//             currentPrice=currentPrice-fruits[i].price
//             console.log(currentPrice);
//         }

// }
// var myArr=[5,12,35,21,-5,-9,56]
// function findElement(ar) {
//     let maxNumber=ar[0];
//     let minNumber=ar[0];
//     var newArr=[];
//     for (let i = 0; i < ar.length; i++) {
//         if (maxNumber < ar[i]){
//             maxNumber=ar[i]
//         }
//         if(minNumber > ar[i]) {
//             minNumber=ar[i]
//         }
//         }
//         return maxNumber-minNumber;
// }
// console.log(findElement(myArr));
// var ad="Anar"
// var arr=["Ayxan","Seymur","Hikmet","Ali","Anar","Aksin"]
// l=arr.length
// function findName(arr) {
//     for (let i = 0; i < l; i++) {
//         if (ad==arr[i]){
//             return true;
//         }
//     }
//     return false;
// }
// console.log(findName(arr));





// var myArr = [5, 3, -5, 12, 32, -6, -45]

// var findElement = function (ar) {
//     let stop,i,j;
//     for (i = 0; i < ar.length; i++) {
//         for (j = 0, stop=ar.length - i; j < stop; j++) {
//             if (ar[j] > ar[j + 1]) {
//                 swap (ar, j, j + 1)
//             }
//         }
//     }
//     return ar
// }
// console.log(findElement(myArr));


// function swap(arr, first_Index, second_Index){
//         var temp = arr [first_Index];
//         arr[first_Index] = arr[second_Index];
//         arr[second_Index] = temp;
// }


// var btn = document.querySelectorAll("#accordion button")
// for (let i = 0; i < btn.length; i++) {
//     btn[i].onclick = function () {
//         for (let j = 0; j < btn.length; j++) {
//             btn[j].nextElementSibling.classList.remove("active")

//         }
// //         this.nextElementSibling.classList.add("active")
// //     }
// // }
// const images = [
//     "img/post-sm-01.jpg",
//     "img/post-sm-02.jpg",
//     "img/post-sm-03.jpg",
//     "img/post-sm-04.jpg",
//     "img/post-sm-05.jpg"
// ]
// const inext = document.querySelector(".next");
// const iprev = document.querySelector(".prev")
// const sliderImg = document.querySelector("#slider img")
// let currentSlide = 0;
// sliderImg.src = images[currentSlide];
// inext.onclick = function () {
//     clearInterval(sliderclear)
//     nextSlider()
//     setTimeout(function () {
//         setInterval(() => {
//             nextSlider()
//         }, 1000);
//     }, 2000)
// }
// iprev.onclick = function () {
   
//     prevSlider()
//     setTimeout(function () {


// }

// function nextSlider() {
//     currentSlide++;
//     if (currentSlide >= images.length)
//         currentSlide = 0
//     sliderImg.src = images[currentSlide]
// }

// function prevSlider() {
//     currentSlide--;
//     if (currentSlide = -1)
//         currentSlide = images.length - 1
//     sliderImg.src = images[currentSlide]
// }


// var sliderclear = setInterval(function () {
//     nextSlider()
// }, 1000)
var sliderAll=document.querySelector("#slider .slider-all")
var sliderItem=sliderAll.querySelectorAll(".slider-item")


var sliderWidth=document.querySelector("#slider").offsetWidth;
sliderAll.style.width=sliderWidth*sliderItem.length+"px";
var next=document.querySelector(".next")
var prev=document.querySelector(".prev")
let currentSlider=0

next.onclick=function () {
sliderChange(currentSlider+1)
    
}
prev.onclick=function () {
    sliderChange(currentSlider-1)
        
    }
function sliderChange(cr) {
    currentSlider=(cr+sliderItem.length) % sliderItem.length;
    sliderAll.style.left=-(sliderWidth*currentSlider)+"px"

    
}