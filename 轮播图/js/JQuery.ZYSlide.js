
// 首先可以将整体封装一个匿名函数
(function($){
    // 本函数每次调用只负责一个轮播图的功能
    // 也就是说只会产生一个轮播图，这个函数的作用域只能分配给一个轮播图
    // 所有要就在调用本函数的时候请务必将当前轮播图和标签传递过来

    var slide = function(ele,options){
        // 转为JQ标签对象
        var $ele=$(ele);
        //默认的设置选项
        var setting={
            // 控制刚刚炸开的时间
            delay:1000,
            // 控制time的时间(轮播速度)
            speed:2000
        }
        // 对象合并
        // para1:Boolean类型，是否深度合并对象，默认值为false(不支持该参数为false)，若为true，且多个对象性的某个同名属性也是对象,则该"属性对象"的属性也将进行合并
        // para2，para3........都是要合并的对象
        $.extend(true,setting,options);
        // 固定每张图片出于的位子和状态
        var states = [{ZIndex: 1,width: 120,height: 150,top: 69,left: 134,opac: 0.2},
            {ZIndex: 2,width: 130,height: 170,top: 59,left: 0,opac: 0.5},
            {ZIndex: 3,width: 170,height: 218,top: 24,left: 110,opac: 0.7},
            {ZIndex: 4,width: 218,height: 288, top: 0,left: 263,opac: 1},
            {ZIndex: 3,width: 170,height: 218,top: 24,left: 470, opac: 0.7},
            {ZIndex: 2,width: 130, height: 170,top: 59, left: 620,opac: 0.5},
            {ZIndex: 1, width: 120, height: 150,  top: 69,left: 500, opac: 0.2},
        ];
        var lis = $(ele).find('li');

        function move(){
            lis.each(function(index,item){
                var state=states[index];
                $(item).css('z-index',state.ZIndex).finish().animate(state,setting.delay).find('img').css('opacity',state.opac);
            })
        }
        move();

        // 下一张
        function next(){
            states.unshift(states.pop());
            move();
        }
        // 上一张
        function prev(){
            states.push(states.shift());
            move();
        }
        $ele.find('.slide-prev').click(function(){
            prev();
        })
        $ele.find('.slide-next').click(function(){
            next();
        })
        // 自动轮播
        var time =null;
        function autoplay(){
            time=setInterval(function(){
                next()
            },setting.speed)
        }
        autoplay()
        // 停止轮播
        $ele.find('section').add(lis).hover(function(){
            clearInterval(time)
        },function(){
            autoplay()
        })
    }

    $.fn.ZYSlide = function(options){
      $(this).each(function(i,ele){
        slide(ele,options);
      })
    //   支持链式调用
      return this;
    }

})(jQuery)





// // 将状态和位置赋给li
// var lis = $('#box li');

// function move() {
//     lis.each(function (index, ele) {
//         var state = states[index]
//         $(ele).css('z-index', state.ZIndex).finish().animate(state, 1000).find('img').css('opacity', state.opac)
// })
// }
// move()
// // 讲评的
// // 下一张
// function next(){
//      states.unshift(states.pop());
//     move()
// }
// $('#box .next').click(function () {
//     // 原理:把数组中的最后一个元素移动数组中的第一张
//     next();
// })
// $('#box .prev').click(function () {
//     // 原理:把数组中的最后一个元素移动数组中的第一张
//     states.push(states.shift());
//     move()
// })
// // 自动轮播
// var time = null;
// function autoplay(){
//     time=setInterval(function(){
//         next();
//     },1000)
// }
// autoplay()

// // 停止轮播
// $('#box section').add('#box li').hover(function(){
//     clearInterval(time)
// },function(){
//     autoplay()
// })





// 用jQuery封装插件的几种写法:
// 插件类写法:
// $.fn.customFun=function(){
//     自定义插件的代码
// }
// 用法:
// $('div').customFun()

// 工具类的写法  $.ajax
// $.customFun = function(){
    // 自定义工具类的代码
// }

// 用法：







