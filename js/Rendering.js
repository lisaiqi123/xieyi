//大图换背景
var bigPic = document.querySelector("#bigPic");
var arrPic = ["img/Renderings/Banner1.jpg","img/Renderings/Banner2.jpg","img/Renderings/Banner3.jpg"];
var lis = document.querySelectorAll(".banner ul li");
lis[0].style.backgroundColor = "yellow";
var m = 0;
var n = 1;
var kai = true;
//opacity渐隐渐现
setInterval(function(){
	var keep = 0.8/200;
	n = n - keep;
	if(n <= 0.2){
		n = 1;
    }
	// console.log(n)
	bigPic.style.opacity = n;
},2500/200);
//大图轮播
setInterval(function(){
	m++;
	if(m >= 3){
		m = 0;
	}
	bigPic.src = arrPic[m];
	for(var i = 0; i < lis.length; i++){
		lis[i].style.backgroundColor = "#fff";
	}
	lis[m].style.backgroundColor = "yellow";
},2500);


//随机函数
function rand(min,max){
	return parseInt(Math.random()*(max - min)+1)+min;
}
//瀑布流
var uls = document.querySelectorAll(".picDiv ul");
function pubuliu(){
	for(var i = 0; i < 30; i++){
		//创建li对象
		var li = document.createElement("li");
		li.innerHTML = "<div class='hui'><img class='search' src='' ImgSrc='img/Renderings/search.png'/></div><img class='liuImg' src='' ImgSrc='img/Renderings/"+(i+1)+".jpg'/>";
		var n = rand(250,300);
		li.style.height = n + "px";
		//获得每次的四个ul的高
		var arr = [];
		for(var j = 0; j < uls.length; j++){
			arr.push(uls[j].offsetHeight);
		}
		//比较四个ul的高  找出最短的  将li插进去
		var min = arr[0];
		var code = 0;
		for(var k = 0; k < arr.length; k++){
			if(min > arr[k]){
				min = arr[k];
				code = k;
			}
		}
			uls[code].appendChild(li);
	}
	return arr;
}

	var main = document.querySelector(".main");
	var banner = document.querySelector(".banner");
	var newArr = pubuliu();
	var max = newArr[0];
	console.log(newArr)
	for(var k = 0; k < newArr.length; k++){
		if(max < newArr[k]){
			max = newArr[k];
		}
	}
	main.style.height = (max + banner.offsetHeight) + "px";
	// console.log(max)
	// console.log(banner.offsetHeight)
//图片懒加载
var h = window.innerHeight;
// console.log("h"+h)
var img = document.querySelectorAll(".picDiv img");
// console.log(img.length)
window.onscroll = function(){
	var sTop = document.documentElement.scrollTop || document.body.scrollTop;
	// console.log("sTop"+sTop)
	for(var i = 0; i < img.length; i++){
		var imgTop = imgT(img[i]);
		if(imgTop <= h + sTop){
			img[i].src = img[i].getAttribute("ImgSrc");
		}
	}
}
//封装图片距浏览器顶部的高度
function imgT(bol){
	var imgTop = 0;
	while(bol){
		imgTop = imgTop + bol.offsetTop;
		bol = bol.offsetParent;
	}
	return imgTop;
}
//放大图片
var hui = document.querySelectorAll(".hui");
var lisImg = document.querySelectorAll(".picDiv li");
var search = document.querySelectorAll(".hui img");
//大蒙板（size是浏览器可视高度）
var fangdaBox = document.querySelector(".fangda");
//图片放大底板（程序中设置的是白色）
var fangdaBox1 = document.querySelector(".fangdaImg");
//放大的图片
var fangdaImg = document.querySelector(".fangda img");
var h = window.innerHeight;
var w = window.innerWidth;
for(var i = 0; i < lisImg.length; i++){
	lisImg[i].code = i;
	lisImg[i].onmouseover = function(){ 
		hui[this.code].style.display = "block";
		hui[this.code].style.height = this.offsetHeight + "px";
		hui[this.code].style.lineHeight = this.offsetHeight + "px";
		search[this.code].style.cursor = "pointer";
	}
	lisImg[i].onmouseout = function(){
		hui[this.code].style.display = "none";
	}
	search[i].index = i;
	search[i].onclick = function(){
		fangdaBox.style.display = "block";
		fangdaBox.style.left = 0 + "px";
		fangdaBox.style.top = 0 + "px";
		fangdaBox.style.width = w + "px";
		fangdaBox.style.height = h + "px";
		fangdaImg.src = lisImg[this.index].children[1].src;
		fangdaBox1.style.top = (h-fangdaBox1.offsetHeight)/2 + "px";
		fangdaBox1.style.left = (w-fangdaBox1.offsetWidth)/2 + "px";
	}
	fangdaBox.onclick =function(){
		this.style.display = "none";
	}
}
