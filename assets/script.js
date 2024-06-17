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

let position = 0
let arrow_left = document.querySelector(".arrow_left")
let arrow_right = document.querySelector(".arrow_right")
let dot = document.querySelector(".dot")
let banner_img = document.querySelector(".banner-img")
let banner_text = document.querySelector(".banner-text")
let colonne1 = slides[position]


function basculer(){
	colonne1 = slides[position]
	banner_img.src = colonne1.image
	banner_text.innerHTML = colonne1.tagLine
}
function showdot(){
	let Dot_cont = []
	for(let i = 1; i <= slides.length; i++){
		let N = document.createElement("div")
		let dots = document.querySelector(".dots")
		N.classList.add("dot"+i)
		N.classList.add("dot")
		if(i == 1){
			N.classList.add("dot_selected")
		}
		dots.appendChild(N)
		Dot_cont.push(N)
	}
	console.log(Dot_cont)
	return(Dot_cont)
}

let Dot_cont = showdot()

arrow_left.addEventListener("click",()=>{
	if (position == 0){
		Dot_cont[position].classList.remove("dot_selected")
		position = slides.length-1
		basculer()
		Dot_cont[position].classList.add("dot_selected")
	}
	else{
		Dot_cont[position].classList.remove("dot_selected")
		position -=1
		basculer()
		Dot_cont[position].classList.add("dot_selected")

	}
})
arrow_right.addEventListener("click",()=>{
	if( position == slides.length-1 ){
		Dot_cont[position].classList.remove("dot_selected")
		position = 0
		basculer()
		Dot_cont[position].classList.add("dot_selected")	
	}
	else{
		Dot_cont[position].classList.remove("dot_selected")
		position += 1
		basculer()
		Dot_cont[position].classList.add("dot_selected")	
	}
	})
