//（轮播图）
class BannerPlayer{
	//构造函数
	constructor(obj,boxDom,bannerDom){
		//1、属性（数据）
		this.bannerColor=["#B08EE9","#5C99F2","#F6002F"]//存储banner图的背景颜色

		this.boxDom = boxDom;
		this.imgDoms = [];//存储所有的图片标签
		this.liDoms = [];//存储所有的li标签（豆豆）
		this.bannerDom=bannerDom;
		let defaultObj = {    
			width:400,
			height:300,
			imgs:["img/01.jpg","img/02.jpg","img/03.jpg","img/04.jpg"],
			timeSpace:1000,
			douColor:"black",
			opacity:"0.5",
			douHighColor:"red",
			douSize:25,
			douPos:"下",
			douIsCircle:true,
			myTimer:null,
			ord:0
		}

		for(let key in defaultObj){
			if(obj[key]){
				this[key] = obj[key];
			}else{
				this[key] = defaultObj[key];
			}
		}
		//2、创建外观（把数据应用在外观上）
		this.render();
		this.addEvent();
		this.autoPlay();
	}

	//外观（html和css代码）
	render(){
		this.boxDom.style.position = "relative";
		//1、创建图片
		for(let i=0;i<this.imgs.length;i++){
			let imgDom = document.createElement("img");
			imgDom.src = this.imgs[i];
			imgDom.style.cssText = `
				position: absolute;
				left:0px;
				top:0px;
				width: 100%;
				height: 100%;	
				z-index: 1;`;
			if(i==0){
				imgDom.style.zIndex = 2;
			}
			this.boxDom.appendChild(imgDom);
			this.imgDoms.push(imgDom);
		
		}
		//2、创建豆豆
		//1)、豆豆的容器ul
		let doudouBox = document.createElement("ul");
		doudouBox.style.cssText = `
				position: absolute;
				left:650px;
				bottom:10px;
				list-style: none;
				z-index: 3;`;
		this.boxDom.appendChild(doudouBox);
		//2)、豆豆 li
		for(let i=0;i<this.imgs.length;i++){
			let liDom = document.createElement("li");
			liDom.setAttribute("index",i);
			liDom.style.cssText = `
				cursor:pointer;
				float:left;
				width:${this.douSize}px;
				height: ${this.douSize}px;
				margin-right: 8px;
				color:white;
				text-align:center;
				background-color: ${this.douColor};
			`;
			liDom.innerHTML=i+1;

			if(this.douIsCircle){
				liDom.style.borderRadius="50%";
			}
			if(i==0){
				liDom.style.backgroundColor=this.douHighColor;
			}
			doudouBox.appendChild(liDom);
			this.liDoms.push(liDom);//放在数组里，方便其它函数使用
		}
	}

	//添加事件
	addEvent(){
		this.imgDoms[0].onclick = function(){
			window.open("https://content.tmall.com/wow/pegasus/subject/544/1665051977/10462989?spm=608.2291429.102204.1.6fd14f84N67IoJ&wh_actSignId=92567365&wh_sellerId=1665051977&wh_shopId=106104395&wh_saleSite=1&id=10462989&box_id=R2C1&box_name=pcHomeBanner-R2C1&impid=7757bfe6-916c-4b63-9150-b0fb77dc0576&scm=1049.lyg_turing_-1_30.103992.103992&turing_bucket=6&lygClk=1&spm-url=other.other.Banner-PC_HOME_ALL_CONFIG.dR2C1");
		}
		this.imgDoms[1].onclick = function(){
			window.open("https://jusp.tmall.com/act/o/zwxh?spm=608.2291429.102204.2.6fd14f84N67IoJ&box_id=R2C2&box_name=pcHomeBanner-R2C2&impid=a77ff46b-ca2e-48c0-b4a7-1bc384c8bc84&scm=1049.lyg_turing_-1_30.103053.103053&turing_bucket=6&lygClk=1&spm-url=other.other.Banner-PC_HOME_ALL_CONFIG.dR2C2");
		}
		this.imgDoms[2].onclick = function(){
			window.open("https://ju.taobao.com/jusp/o/xhfplr/tp.htm?spm=608.2291429.102204.4.6fd14f84N67IoJ&box_id=R2C4&box_name=pcHomeBanner-R2C4&impid=99e7eb61-ce13-4fe4-81a8-3698a9f9dac6&scm=1049.lyg_turing_-1_30.103052.103052&turing_bucket=6&lygClk=1&spm-url=other.other.Banner-PC_HOME_ALL_CONFIG.dR2C4");
		}
		

		//2、鼠标放在轮播图上会停止
		this.boxDom.onmouseover = ()=>{
			this.stopPlay();	
		}

		//3、鼠标离开轮播图会继续播放
		this.boxDom.onmouseout = ()=>{
			this.autoPlay();	
		}
		let obj = this;
		//4、划过豆豆，跳转到对应的图片
		for(var i=0;i<this.liDoms.length;i++){
			this.liDoms[i].onmouseover = function(){
				obj.goImg(parseInt(this.getAttribute("index")));
			};
		}
	}

	//自动播放
	autoPlay(){
		if(this.myTimer!=null){//如果有定时器，就不再启动新的定时器了
			return;//
		}

		this.myTimer = setInterval(()=>{
			//一、改变数据
			//1、计算数据（改变图片的下标）
			var preOrd = this.ord;//上一张的序号 4
			this.ord++;//5

			//2、边界
			if(this.ord>this.imgs.length-1){
				this.ord = 0;
			}

			//二、改变外观
			this.reRender(preOrd,this.ord);
		},this.timeSpace)

	}
	
	//停止播放
	stopPlay(){
		window.clearInterval(this.myTimer);//根据定时器编号，找到定时器对象，进行清除
		this.myTimer = null;//把定时器编号清除掉
	}

	//跳转到对应的图片上
	//参数：图片的下标
	// goImg(3);
	goImg(transOrd){
		//一、改变数据
		//1、计算数据（改变图片的下标）
		var preOrd = this.ord;//上一张的序号 
		this.ord = transOrd;//5

		//2、边界
		if(this.ord>this.imgs.length-1){
			this.ord = 0;
		}else if(this.ord<0){
			this.ord = this.imgs.length-1;
		}

		//二、改变外观
		this.reRender(preOrd,this.ord);
	}

	//改变外观的函数(重新渲染)
	reRender(preOrd,ord){
		//1)、改图片
		this.imgDoms[preOrd].style.zIndex = 1;
		this.imgDoms[ord].style.zIndex = 2;
		//2)、改豆豆的颜色
		this.bannerDom.style.backgroundColor=this.bannerColor[ord];
		this.liDoms[preOrd].style.backgroundColor=this.douColor;
		

		this.liDoms[preOrd].style.opacity=0.5;
		this.liDoms[ord].style.backgroundColor= this.douHighColor;
		this.liDoms[ord].style.opacity=1;

		
	}

	preImg(){
		this.goImg(this.ord-1);
	}

	nextImg(){
		this.goImg(this.ord+1);
	}


}
