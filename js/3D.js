var bigVideo = document.querySelector(".bigVideo");
var banner = document.querySelector(".banner");
var go = document.querySelector(".go");
var videoP = document.querySelector(".videoP");
//鼠标滑bigVideo显示信息
var bool = true;
banner.onmouseover = function(){
	go.style.display = "block";
	go.style.cursor = "pointer";
	
	videoP.style.bottom = "0px";
	videoP.style.transition = "1s";
}
banner.onmouseout = function(){
	go.style.display = "none";
	videoP.style.bottom = "";
}

var img = document.querySelectorAll(".dls dt");
var video = document.querySelectorAll(".video");
var stop = document.querySelectorAll(".stop");
console.log(img[0].innerHTML);
for(var i = 0; i < img.length; i++){
	img[i].code = i;
	img[i].onmouseover = function(){
		stop[this.code].src = "img/3D/stop_logo.png";
		stop[this.code].style.cursor = "pointer";
	}
	img[i].onmouseout = function(){
		stop[this.code].src = "img/3D/stop_logo1.png";
	}
	stop[i].code = i;
	stop[i].onclick = function(){
		bigVideo.src = video[this.code].src;
		document.body.scrollTop = 0;
		stop[this.code].src = "img/3D/stop_logo.png";
	}
}
