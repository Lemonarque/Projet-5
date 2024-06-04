const slides = [
	{
		image:"./assets/images/slideshow/slide1.jpg",
		tagLine:"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		image:"./assets/images/slideshow/slide2.jpg",
		tagLine:"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		image:"./assets/images/slideshow/slide3.jpg",
		tagLine:"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		image:"./assets/images/slideshow/slide4.png",
		tagLine:"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let N1 = document.querySelector(".dot1")
let N2 = document.querySelector(".dot2")
let N3 = document.querySelector(".dot3")
let N4 = document.querySelector(".dot4")
const Dot_cont = [N1,N2,N3,N4]
let position = 0
let arrow_left = document.querySelector(".arrow_left")
let arrow_right = document.querySelector(".arrow_right")
let dot = document.querySelector(".dot")
let banner_img = document.querySelector(".banner-img")
let banner_text = document.querySelector(".banner-text")
let colonne1 = slides[position]
let colonne2 = Dot_cont[position]

function basculer(){
	colonne1 = slides[position]
	colonne2 = Dot_cont[position]
	banner_img.src = colonne1.image
	banner_text.innerHTML = colonne1.tagLine
}


arrow_left.addEventListener("click",()=>{
	if (position == 0){
		Dot_cont[position].classList.remove("dot_selected")
		position = slides.length-1
		basculer()
		colonne2.classList.add("dot_selected")
	}
	else{
		Dot_cont[position].classList.remove("dot_selected")
		position -=1
		basculer()
		colonne2.classList.add("dot_selected")

	}
})
arrow_right.addEventListener("click",()=>{
	if( position == slides.length-1 ){
		Dot_cont[position].classList.remove("dot_selected")
		position = 0
		basculer()
		colonne2.classList.add("dot_selected")	
	}
	else{
		Dot_cont[position].classList.remove("dot_selected")
		position += 1
		basculer()
		colonne2.classList.add("dot_selected")	
	}
	})
