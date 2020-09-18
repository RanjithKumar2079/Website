var a = document.querySelector("h1");
function b1(){
	a.classList.remove("blink2");
	a.classList.add("blink1");
}
function b2(){
	a.classList.remove("blink1");
	a.classList.add("blink2");
}
var body = document.querySelector("body");
var isblue=false;
setInterval(function(){
    if(isblue)
    {
    	b2();
    	body.style.background="red";
     // document.querySelector("h1").style.border="5px solid red";
 	}
    else
    {
    	b1();
        body.style.background="blue";
        // document.querySelector("h1").style.border="5px solid blue";
    }
    isblue = !isblue;},500)


