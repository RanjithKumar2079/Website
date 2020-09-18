var p1dis = document.querySelector("#p1s");
var p2dis = document.querySelector("#p2s");
var p1but = document.querySelectorAll("button")[0];
var p2but = document.querySelectorAll("button")[1];
var rst = document.querySelectorAll("button")[2];
var inp = document.querySelector("input");
var winscoredis = document.querySelector("p span");
var p1score = 0;
var p2score = 0;
var go = false;
var winscore =5;
p1but.addEventListener("click",function(){
	p1score++;
	if(!go){
		p1dis.textContent = p1score;
		if(p1score === winscore){
			alert("Player 1 Won The Game");
			go = true;
		}
	}
})

p2but.addEventListener("click",function(){
	p2score++;
	if(!go){
		p2dis.textContent = p2score;
		if(p2score === winscore){
			alert("Player 2 Won The Game");
			go = true;
		}
	}
})

rst.addEventListener("click",function(){
	p1score=0;
	p2score=0;
	p1dis.textContent = p1score;
	p2dis.textContent = p2score;
	go = false;
})

inp.addEventListener("change",function(){
	if(Number(inp.value)<=0){
		alert("Winning Score should be higher than 0");
		inp.value = 1;
		winscore = 1;
		winscoredis.textContent = winscore;
		p1score=0;
		p2score=0;
		p1dis.textContent = p1score;
		p2dis.textContent = p2score;
		go = false;
	}else{
		winscore = Number(inp.value);
		winscoredis.textContent = winscore;
		p1score=0;
		p2score=0;
		p1dis.textContent = p1score;
		p2dis.textContent = p2score;
		go = false;
	}
})