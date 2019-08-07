//正则验证
function check(str, type) {
	switch (type) {
		case "username":
			var r = /^[a-zA-Z_]\w{5,14}$/;
			break;
			//数字，字母，下划线，6,16
		case "userpass":
			var r = /^\w{6,16}$/;
			break;
		case "email":
			var r = /^[1-9a-zA-Z_]\w{5,17}@\w{2,10}\.(com|cn|net|com.cn)$/;
			break;
		case "post":
			var r = /^[1-9]\d{5}$/;
			break;
		case "card":
			var r = /^[1-9]\d{5}[12]\d{3}(0[1-9]|1[0-2])\d{5}[0-9X]$/;
			break;
		case "userphone":
			var r = /^1[3-9]\d{9}$/;
			break;
	}
	return r.test(str);
}


//注册验证
var arr = ["username", "userpass", "userphone"];

$(`#usernameId`).onblur = function () {
	this.nextElementSibling.innerHTML = "";
	if (check(this.value, "username")) {
		afterCheckUser((has) => {
			if (has) {
				this.nextElementSibling.innerHTML = "用户名已经存在";
			} else {
				this.nextElementSibling.innerHTML = "√";
			}
		}); //后端验证
	} else {
		this.nextElementSibling.innerHTML = "格式不正确";
	}
}


$(`#userpassId`).onblur = function () {
	if (check(this.value, "userpass")) {
		this.nextElementSibling.innerHTML = "√";
	} else {
		this.nextElementSibling.innerHTML = "×";
	}
}

$(`#userphoneId`).onblur = function () {
	if (check(this.value, "userphone")) {
		this.nextElementSibling.innerHTML = "√";
	} else {
		this.nextElementSibling.innerHTML = "×";
	}
}

$("#checkpass").onblur = function () {
	if (checkpass()) {
		this.nextElementSibling.innerHTML = "√";
	} else {
		this.nextElementSibling.innerHTML = "×";
	}
}

//注册按钮绑定事件
$("#btnReg").onclick = function () {
	//1、先看前端验证是否全部通过
	if (!frontCheck() || !checkpass()) {
		alert("亲，请正确输入!");
		return;
	}
	//2、用户名是否存在
	if (isExistsUser) {
		alert("亲，用户名存在，请重新思考");
		return;
	}
	//2、后端注册
	regSave();
}


//前端验证
function frontCheck() {
	for (let i in arr) {
		if (!check($(`#${arr[i]}Id`).value, arr[i])) {
			return false;
		}
	}
	return true;
}

//重复密码的验证
function checkpass() {
	return $("#userpassId").value == $("#checkpass").value;
}

//用户名是否存在
var isExistsUser = false;
//后端验证用户名是否存在
function afterCheckUser(func) {
	//1、创建对象
	let xhr = new XMLHttpRequest();
	//2、设置请求参数
	let sendstr = "username=" + $("#usernameId").value;
	xhr.open("get", "checkuser.php?" + sendstr, true);

	//3、设置回调函数
	xhr.onreadystatechange = () => {
		if (xhr.readyState == 4 && xhr.status == 200) {
			isExistsUser = xhr.responseText == 1 ? true : false;
			func(isExistsUser);
		}
	}
	//4、发送请求
	xhr.send();

}

//后端注册
function regSave() {
	//1、创建对象
	let xhr = new XMLHttpRequest();

	//2、设置请求参数
	xhr.open("post", "regSave03.php", true);

	//3、设置回调函数 
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4 && xhr.status == 200) {
			if (xhr.responseText == 1) {
				$("#msg").innerHTML = "亲，恭喜您，注册成功！跳转到登录页面";
				location.href = "indexs.html";
			} else {
				$("#msg").innerHTML = "亲，不好意思，注册失败！请重新输入内容";
			}
		}
	}

	//4、发送请求
	//post请求，与get请求有两个地方不同：
	//1)、设置请求头
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	//2)、把发送的数据作为send函数的参数

	let sendstr = `username=${$("#usernameId").value}&userpass=${$("#userpassId").value}&userphone=${$("#userphoneId").value}`;
	xhr.send(sendstr);
}




function $(str) {
	if (str.charAt(0) == "#") {
		return document.getElementById(str.substring(1));
	} else if (str.charAt(0) == ".") {
		return document.getElementsByClassName(str.substring(1));
	} else {
		return document.getElementsByTagName(str);
	}
}