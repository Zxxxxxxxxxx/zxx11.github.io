// 固定每张图片出于的位子和状态
var states = [{
        ZIndex: 1,
        width: 120,
        height: 150,
        top: 69,
        left: 134,
        opac: 0.2
    },
    {
        ZIndex: 2,
        width: 130,
        height: 170,
        top: 59,
        left: 0,
        opac: 0.5
    },
    {
        ZIndex: 3,
        width: 170,
        height: 218,
        top: 24,
        left: 110,
        opac: 0.7
    },
    {
        ZIndex: 4,
        width: 218,
        height: 288,
        top: 0,
        left: 263,
        opac: 1
    },
    {
        ZIndex: 3,
        width: 170,
        height: 218,
        top: 24,
        left: 470,
        opac: 0.7
    },
    {
        ZIndex: 2,
        width: 130,
        height: 170,
        top: 59,
        left: 620,
        opac: 0.5
    },
    {
        ZIndex: 1,
        width: 120,
        height: 150,
        top: 69,
        left: 500,
        opac: 0.2
    },
];










// 将状态和位置赋给li
var lis = $('#box li');

function move() {
    lis.each(function (index, ele) {
        var state = states[index]
        // $(ele).css({
        //     'z-index':state.ZIndex,
        //     'width':state.width,
        //     'height':state.height,
        //     'top':state.top,
        //     'left':state.left,
        //     'opac':state.opac
        // })
        $(ele).css('z-index', state.ZIndex).finish().animate(state, 1000).find('img').css('opacity', state.opac)
})
}
move()
// 讲评的
// 下一张
function next(){
     states.unshift(states.pop());
    move()
}
$('#box .next').click(function () {
    // 原理:把数组中的最后一个元素移动数组中的第一张
    next();
})
$('#box .prev').click(function () {
    // 原理:把数组中的最后一个元素移动数组中的第一张
    states.push(states.shift());
    move()
})
// 自动轮播
var time = null;
function autoplay(){
    time=setInterval(function(){
        next();
    },1000)
}
autoplay()

// 停止轮播
$('#box section').add('#box li').hover(function(){
    clearInterval(time)
},function(){
    autoplay()
})

// 封装为插件，能够使得只要使用这个插件，就能被重复的使用效果，会产生什么样的问题?
// 1.插件中最好不要使用id，原因:插件是为了能够被重复使用，也就是说在一个页面上可能会使用重复，会造成页面的冲突，并且ID具有唯一性的特性.
// 2.变量命名和方法的命名:states ,time,move(),用户在使用这个插件的时候，可能还会引入自己创建的文件，也有这样的命名，name就会产生冲突
// 3.标签class的值得问题:prev,next.  这些class命名太大众化，大多数编写者都会使用这样的命名，势必会造成冲突
// 插件的文件名问题:index.js，index.css，命名太大众化，比如jquery.slide.js



// 自己写的
/*
function sta(){
    states.push(states[0]);
    states.shift()
    console.log(states)
    lis.each(function(index,ele){
        var state = states[index]
        $(ele).css('z-index',state.ZIndex).finish().animate(state,1000)
    })
    // return states

    $('.next').click(function(){
    clearInterval(aa)
        states.push(states[0]);
        states.shift();
        lis.each(function(index,ele){
            var state = states[index]
            $(ele).css('z-index',state.ZIndex).finish().animate(state,1000)
        })
    //   setTimeout(aa,1000)
    })
    $('.prev').click(function(){
        clearInterval(aa)
            states.splice(states[0],0,states[6]);
            
            lis.each(function(index,ele){
                var state = states[index]
                $(ele).css('z-index',state.ZIndex).finish().animate(state,1000)
            })
        //   setTimeout(aa,1000)
        })
}
var aa = setInterval(sta,1000)
*/