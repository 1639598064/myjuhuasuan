//点击回到顶部

function n(id) {
    return document.getElementById(id);
}
window.onload = function () {
    n("goTop").onclick = function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}

//点击隐藏显示
$(function () {

    $(window).scroll(function () {
        // alert(1)
        if ($(window).scrollTop() >= 250) {
            $("#navRight").css({
                transform: "scale(1)"
            })
        } else {
            $("#navRight").css({
                transform: "scale(0)"
            })
        }
    });
    $("#goTop").click(function () {

        $("#navRight").css({
            transform: "scale(0)",

        })
    });
});

//倒计时

var starttime = new Date("2019/8/30");
setInterval(function () {
    var nowtime = new Date();
    var time = starttime - nowtime;
    var day = parseInt(time / 1000 / 60 / 60 / 24);
    var hour = parseInt(time / 1000 / 60 / 60 % 24);
    var minute = parseInt(time / 1000 / 60 % 60);
    var seconds = parseInt(time / 1000 % 60);
    $('.time').html(day + "天" + hour + "时" + minute + "分" + seconds + "秒");
}, 800);


//调取数据库，动态产生商品
function getGoodsLis() {
    $(function () {
        var bigDiv = $(".center");
        var sDiv = "";
        var sDiv2 = "";
        $.ajaxSettings.async = false; //修改异步同步的方法
        $.get("../goodsAndShoppingCart/getGoodsList.php", {}, function (data) {
            var goods = data;

            for (var i = 0; i < goods.length; i++) {

                sDiv =
                    `
                <div class="centerBox"><a href="#" class="box_content"><img src="${goods[i].goodsImg}" alt=""><div class="box_right"><h2>${goods[i].goodsName}</h2><ul><li>${goods[i].beiyong1}</li><li>${goods[i].beiyong2}</li><li>${goods[i].beiyong3}</li></ul><div class="box_time"><img src="img/time.png" alt="">仅剩：<b class="time"></b><strong>${goods[i].goodsCount}</strong><span>件已付款</span></div><div class="box_bottom"><i>￥</i><b>${goods[i].goodsPrice}</b><div class="bottom_money"><span>买贵赔</span><del>￥${goods[i].beiyong4}</del></div><span>退货赔运费</span></div><div class="bottom_right" index=${data[i].goodsId}>马上抢</div></div></a></div>`;

                sDiv2 += sDiv;
            }
            console.info(data)
        }, "json")
        bigDiv.append(sDiv2);
    })
}



//点击划过后有边框
$(document).ready(function () {
    let $box_content = $(".box_content").length;
    for (let i = 0; i < $box_content; i++) {

        $(".box_content").eq(i).mouseover(function () {
            $(".box_content").eq(i).css({
                "border": "2px solid red"
            });
        });

        $(".box_content").eq(i).mouseout(function () {
            $(".box_content").eq(i).css({
                "border": "2px solid transparent"
            });
        });

    }
});

//点击抢购跳转到详情页面

$("body").on("click", ".bottom_right", function () {
    window.open(`shoppingxqy.html?id=${$(this).attr("index")}`);
})