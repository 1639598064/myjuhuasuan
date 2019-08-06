function n(id) {
    return document.getElementById(id);
}

function dianji() {
    n("sou_fdj").style.display = "none";
}

//购买数量的增减
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
//鼠标划过小图片显示大图
$(function () {
    $('.centerBoxLeftBom ul li img').mouseover(function () {
        $('.centerBoxLeftBom ul li').css({
            'border': '2px solid  transparent'
        })
        $(this).parent().css({

            'border': ' 2px solid black'
        })
        // 1.拿到大图
        let str = $(this).attr("src");
        $(`.contentBoxLeft img`).eq(0).attr('src', str);
    })
})