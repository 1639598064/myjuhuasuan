//购物车的类
	class goShpping{
		constructor() {
		    
		}
		
		//购物车的商品
		getNum(){
			let bum = document.getElementsByClassName("numBer");
			let getbum = 0;
			for(let i=0; i<bum.length; i++){
				getbum += Number(bum[i].innerHTML);
			}
			let nUm = document.getElementById("Num1");
			nUm.innerHTML = getbum;
		}
		
		//商品花了多钱
		getsprice(){
			let space = document.getElementsByClassName("goNumber");
			let sTrse = 0;
			for(let i=0; i<space.length; i++){
				sTrse += Number(space[i].innerHTML);
			}
			let ssp = document.getElementById("spAce");
			ssp.innerHTML = sTrse;
		}
		
		//计算单个商品价格
		getGoods(num,price){
			return num*price;
		}
		
		//增加数量
		getPlus(btn){
			let goodsnum = btn.previousElementSibling;
			goodsnum.innerHTML = (Number(goodsnum.innerHTML))+1;
			let btns = btn.parentNode.parentNode.previousElementSibling.firstElementChild;
			//小计
			let sPace = this.getGoods(goodsnum.innerHTML,btns.innerHTML);
			let hh = btn.parentNode.parentNode.nextElementSibling.firstElementChild;
			hh.innerHTML = sPace;
			// this.getNum();
			// this.getsprice();    
		}
		
		//减少数量
		getSmall(btn){
			let getsmall = btn.nextElementSibling;
			if(getsmall.innerHTML > 0){
				getsmall.innerHTML = (Number(getsmall.innerHTML))-1;
				let btns = btn.parentNode.parentNode.previousElementSibling.firstElementChild;
				//小计
				let sPace = this.getGoods(getsmall.innerHTML,btns.innerHTML);
				let hh = btn.parentNode.parentNode.nextElementSibling.firstElementChild;
				hh.innerHTML = sPace;
				this.getNum();
				this.getsprice();
			}
		}
		
		//删除货物
		getsspace(btn){
			let tr = btn.parentNode.parentNode;
			tr.remove();
			this.getNum();
			this.getsprice();
		}
		
		//事件绑定
		eventBind(){
			let getBtn = document.getElementsByTagName("button");
			let that = this;
			let getSpce = document.getElementsByClassName("del");
			for(let i=0; i<getBtn.length; i++){
				if(i%2==0){
					getBtn[i].onclick = function(){
						that.getSmall(this);
					}
				}else{
						getBtn[i].onclick = function(){
							that.getPlus(this);
					}
				}
			}
			for(let i=0; i<getSpce.length; i++){
				getSpce[i].onclick = function(){
					that.getsspace(this);
				}
			}
		}
	}
		//添加货物
		let t = document.getElementById("t");
		let t1 = document.getElementById("t1");
		let btn1 = document.getElementsByClassName("btn1");
		let del = document.getElementsByClassName("del");
		for(let i=0; i<btn1.length; i++){
			btn1[i].onclick = function(){
				let row=t.insertRow(1);
				row.className = "tr1";
				row.innerHTML="<td>"+"</td>"+"<td>"+this.parentNode.previousElementSibling.previousElementSibling.innerHTML+
				"</td><td><button>-</button> <span class='numBer'>0</span> <button>+</button></td><td>单价:<span>"+
				this.parentNode.previousElementSibling.lastElementChild.innerHTML+
				"</span></td><td>小计:<span class='goNumber'>0</span></td><td>操作:<input type='button' class='del' value='删除'></td>";
				//this.parentNode.parentNode.remove();
				for(let i=0;i<del.length;i++){
					del[i].onclick=function(){
						this.parentNode.parentNode.remove();
					}
				}
				let tr1 = document.getElementsByClassName("tr1");
				for(let i=0; i<tr1.length; i++){
					tr1[i].firstElementChild.innerText = i+1; 
				}
				c.eventBind();
			}	
		}
		
		
	let c = new goShpping();
	c.eventBind();



