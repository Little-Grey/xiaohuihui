window.onload = function(){
    // console.log(2)//检测JS文件是否引入

    //头部滚动变色
    setHeader();//调用函数。不调用，是不会执行的

    //倒计时
    downTime();

    //轮播图
    banner();

}



//头部滚动变色
/*如果滚动高度 小于banner的高度
 *   头部盒子的透明度= 页面滚动出去的高度/banner高度*
 * 如果滚动高度 大于banner的高度  透明度固定不变了
 *background: rgba(201, 21, 35, 0.8);
 *  */
function setHeader(){
    var header=document.querySelector('.header-in');//获取头部的盒子
    var banner=document.querySelector('.jd-banner');//获取轮播图的盒子
    var H=banner.offsetHeight; //获取banner的高度
    // console.log(H)   //--
    //绑定页面滚动事件
    window.onscroll=function(){
        opacity = 0;
        var top = document.body.scrollTop;//获取页面卷去的高度--这个系兼容谷歌获取页面卷去的高度


            opacity = top/H;    //透明度= 页面滚动出去的高度/banner高度

        // top除以H的值，可能会等于1 ，那么我们判断
        if(opacity>0.85){
            opacity = 0.85;
        }
        console.log(opacity);

        //设置header的透明度
        header.style.background = 'rgba(201,21,35,'+opacity+')';
    }






}


// 让秒杀，时间倒计时起来...页面一刷新，就会倒计时
function downTime(){
    // var time=5*60*60;  //5乘以60秒，等于5分钟，5分钟再乘以60.就是5小时
    var time = 1*60;
    var timer = setInterval(function(){
        time--;
        //把变化后的事件转成时分秒
        var h = Math.floor(time/3600);//一小时等于3600秒,看下剩下多少个小时
        var m = Math.floor(time%3600/60);//如果不足一小时的，再除以60，看剩下多少分钟
        var s = Math.floor(time%60);//如果连60都不足的，就是剩下的秒
        // 获取所以得span标签
        var spans = document.querySelectorAll('.time span');//.time span  就系这个.time类名下的span

        spans[0].innerHTML = Math.floor(h/10);//十位
        spans[1].innerHTML = Math.floor(h%10);//个位

        spans[3].innerHTML = Math.floor(m/10);
        spans[4].innerHTML = Math.floor(m%10);

        spans[6].innerHTML = Math.floor(s/10);
        spans[7].innerHTML = Math.floor(s%10);
        //容错性变成
        if(time<=0){//不判断的话，这个计时器会一直到时下去，如果时间等于0；就清除定时器
            clearInterval(timer); //清除定时器
        }
    },1000)
}



/*
 * 需求：
 * 1、定时器切换轮播图
 * 2、实现无缝滚动
 * 3、角标的同步
 * 4、触屏滑动切换轮图
 * */
