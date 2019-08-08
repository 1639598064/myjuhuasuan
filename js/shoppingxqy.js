function n(id) {
    return document.getElementById(id);
}

function dianji() {
    n("sou_fdj").style.display = "none";
}

//购买数量的增减
function addDelectNumber() {
    $(document).ready(function () {
        var num = ""; //数量初始值  
        var num_val = $("#numBer").val(); //给文本框附上初始值  
        /*添加数量的方法*/
        $("#add").click(function () {
            num = $("#numBer").val();
            num++;
            $("#numBer").val(num);

        });

        /*减少数量的方法*/
        $("#reduce").click(function () {
            //如果文本框的值大于1才执行减去方法  
            num = $("#numBer").val();
            if (num > 1) {
                //并且当文本框的值为1的时候，减去后文本框直接清空值，不显示0  
                num--;
                $("#numBer").val(num);
                //否则就执行减减方法  
            } else {
                $("#numBer").val("1");
            }
        });
    });
}

//鼠标划过小图片显示大图
// $(function () {
//     $('.centerBoxLeftBom ul li img').mouseover(function () {
//         $('.centerBoxLeftBom ul li').css({
//             'border': '2px solid  transparent'
//         })
//         $(this).parent().css({

//             'border': ' 2px solid black'
//         })
//         // 1.拿到大图
//         let str = $(this).attr("src");
//         $(`.contentBoxLeft img`).eq(0).attr('src', str);
//     })
// })


//放大镜效果
function Mirror() {
    $(function () {
        //鼠标移入产品小图事件
        $(".product-img img").mouseenter(function () { //鼠标悬浮在不同的产品小图片时外加黑色边框并且主图将其显示出来
            $(".product-img img").css({
                "border": "2px solid #FFF"
            });
            $(this).css({
                "border": "2px solid #000"
            }); //this获取的是当前鼠标移入的元素，设置黑色边框
            var imgsrc = $(this).attr("src"); //获取当前鼠标移入元素的src属性值将其赋值给主图元素
            $(".show").attr("src", imgsrc);
            $(".showlarge img").attr("src", imgsrc); //将鼠标选中的图传给放大图元素的src属性
        });
        //鼠标移入产品主图时出现放大的细节图和小框 
        $(".showimg").mouseenter(function () {
            $(".showbox").show();
            $(".showlarge").show();
        });
        //鼠标在产品主图移动事件
        $(".showimg").mousemove(function (e) {
            var mousex = e.clientX; //获取鼠标当前对于浏览器可视区的X坐标
            var mousey = e.clientY;
            var imgx = $(".showimg").offset().left; //获得产品主图对于文档的偏移坐标
            var imgy = $(".showimg").offset().top;
            //小框的left值是鼠标位移减去产品图元素偏移坐标减去小框宽度的一半，使鼠标保持位于小框的中间
            var boxleft = mousex - imgx - $(".showbox").width() / 2; //计算小框对于产品主图元素的距离用来定位
            var boxtop = mousey - imgy - $(".showbox").height() / 2;
            //鼠标移动小框位置跟着变化
            $(".showbox").css({
                "top": boxtop,
                "left": boxleft
            });
            //计算小框移动的最大范围
            var maxtop = $(".showimg").height() - $(".showbox").height();
            var maxleft = $(".showimg").width() - $(".showbox").width();
            //判断小框移动的边界
            if (boxtop <= 0) {
                $(".showbox").css("top", "0");
            } else if (boxtop > maxtop) {
                $(".showbox").css("top", maxtop);
            }
            if (boxleft <= 0) {
                $(".showbox").css("left", "0");
            } else if (boxleft > maxleft) {
                $(".showbox").css("left", maxleft);
            }
            //设置放大图的位置偏移量，获取小框偏移量乘放大倍数，注意！！！放大图偏移量应设置为负值
            var showleft = -$(".showbox").position().left * 2; //position()方法返回当前元素相对于父元素的位置（偏移）
            var showtop = -$(".showbox").position().top * 2;
            //此处获取小框偏移量不应该使用前面计算出来的boxtop和boxleft值，因可能会出现超出移动的边界
            $(".showlarge img").css({
                "left": showleft,
                "top": showtop
            });
        });
        //鼠标离开产品主图元素事件，此处使用mouseleave事件只有在鼠标指针离开被选元素时才会触发，mouseout鼠标指针离开被选元素和其任何子元素都会触发。
        $(".showimg").mouseleave(function () {
            $(".showbox").hide(); //小框隐藏
            $(".showlarge").hide(); //放大图隐藏
        });

    });
}



