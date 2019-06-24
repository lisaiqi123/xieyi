
//foot 
var arrOver = [{left:"0px",top:"-30px"},{left:"-44px",top:"-30px"},{left:"-75px",top:"-30px"},{left:"-106px",top:"-30px"},{left:"-135px",top:"-30px"}];
var arrOut = [{left:"0px",top:"0px"},{left:"-44px",top:"0px"},{left:"-75px",top:"0px"},{left:"-106px",top:"0px"},{left:"-135px",top:"0px"}];
var foot = document.querySelectorAll(".foot");
for(var i = 0; i < foot.length; i++){
	foot[i].code = i;
	foot[i].onmouseover = function(){
		this.style.backgroundPosition = arrOver[this.code].left+" "+arrOver[this.code].top;
		this.style.cursor = "pointer";
	}
	foot[i].onmouseout = function(){
		for(var j = 0; j < foot.length; j++){
			foot[j].style.backgroundPosition = arrOut[j].left+" "+arrOut[j].top;
		}
	}
}