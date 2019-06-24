var sTop = document.body.scrollTop || document.documentElement.scrollTop;
window.i = 0;
document.onmousewheel = function(e){
	var ev = e || event;
	if(ev.wheelDelta < 0){
		console.log("向下")
		i++;
		window.onscroll = function(){
			// var timeStart = 0;
			// var start = 655*(i-1);
			// var timeEnd = 300;
			// var end = 655*i;
			// var change = end - start;
			// var timer = setInterval(function(){
			// timeStart++;
			// if(timeStart >= timeEnd){
			// 	clearInterval(timer);
			// }
			// document.body.scrollTop = Tween.Linear(timeStart,start,change,timeEnd);
			// },2);

			document.body.scrollTop = 655*i;
			sTop = document.body.scrollTop;
		}
		console.log(i);
	}else{
		console.log("向上")
		// i--;
		if(sTop <= 656 && sTop >=0){
			i = 0;
		}else if(sTop >= 656 && sTop <= 656*2){
			i = 1;
		}else if(sTop >= 656*2 && sTop <= 656*3){
			i = 2;
		}else if(sTop >= 656*3 && sTop <= 656*4){
			i = 3;
		}else if(sTop >= 2260){
			i = 4;
		}
		window.onscroll = function(){
			document.body.scrollTop = 655*i;
			sTop = document.body.scrollTop;
			console.log(sTop);
		}
	}
}