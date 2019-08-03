//右边导航的函数
function goHome(){
	if(document.body.scrollTop>20||document.documentElement.scrollTop>20){
		$("#nav_right_one").style.display="block";
		
	}else{
		$("#nav_right_one").style.display="none";
		
	}	
}
function huiD(){	//回到顶部
	document.body.scrollTop=0;
	document.documentElement.scrollTop=0;
}

function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}	