function banner(){
    var banner = document.querySelector('.jd-banner');
    var ul = banner.querySelector('ul');//获取UL，因为轮播图，动的就是UL
    var W = banner.offsetWidth//获取jd-banner这个盒子的宽度
    var index= 1;  //轮播图的索引值  -- 这个索引值才是轮播图的核心所在
    // console.log(W)

    //-------------------封装复用代码--------------------
    //         也就是重复性的代码，封装成方法，直接调用

    //让ul移位的方法
    var setTranslateX = function(x){
        ul.style.transform = 'translateX('+x+'px)';//让ul移位
        ul.style.webkitTransform = 'translateX('+x+'px)';//兼容写法
    }

    //添加过渡方法
    var addTransition = function(){
        ul.style.transition = 'transform 0.3s'; //位移之前添加过渡
        ul.style.webkitTransition = 'transform 0.3s';//兼容写法
    }

    //删除过渡方法
    var removeTransition = function(){
        ul.style.transition = 'none'; //位移之前添加过渡
        ul.style.webkitTransition = 'none';//兼容写法
    }


//-----------------1、定时器切换轮播图-----------------------

    var timer = setInterval(function(){//开始定时器；
        index++;//每执行一次，索引就加一
        var x = -index*W;//ul移位的距离

        // ul.style.transition = 'transform 1s'; //位移之前添加过渡
        // ul.style.webkitTransition = 'transform 1s';//兼容写法
        // ul.style.transform = 'translateX('+x+'px)';//让ul移位
        // ul.style.webkitTransform = 'translateX('+x+'px)';//兼容写法
        addTransition();//调用封装复用代码--添加过渡

        setTranslateX(x);//调用封装复用代码--ul位移 //X这个参数是我们定义的变量，ul移位的距离，传入去


    },5000);//多少时间执行

//-----------------2、实现无缝滚动---------------------------

//我们需要在 每张图片动画完成后在做判断  在ul过渡结束后做判断
    //判断是否越界
    //  ul.addEventListener('transitionend',function(){//transitionend系过渡结束事件
    //      // console.log(index);
    //      //判断是否越界
    //      if(index>=9){
    //          index=1;//如果索引等于9，马上让当前索引变成1；
    //          //ul 快速跳转 不需要过渡
    //          var x = -index*W;
    //          removeTransition();   //删除过渡//这个时候的ul快速跳转，不需要过度，索引就要删除过度
    //
    //          setTranslateX(x);
    //      }
    //      if(index<=0){
    //          index=8;
    //          //ul 快速跳转 不需要过渡
    //          var x = -index*W;
    //          removeTransition();//删除过渡 //这个时候的ul快速跳转，不需要过度，索引就要删除过度
    //
    //          setTranslateX(x);
    //      }


    // 兼容写法--
         // 兼容写法--
     //     ul.addEventListener('webkitTransitionEnd',function(){//transitionend系过渡结束事件
     //         // console.log(index);
     //         //判断是否越界
     //         if(index>=9){
     //             index=1;//如果索引等于9，马上让当前索引变成1；
     //             //ul 快速跳转 不需要过渡
     //             var x = -index*W;
     //             removeTransition();   //删除过渡//这个时候的ul快速跳转，不需要过度，索引就要删除过度
     //
     //             setTranslateX(x);
     //         }
     //         if(index<=0){
     //             index=8;
     //             //ul 快速跳转 不需要过渡
     //             var x = -index*W;
     //             removeTransition(); //删除过渡//这个时候的ul快速跳转，不需要过度，索引就要删除过度
     //
     //             setTranslateX(x);
     //         }
     // });




    //调用过渡结束的兼容的方法
    // 这个是调用函数
    bindTransitionEnd(ul,function(){
        //判断是否越界
        if(index>=9){
            index=1;//如果索引等于9，马上让当前索引变成1；
            //ul 快速跳转 不需要过渡
            var x = -index*W;
            removeTransition();   //删除过渡//这个时候的ul快速跳转，不需要过度，索引就要删除过度

            setTranslateX(x);

        }
        if(index<=0){
            index=8;
            //ul 快速跳转 不需要过渡
            var x = -index*W;
            removeTransition(); //删除过渡//这个时候的ul快速跳转，不需要过度，索引就要删除过度

            setTranslateX(x);
        }

        setPoints(index);//这个调用排他方法，让小圆点跟住图片一起动
    });





    //由于 transitionend 的兼容性问题 ，导致代码冗余
    //封装一个方法解决代码冗余的问题
    //作用 给盒子绑定兼容的过渡结束的方法
    /*
     * obj:要绑定兼容过渡结束事件的 元素
     * callback: 当过渡结束事件触发后要执行的操作
     * */

    function bindTransitionEnd(obj,callback){//callback随便写的，只是形参，这样写比较有意义,,obj,这里传了ul这个实参进来。
        if(typeof obj=='object'){//如果obj是对象则绑定事件。如果ul是对象，那么就会执行下面的代码，注册事件过渡结束事件。
            obj.addEventListener('transitionend',function(){
                // if(callback){callback();}
                callback&&callback();
            })

            // 兼容写法
            obj.addEventListener('webkitTransitionEnd',function(){
                callback&&callback();
            })

        }

    }



// ----------------3、角标的同步--------------------


//index   呢下面这个，就是当前要高亮显示的小圆点
function setPoints(){
        var lis=banner.querySelectorAll('ol li');
        // 排他
    for(var i=0;i<lis.length;i++){
        lis[i].classList.remove('active');
    }
    //由于角标和图片个数不对应，需要index-1；，如果不-1.那么索引值第一个为1，然后当前小圆点的索引，第一个就是0；所以就对应不起来。所以就要减一。让索引对应起来。
    lis[index-1].classList.add('active');
}



// ----------------4、触屏滑动切换轮图---------------------

    /*
     * 4-1触屏开始
     * 清除定时器
     *   记录触屏起始位置
     * 4-2触屏移动
     *   记录触屏移动位置
     *   ul跟随手指移动
     * 4-3触屏结束    *
     *   如果触屏移动的距离> 屏幕宽度/3 切换图片
     *       向右滑动 上一张     index--
     *       向左滑动 下一张     index++
     *   否则吸附回去
     *
     * */
    //定义变量  记录数据

    var startX=0;
    var moveX=0;
    var distanceX=0;

    //记录起始位置
    banner.addEventListener('touchstart',function(e){
        clearInterval(timer);//清除定时器
        startX = e.targetTouches[0].clientX;//记录起始位置
    })

    //记录移动的位置
    banner.addEventListener('touchmove',function(e){
        moveX = e.targetTouches[0].clientX;//记录移动的位置
        distanceX = moveX - startX;//计算出距离差
        //ul位移距离 = （-index*W)+distanceX;
        var x = -index*W+distanceX;
        removeTransition();//调用ul的删除过渡效果
        setTranslateX(x);//调用ul位移方法，传入参数
    })

    //切换图片
    banner.addEventListener('touchend',function(){
        //如果触屏移动的距离> 屏幕宽度/3 切换图片
        //*       向右滑动 上一张     index--
        //*       向左滑动 下一张     index++
        //*   否则吸附回去
        if(Math.abs(distanceX)>W/3){//切换图片//用了绝对值，如果不用，就会系负数，不然怎么都是小于。
            if(distanceX>0){
                index--;//右滑，上一张
            }
            if(distanceX<0){
                index++;//左滑，下一张
            }
        }else{
            //吸附回去
        }

        //让ul位移
        var x = -index*W;
        addTransition();//调用添加过渡的方法；
        setTranslateX(x);//调用ul位移的方法，传进X参数

        // 数据重置
        startX=0;
        moveX=0;
        distanceX=0;


        //开启定时器
        timer = setInterval(function(){
            index++;
            var x = -index*W;
            addTransition();//调用添加过渡的方法；
            setTranslateX(x)//调用ul位移的方法，传进X参数
        },5000);

    })


}






















