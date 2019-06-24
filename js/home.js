//Redering
var main1 = document.querySelector(".main1");
var pic1 = document.querySelector(".pic1");
var pic12 = document.querySelector(".pic12");
var comh1 = document.querySelector(".comh1");
var comp1 = document.querySelector(".comp1");
var reOut = ["img/home/pic_1.png","img/home/pic_2212.png","img/home/pic_2223.png"];
var reOver = ["img/home/pic_2.png","img/home/pic_234.png","img/home/pic_2233.png"];
var bol = true;
var m = 0;
var timer2 = setInterval(function(){
	m++;
	if(m >= 3){
		m = 0;
	}
	if(bol == true){
		pic1.src = reOut[m];
	}else{
		pic1.src = reOver[m];
	}
	
},1000);
var timer1 = null;
main1.onmouseover = function(){
	
	bol = false;
	pic12.src = "img/home/y_t.png";
	comh1.style.color = "#3c3c3c";
	comp1.style.color = "#3c3c3c";

}
var timer2 = null;
main1.onmouseout = function(){
	bol = true;
	pic12.src = "img/home/gray_t.png";
	comh1.style.color = "#b4b4b4";
	comp1.style.color = "#b4b4b4";

}
main1.onclick = function(){
	location.href = "Renderings.html";
}

//BIM
var main2 = document.querySelector(".main2");
var pic2 = document.querySelector(".pic2");
var pic22 = document.querySelector(".pic22");
var comh2 = document.querySelector(".comh2");
var comp2 = document.querySelector(".comp2");
main2.onmouseover = function(){
	pic2.src = "img/home/pic_bimcolor.png";
	pic22.src = "img/home/y_t.png";
	comh2.style.color = "#3c3c3c";
	comp2.style.color = "#3c3c3c";

}
main2.onmouseout = function(){
	pic2.src = "img/home/pic_bim.png";
	pic22.src = "img/home/gray_t.png";
	comh2.style.color = "#b4b4b4";
	comp2.style.color = "#b4b4b4";
}
main2.onclick = function(){
	location.href = "BIM.html";
}

//3D
var main3 = document.querySelector(".main3");
var pic3 = document.querySelector(".pic3");
var pic32 = document.querySelector(".pic32");
var comh3 = document.querySelector(".comh3");
var comp3 = document.querySelector(".comp3");
main3.onmouseover = function(){
	pic3.src = "img/home/pic_3Dgreen.png";
	pic32.src = "img/home/y_t.png";
	comh3.style.color = "#3c3c3c";
	comp3.style.color = "#3c3c3c";

}
main3.onmouseout = function(){
	pic3.src = "img/home/pic_3Dgray.png";
	pic32.src = "img/home/gray_t.png";
	comh3.style.color = "#b4b4b4";
	comp3.style.color = "#b4b4b4";

}
main3.onclick = function(){
	location.href = "3D.html";
}

