function $(id) {
	return document.getElementById(id);
}
	window.onload=function () {

//用户名判断
	$("userId").onblur=function () {
		var r = /^[a-zA-Z]\w{5,15}$/ig;   //6-16位数字、字母组合，且以字母开头
		if(r.test($("userId").value)){
			$("content1").style.display="none";
		}else{
			$("content1").style.display="block";
			$("content1").value="！请输入正确用户名";
		}
	}
	
//密码输入判断
	$("passId").onblur=function () {
		// var r=/[a-zA-Z]\w{5,15}$/ig; 
		var r=/^[0-9]*$/ig;		//6-16位字母,数字组合，且不能纯数字
			if(r.test($("passId").value)){
				$("content1").style.display="block";
				$("content1").value="！请输入正确密码";
			}else{
				$("content1").style.display="none";
			}
	}

//密码确认
	$("qrPassId").onblur=function () {
		// var r=/^[0-9]*$/ig;	//再次输入密码
		if($("qrPassId").value==$("passId").value){
			$("content1").style.display="none";
		}else{
			$("content1").style.display="block";
			$("content1").value="！请输入相同的密码";
		}
	}
	
//手机号验证
	$("phoneId").onblur=function () {
		var r=/^\d{11}$/ig;//11位纯数字
		if(r.test($("phoneId").value)){
			$("content1").style.display="none";
		}else{
			$("content1").style.display="block";
			$("content1").value="！请输入正确的手机号";
		}
	}
//验证码验证

	var num=parseInt(Math.random()*9000+1000);
	$("box").innerHTML=num;
	$("box").onclick=function (){
		var num=parseInt(Math.random()*9000+1000);
		$("box").innerHTML=num;
	}
	$("yzmId").onblur=function () {
		if($("yzmId").value==$("box").innerHTML){
			$("content1").style.display="none";
		}else{
			$("content1").style.display="block";
			$("content1").value="！请输入正确的验证码";
		}
	}
//提交检验

	$("tiJiao").onclick=function (){
		if(($("userId").value!="") && ($("passId").value!="") && ($("qrPassId").value!="") && ($("nameId").value!="") && ($("sfzId").value!="") && ($("phoneId").value!="") && ($("yzmId").value!="")&& ($("content1").style.display=="none")&&($("fuXuan").checked==true)){

			alert("注册成功");
		}else{
			alert("请完善信息再提交");
		}
	}
}
	