//动态产生数据
function dtData() {

}

function getId(str) {
    var arr = str.split("=");
    return arr[1];
}

let id1 = getId(location.href);
// console.log(id1);
$.get("getGoodsInfo.php", {
    goodsId: id1
}, function (data) {
    // console.log(data);
    data = JSON.parse(data)
    console.log(data);
    let str = `<div class="content">
    <div class="contentBox">

        <!-- 上边的大图 -->
        <div class="showimg contentBoxLeft">
           
            <img class="show" src="${data.goodsImg}">
            <div class="showbox"></div>
            <div class="showlarge">
                <img src="${data.goodsImg}">
            </div>
        </div>
        <!-- 下边的小图 -->
        <div class="product-img centerBoxLeftBom">
            <img src="${data.goodsImg}">
            <img src="img/y1.png">
            <img src="img/y2.png">
            <img src="img/y3.png">
            <img src="img/y4.png">
        </div>
        <div class="contentBoxRight">
            <a href="#"> ${data.goodsName}</a>
            <span>加10元赠18W快充</span>

            <div class="right_one">
                <img src="img/al.png" alt="" title="此商品8月8日开卖，请提前加购！">
                <span>此商品8月8日开卖，请提前加购！</span>
            </div>
            <!-- 购买详情价格 -->
            <dl class="right_two">
                <dd>
                    <b>价格</b>
                    <i class="pice_i">￥</i>
                        <span id="moneySJ">${data.beiyong4}</span>
                </dd>
                <dd>
                    <b>88狂欢价</b>
                    <i>￥</i>
                        <span id="money88">${data.goodsPrice}</span>
                </dd>
            </dl>
            <p>运费&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;北京至 北京v东城区v 快递: 0.00</p>
            <ul>
                <li>月销量<span>1.0万+</span></li>
                <li class="leiji">累计评价<span>2544</span></li>
                <li>送天猫积分<b>299</b>起</li>
            </ul>
            <!-- 商品类型选择 -->
            <div class="right_three">
                <ol>
                    <li>网络类型
                        <div class="typeBox">
                            <a href="#">4G+全网通</a>
                        </div>
                    </li>
                    <li>机身颜色
                        <div class="typeBox">
                            <a href="#">白色恋人</a>
                        </div>
                    </li>
                    <li>套餐类型
                        <div class="typeBox">
                            <a href="#">官方标配</a>
                        </div>
                    </li>
                    <li>储存容量
                        <div class="typeBox">
                            <a href="#">6+64G</a>
                        </div>
                    </li>
                    <li>数量
                        <input type="text" class="numBox" id="numBer" value="1" disabled>
                        <div class="addNum">
                            <button id="add">∧</button>
                            <button id="reduce">∨</button>
                        </div>
                        件<span class="kunC">库存20件</span>
                    </li>
                </ol>
            </div>
            <div class="right_four">
                <a href="#" id="fuBuy">立即购买</a>
                <a href="shoppingCar.html" id="addCar">加入购物车</a>
            </div>
        </div>
    </div>
    <div class="canNumber">
        <div class="canNumberLeft">
            <img src="img/sp4.png" alt="">
            <img src="img/sp7.png" alt="">
            <img src="img/sp5.png" alt="">
            <img src="img/sp6.png" alt="">
        </div>
        <div class="canNumberRight">
            <img src="img/sp1.png" alt="">
            <img src="img/sp2.png" alt="" class="spTwo">
            <img src="img/sp3.png" alt="" class="spThree">
            <img src="img/sp8.png" alt="" class="spFour">
            <img src="img/sp9.png" alt="" class="spFive">
        </div>
    </div>
</div>`
    $(".center_box").append(str);
    Mirror();
    addDelectNumber();
    dtData();
})