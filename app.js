const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');
	
	burger.addEventListener('click',() =>{
		//toggle Nav
		nav.classList.toggle('nav-active');
		//animate Links
		navLinks.forEach((link,index) => {
			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
			}
		});
		//burger animation
		burger.classList.toggle('toggle');
	});
}
	
navSlide();



const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active');

	if(document.body.classList.contains('dark')){
		localStorage.setItem('dark-mode', 'true');
	} else {
		localStorage.setItem('dark-mode', 'false');
	}
});

	if(localStorage.getItem('dark-mode') === 'true'){
	document.body.classList.add('dark');
	btnSwitch.classList.add('active');
	} else {
	document.body.classList.remove('dark');
	btnSwitch.classList.remove('active');
}



const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft =document.querySelector("#btn-left");
const btnRight =document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next(){
	let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
	slider.style.marginLeft = "-200%";
	slider.style.transition = "all 0.5s";
	setTimeout(function(){
		slider.style.transition = "none";
		slider.insertAdjacentElement('beforeend', sliderSectionFirst);
		slider.style.marginLeft = "-100%";
	},500);
}
function Prev(){
	let sliderSection = document.querySelectorAll(".slider__section");
	let sliderSectionLast = sliderSection[sliderSection.length -1];
	slider.style.marginLeft = "0";
	slider.style.transition = "all 0.5s";
	setTimeout(function(){
		slider.style.transition = "none";
		slider.insertAdjacentElement('afterbegin', sliderSectionLast);
		slider.style.marginLeft = "-100%";
	},500);
}

btnRight.addEventListener('click', function(){
	Next();
});

btnLeft.addEventListener('click', function(){
	Prev();	
});
setInterval(function(){
	Next();
},10000);



(function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://susurroelocuente.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();