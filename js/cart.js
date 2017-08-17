window.onload = function(){
     var dels = document.querySelectorAll('.del');
     var winBox = document.querySelector('.winbox');
     var removebox = document.querySelector('.removebox');
     console.log(removebox)
     var cancel = document.querySelector('.cancel');

     // 获取所以得删除盒子
     // 点击该盒子
     // 1.盒子执行动画效果
     // 2.模态框显示
     for(var i=0;i<dels.length;i++){
         dels[i].onclick = function(){
             this.classList.add('open');//添加opne类名
             removebox.classList.add('animated');// 添加 垃圾桶盒子动画
             removebox.classList.add('bounceInDown');
             winBox.style.display = 'block';
         }
     }


// 点击取消按钮
// 1.模态框隐藏
// 2.删除open类名
cancel.onclick = function(){
         winBox.style.display = 'none';//点击盒子，把他隐藏。
         removebox.classList.remove('animated');// 删除 垃圾桶盒子动画

         removebox.classList.remove('bounceInDown');// 删除 垃圾桶盒子动画

         var open = document.querySelector('.open'); //找 桶盖打开的盒子

    // 然后删除类名
    open.classList.remove('open');
}




}