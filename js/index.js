$(function () {

    setHeader(); //调用
    scrollTop('a[href^="#top"]');

    /**
     * 
     *（注：这个是导航或头部，下面要有一个大盒子，系根据下面的大盒子的高度，或图片，来决定这个透明度的多少）
     *封装了一个头部或导航滚动下去，慢慢变色
     *如果滚动高度小于banner的高度
     *头部盒子的透明度 = 页面滚动出去的高度、banner高度
     *如果滚动高度大雨banner的高度，透明度固定不变
     *
     */
    function setHeader() {
        var h = $('.ydlm-baaner').height();
        $(window).scroll(function () {
            var opacity = 0;
            var top = $(document.body).scrollTop()
            opacity = top / h;

            if (opacity > 0.85) {
                opacity = 0.85;
            }
            console.log(opacity);
            $('.ydlm-header').css('background', 'rgba(197, 239, 238,' + opacity + ')');
        })
    };


    /**
     * 轮波图swiper的JS
     */
    // var mySwiper = new Swiper('.swiper-container', {
    //     direction: 'horizontal', //这个是定义左右滑动的，默认，如果另一个，就系上下
    //     loop: true, //让Swiper看起来是循环的
    //     autoplay: 6000, //自动播放
    //     speed: 300, //自动滑动
    //     autoplayDisableOnInteraction: false, //如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
    //     effect: 'fade', //切换效果
    //     // 如果需要分页器
    //     pagination: '.swiper-pagination',
    //     paginationType: 'bullets', //默认小圆点
    //     paginationClickable: true, //点击电源点切换
    //     keyboardControl: true, //键盘控制
    //     lazyLoading: true,

    //     // 如果需要前进后退按钮
    //     // nextButton: '.swiper-button-next',
    //     // prevButton: '.swiper-button-prev',

    //     // 动画效果
    //     onInit: function (swiper) { //Swiper2.x的初始化是onFirstInit
    //         swiperAnimateCache(swiper); //隐藏动画元素 
    //         swiperAnimate(swiper); //初始化完成开始动画
    //     },
    //     onSlideChangeEnd: function (swiper) {
    //         swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    //     }


    // });


    // 第二个轮播图
  var swiper2 = new Swiper('#swiper2', {
        direction: 'horizontal', //这个是定义左右滑动的，默认，如果另一个，就系上下
        loop: true, //让Swiper看起来是循环的
        autoplay: 6000, //自动播放
        speed: 300, //自动滑动
        autoplayDisableOnInteraction: false, //如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
        effect: 'fade', //切换效果
        // 如果需要分页器
        pagination: '.swiper-pagination',
        paginationType: 'bullets', //默认小圆点
        paginationClickable: true, //点击电源点切换
        keyboardControl: true, //键盘控制
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',

    });


    // 第3个轮播图
  var swiper3 = new Swiper('#swiper3', {
        direction: 'horizontal', //这个是定义左右滑动的，默认，如果另一个，就系上下
        loop: true, //让Swiper看起来是循环的
        autoplay: 6000, //自动播放
        speed: 300, //自动滑动
        autoplayDisableOnInteraction: false, //如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
        effect: 'fade', //切换效果
        // 如果需要分页器
        pagination: '.swiper-pagination',
        paginationType: 'bullets', //默认小圆点
        paginationClickable: true, //点击电源点切换
        keyboardControl: true, //键盘控制
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',

    });


    // 第一个轮播图
  var swiper1 = new Swiper('#swiper1', {
        direction: 'horizontal', //这个是定义左右滑动的，默认，如果另一个，就系上下
        loop: true, //让Swiper看起来是循环的
        autoplay: 6000, //自动播放
        speed: 300, //自动滑动
        autoplayDisableOnInteraction: false, //如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
        effect: 'fade', //切换效果
        // 如果需要分页器
        pagination: '.swiper-pagination',
        paginationType: 'bullets', //默认小圆点
        paginationClickable: true, //点击电源点切换
        keyboardControl: true, //键盘控制
        lazyLoading: true,
        // 动画效果
        onInit: function (swiper) { //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素 
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function (swiper) {
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    });



/**
 * 轮播图左边图片，鼠标已过去，给遮罩层添加颜色
 */
 
$('#ydlm-section-div').mouseenter(function(){
    // $('#ydlm-section-div').removeClass('active');
    if($(this).hasClass('active')){
        $(this).removeClass('active');
    }else{
        $(this).addClass('active');
    }
});
$('#ydlm-section-div').mouseleave(function(){
    // $('#ydlm-section-div').removeClass('active');
    if($(this).hasClass('active')){
        $(this).removeClass('active');
    }else{
        $(this).addClass('active');
    }
});


// 轮播图下面的第二部分内容开始
/**
 * 轮播图左边图片，鼠标已过去，给遮罩层添加颜色
 */
$('.section-right > .section-right-bgc').mouseenter(function(){
    // $('#ydlm-section-div').removeClass('active');
    if($(this).hasClass('active')){
        $(this).removeClass('active');
    }else{
        $(this).addClass('active');
    }
});
$('.section-right > .section-right-bgc').mouseleave(function(){
    // $('#ydlm-section-div').removeClass('active');
    if($(this).hasClass('active')){
        $(this).removeClass('active');
    }else{
        $(this).addClass('active');
    }
});


/**
 * js配合锚点实现动画滚动与监听
 * 
 */
// $('.footer-bottom-right a[href^="#top"]').click(function(e){
//     e.preventDefault();
//     $('html, body').animate({scrollTop: $(this.hash).offset().top}, 1000);
// });


function scrollTop(id) {
    $(id).click(function(e){
        console.log(id);
        e.preventDefault();
        $('html, body').animate({scrollTop: $(this.hash).offset().top}, 1000);
    });
}




// 轮播图下面的第二部分内容结束





    // 入口函数的结尾
});











