 window.onload = function(){
     console.log(1)
     // 左侧滑动
     swipLeft();
     // 右侧滑动
     swipRight();
 }


 /*
 *左侧滑动：
 * 需求：
 * 1.点击 导航
 *   被点击的li标签，样式改变
 *   被点击的li标签，滑动到页面的顶部
 * 2.触屏操作导航
 *   2-1触屏开始
 *      记录起始位置
 *   2-2触屏移动
 *     记录移动位置
 *     让ul跟随鼠标移动
 *   2-3触屏结束
 *      判断ul的移动施法越界，如果越界，就吸附回去
 *
  */

 function swipLeft(){
        var leftBox = document.querySelector('.body-left');
        var ul = leftBox.querySelector('ul');
        var lis = ul.querySelectorAll('li');//获取全部的li标签

     var currentY1=0;//记录ul当前的位移
//-------------------0-临界值-------------------
     //定位临界值
     var maxTop = 0;
     var minTop = leftBox.offsetHeight - ul.offsetHeight;//大盒子的高度减去ul的高度，

    //滑动临界值
    var maxSwipe = maxTop+120;
    var minSwipe = minTop-120;


//----------------0-封装复用代码-----------------


     // 添加过渡
     var addTransition = function(){
         // 添加过渡
         ul.style.webkitTransition = 'transform 0.2s';
         ul.style.transition = 'transform 0.2s';
     }

     // 移除过渡
        var removeTransition = function(){
         // 移除过渡
            ul.style.webkitTransition='none';
            ul.style.transition='none';
        }


     // ul位移
    var   setTranslateY = function(translateY){//里面形参，传什么，我们下面就要填写什么
         // ul位移
         ul.style.webkitTransform = 'translateY('+translateY+'px)';
         ul.style.transform = 'translateY('+translateY+'px)';
     }




//-------1点击导航----------
     itcast.tap(leftBox,function(e){
         //1-1被点击的li标签 样式改变
         console.log(e.target.parentNode); //触发事件最小的元素
         var target = e.target.parentNode;//获取被点击的a标签的父盒子li标签,赋值给这个变量
         // 现在用排他
         for(var i=0;i<lis.length;i++){
             lis[i].classList.remove('current');
             lis[i].index = i;//自定义索引值;下面要用的
         }
         //显示自己
         target.classList.add('current');
         //1-2被点击的li标签 滑动到页面的顶部 ul位移
         //位移的距离=-50*index;
         var y = -50*target.index;
         //临界值--判断
         if(y>maxTop){
             y=maxTop;//如果位移的距离，大于maxTop这个界限，就会直接等于maxTop，我们再上面定了这个值为0；
         }
         if(y<minTop){
             y=minTop;
         }

         // // 添加过渡
         // ul.style.transition = 'transform 0.2s';
         // // ul位移
         // ul.style.transform = 'translateY('+y+'px)';
         //添加过渡
         addTransition();
         //添加过渡
         setTranslateY(y);

         currentY1 = y;//记录当前ul的位移----currentY1上面已经定义了这个变量为0
     });

//---------2-触屏移动 切换导航--------------------

var startY = 0;
var moveY = 0;
var distanceY = 0;
     leftBox.addEventListener('touchstart',function(e){//注册大盒子触屏事件。
         startY = e.targetTouches[0].clientY;//记录起始位置
     });

     leftBox.addEventListener('touchmove',function(e){
         moveY = e.targetTouches[0].clientY;//记录位移位置
         distanceY = moveY - startY;//计算距离差
         // 让ul跟随鼠标移动，ul移动的距离 = 之前的位置+distanceY；
         var y = currentY1+distanceY;//当前这个currentY1,跟上面赋值给currentY1 = y；系一样的

         //数据监测   就是为了不要让顶部移除太多
         if(y>maxSwipe){
             y=maxSwipe;//向下滑，上面最大系120；
         }
         if(y<minSwipe){
             y=minSwipe;//向上滑，最大系-120；
         }

         removeTransition();//删除过渡
         setTranslateY(y);//ul位移
     });

     leftBox.addEventListener('touchend',function(){
         //滑动结束后也要记录当前ul位移,这样就可以随便滑动，不会再似之前，除了第一次滑动，其他滑动都会重复原来的位置
         currentY1 = currentY1+distanceY;//这里currentY1，就系上面的一模一样

         //判断是否超过定位的临界值    minTop  maxTop
         //如果越界，需要吸附回去
         //边界监测
         if(currentY1>maxTop){
             currentY1=maxTop;
             addTransition();//添加过渡;
             setTranslateY(currentY1);//ul位移
         }
         if(currentY1<minTop){
             currentY1=minTop;
             addTransition();//添加过渡;
             setTranslateY(currentY1);//ul位移
         }

         // addTransition();//添加过渡;
         // setTranslateY(currentY1);//ul位移

         // 数据重置
         startY = 0;
         moveY = 0;
         distanceY = 0;
     })

















 }


 /*
  *右侧滑动：
  * 需求：
  * 1.触屏操作导航
  *   1-1触屏开始
  *      记录起始位置
  *   1-2触屏移动
  *     记录移动位置
  *     让ul跟随鼠标移动
  *   1-3触屏结束
  *      判断ul的移动施法越界，如果越界，就吸附回去
  *
  */
 function swipRight(){
     var rightBox = document.querySelector('.body-right');
     var ul = rightBox.querySelector('.right-in');

     var currentY1=0;//记录ul当前的位移
//-------------------0-临界值-------------------
     //定位临界值
     var maxTop = 0;
     var minTop = rightBox.offsetHeight - ul.offsetHeight;//大盒子的高度减去ul的高度，

     //滑动临界值
     var maxSwipe = maxTop+120;
     var minSwipe = minTop-120;


//----------------0-封装复用代码-----------------


     // 添加过渡
     var addTransition = function(){
         // 添加过渡
         ul.style.webkitTransition = 'transform 0.2s';
         ul.style.transition = 'transform 0.2s';
     }

     // 移除过渡
     var removeTransition = function(){
         // 移除过渡
         ul.style.webkitTransition='none';
         ul.style.transition='none';
     }


     // ul位移
     var   setTranslateY = function(translateY){//里面形参，传什么，我们下面就要填写什么
         // ul位移
         ul.style.webkitTransform = 'translateY('+translateY+'px)';
         ul.style.transform = 'translateY('+translateY+'px)';
     }


//---------2-触屏移动 切换导航--------------------

     var startY = 0;
     var moveY = 0;
     var distanceY = 0;
     rightBox.addEventListener('touchstart',function(e){//注册大盒子触屏事件。
         startY = e.targetTouches[0].clientY;//记录起始位置
     });

     rightBox.addEventListener('touchmove',function(e){
         moveY = e.targetTouches[0].clientY;//记录位移位置
         distanceY = moveY - startY;//计算距离差
         // 让ul跟随鼠标移动，ul移动的距离 = 之前的位置+distanceY；
         var y = currentY1+distanceY;//当前这个currentY1,跟上面赋值给currentY1 = y；系一样的

         //数据监测   就是为了不要让顶部移除太多
         if(y>maxSwipe){
             y=maxSwipe;//向下滑，上面最大系120；
         }
         if(y<minSwipe){
             y=minSwipe;//向上滑，最大系-120；
         }

         removeTransition();//删除过渡
         setTranslateY(y);//ul位移
     });

     rightBox.addEventListener('touchend',function(){
         //滑动结束后也要记录当前ul位移,这样就可以随便滑动，不会再似之前，除了第一次滑动，其他滑动都会重复原来的位置
         currentY1 = currentY1+distanceY;//这里currentY1，就系上面的一模一样

         //判断是否超过定位的临界值    minTop  maxTop
         //如果越界，需要吸附回去
         //边界监测
         if(currentY1>maxTop){
             currentY1=maxTop;
             addTransition();//添加过渡;
             setTranslateY(currentY1);//ul位移
         }
         if(currentY1<minTop){
             currentY1=minTop;
             addTransition();//添加过渡;
             setTranslateY(currentY1);//ul位移
         }

         // addTransition();//添加过渡;
         // setTranslateY(currentY1);//ul位移

         // 数据重置
         startY = 0;
         moveY = 0;
         distanceY = 0;
     })

















 }