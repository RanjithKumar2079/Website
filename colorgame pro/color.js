var easy=document.querySelector(".btn1");
var rst=document.querySelector(".rst");
var normal=document.querySelector(".btn2");
var hard=document.querySelector(".btn3");
var sq=document.querySelectorAll(".square");
var discol=document.querySelector("#color");
var info=document.querySelector("#info");
var h1=document.querySelector("h1");
var color=[];
var picked;
var noofsq=9;

function init(){
	normal.classList.add("selected");
	easy.classList.remove("selected");
	hard.classList.remove("selected");
	noofsq=6;
	color=gencolor(noofsq);
	picked=pickcolor(color,noofsq);
	discol.textContent=picked;
	for(var i=0;i<9;i++){
		sq[i].style.display="block";
	}
	for(var i=0;i<noofsq;i++){
		sq[i].style.background=color[i];
	}
	for(i=noofsq;i<9;i++){
		sq[i].style.display="none";
	}
}


rst.addEventListener("click",function(){
	h1.style.background="steelblue";
	rst.textContent="New Colors";
	info.textContent="";
	color=gencolor(noofsq);
	picked=pickcolor(color,noofsq);
	discol.textContent=picked;
	for(var i=0;i<9;i++){
		sq[i].style.display="block";
	}
	for(var i=0;i<noofsq;i++){
		sq[i].style.background=color[i];
	}
	for(i=noofsq;i<9;i++){
		sq[i].style.display="none";
	}
})


easy.addEventListener("click",function(){
	h1.style.background="steelblue";
	rst.textContent="New colors";
	info.textContent="";
	hard.classList.remove("selected");
	normal.classList.remove("selected");
	this.classList.add("selected");
	noofsq=3;
	color=gencolor(noofsq);
	picked=pickcolor(color,noofsq);
	discol.textContent=picked;
	for(var i=0;i<9;i++){
		sq[i].style.display="block";
	}
	for(var i=0;i<noofsq;i++){
		sq[i].style.background=color[i];
	}
	for(i=noofsq;i<9;i++){
		sq[i].style.display="none";
	}
})


normal.addEventListener("click",function(){
	h1.style.background="steelblue";
	rst.textContent="New colors";
	info.textContent="";
	hard.classList.remove("selected");
	easy.classList.remove("selected");
	this.classList.add("selected");
	noofsq=6;
	color=gencolor(noofsq);
	picked=pickcolor(color,noofsq);
	discol.textContent=picked;
	for(var i=0;i<9;i++){
		sq[i].style.display="block";
	}
	for(var i=0;i<noofsq;i++){
		sq[i].style.background=color[i];
	}
	for(i=noofsq;i<9;i++){
		sq[i].style.display="none";
	}
})


hard.addEventListener("click",function(){
	h1.style.background="steelblue";
	rst.textContent="New colors";
	info.textContent="";
	this.classList.add("selected");
	easy.classList.remove("selected");
	normal.classList.remove("selected");
	noofsq=9;
	color=gencolor(noofsq);
	picked=pickcolor(color,noofsq);
	discol.textContent=picked;
	for(var i=0;i<9;i++){
		sq[i].style.display="block";
	}
	for(var i=0;i<noofsq;i++){
		sq[i].style.background=color[i];
	}
})

function gencolor(noofsq){
	color=[];
	for(var i=0;i<noofsq;i++){
		r=Math.floor(Math.random()*255);
		g=Math.floor(Math.random()*255);
		b=Math.floor(Math.random()*255);
		color.push("rgb"+"("+r+", "+g+", "+b+")");
	}
	return color;
}

function pickcolor(color,noofsq){
	e=Math.floor(Math.random()*noofsq);
	return color[e];
}


function check(){
	for(var i=0;i<9;i++){
		sq[i].addEventListener("click",function(){
			selcol=this.style.background;
			console.log(selcol,picked);
			if(selcol === picked){
				info.textContent="Correct!!!";
				for (var i = 0; i<9; i++) {
					sq[i].style.background=picked;
				}
				rst.textContent="Play Again?";
				h1.style.background=picked;
			}
			else{
				this.style.background="#232323";
				info.textContent="Try Again";
			}
		});
	}
}
init();
check();