$(function () {
    // 公司简介的切换
    $('.profile>.profile-left>ul>li').on("click", function () {
        $(this).addClass("active1").siblings("li").removeClass("active1");
        // 获取当前li标签的索引
        $('.profile-right div').eq($(this).index()).addClass("show").siblings().removeClass("show").siblings().addClass("hide");
        console.log($(this).index());
        
    });




















    
    });
