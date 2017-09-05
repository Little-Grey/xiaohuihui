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
        var h = $('.yd-zhanwei').height();
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
     * js配合锚点实现动画滚动与监听
     * 
     */
    // $('.footer-bottom-right a[href^="#top"]').click(function(e){
    //     e.preventDefault();
    //     $('html, body').animate({scrollTop: $(this.hash).offset().top}, 1000);
    // });


    function scrollTop(id) {
        $(id).click(function (e) {
            console.log(id);
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top
            }, 1000);
        });
    }


    /**
     * 地图
     */
    //创建和初始化地图函数：
    function initMap() {
        createMap(); //创建地图
        setMapEvent(); //设置地图事件
        addMapControl(); //向地图添加控件
        addMapOverlay(); //向地图添加覆盖物
    }

    function createMap() {
        map = new BMap.Map("map");
        map.centerAndZoom(new BMap.Point(113.234233, 23.408039), 19);
    }

    function setMapEvent() {
        map.enableScrollWheelZoom();
        map.enableKeyboard();
        map.enableDragging();
        map.enableDoubleClickZoom()
    }

    function addClickHandler(target, window) {
        target.addEventListener("click", function () {
            target.openInfoWindow(window);
        });
    }

    function addMapOverlay() {
        var markers = [{
            content: "",
            title: "广州市中群岳科技有限公司",
            imageOffset: {
                width: 0,
                height: 3
            },
            position: {
                lat: 23.407973,
                lng: 113.233753
            }
        }];
        for (var index = 0; index < markers.length; index++) {
            var point = new BMap.Point(markers[index].position.lng, markers[index].position.lat);
            var marker = new BMap.Marker(point, {
                icon: new BMap.Icon("http://api.map.baidu.com/lbsapi/createmap/images/icon.png", new BMap.Size(
                    20, 25), {
                    imageOffset: new BMap.Size(markers[index].imageOffset.width, markers[index].imageOffset
                        .height)
                })
            });
            var label = new BMap.Label(markers[index].title, {
                offset: new BMap.Size(25, 5)
            });
            var opts = {
                width: 200,
                title: markers[index].title,
                enableMessage: false
            };
            var infoWindow = new BMap.InfoWindow(markers[index].content, opts);
            marker.setLabel(label);
            addClickHandler(marker, infoWindow);
            map.addOverlay(marker);
        };
    }
    //向地图添加控件
    function addMapControl() {
        var scaleControl = new BMap.ScaleControl({
            anchor: BMAP_ANCHOR_BOTTOM_LEFT
        });
        scaleControl.setUnit(BMAP_UNIT_METRIC);
        map.addControl(scaleControl);
        var navControl = new BMap.NavigationControl({
            anchor: BMAP_ANCHOR_TOP_LEFT,
            type: BMAP_NAVIGATION_CONTROL_LARGE
        });
        map.addControl(navControl);
        var overviewControl = new BMap.OverviewMapControl({
            anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
            isOpen: true
        });
        map.addControl(overviewControl);
    }
    var map;
    initMap();


    // 轮播图下面的第二部分内容结束



    // $('#ydlm-header-id > li > a').click(function(){
    //         console.log(this);
    //         // console.log($(this).parent().nextAll());
    //         console.log($(this).parent().siblings().children('a'));
    //         // if($(this).hasClass('yd-active')){
    //             if ($(this).attr('id') == 'yd-active') {
    //             // $(this).removeAttr('id');
    //             // $(this).attr('id',yd-active).siblings().removeAttr('id');
    //             console.log(123);
    //         }else{
    //             $(this).attr('id','yd-active').parent().siblings().children('a').removeAttr('id');
    //         }
    //     });





    // 入口函数的结尾
});