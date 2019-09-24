//添加热点
var hotspotname = '';
function setHotspot(url,id){
    var ath = k.get('view.hlookat');
    var atv = k.get('view.vlookat');
    //添加热点
    var action = 1;  //热点类型 1场景切换
    var spotname = id != undefined ? id : makeid(10);  //随机10位字符串热点名字ID
        hotspotname = spotname;
    var scale = 0.6;
    var framespeed = 0.06;
    var lastframe = 24;

    var img = {};
    //这里判断是动态图还是静态图
        img = {type: 2, total: lastframe, time: 2.4, pertime: framespeed};

    var hotsoptData = {
        action: 1,
        actionData: {sceneId: "DYlYyPqqgI"},
        ath: ath,
        atv: atv,
        iconType: 1,
        id: spotname,
        img: img,
        title: "1.jpg",
        titleIsShow: true,
        url: url,
    }

    k.call("addhotspot(" + spotname + ");");
    k.call("set(hotspot[" + spotname + "].url,"+url+");");
    k.call("set(hotspot[" + spotname + "].crop,0|0|128|128);");
    k.call("set(hotspot[" + spotname + "].framewidth,128);");
    k.call("set(hotspot[" + spotname + "].frameheight,128);");
    k.call("set(hotspot[" + spotname + "].frame,0);");
    k.call("set(hotspot[" + spotname + "].frameoff,0);");
    k.call("set(hotspot[" + spotname + "].framespeed,"+framespeed+");");
    k.call("set(hotspot[" + spotname + "].lastframe,"+lastframe+");");
    k.call("set(hotspot[" + spotname + "].zorder,100);");
    k.call("set(hotspot[" + spotname + "].title,'场景名字');");
    k.call("set(hotspot[" + spotname + "].ath," + ath + ");");
    k.call("set(hotspot[" + spotname + "].atv," + atv + ");");
    k.call("set(hotspot[" + spotname + "].scale," + scale + ");");
    k.call("set(hotspot[" + spotname + "].ondown,'draghotspot();');");
    k.call("set(hotspot[" + spotname + "].onup,'js(getHotspotCoordinate("+spotname+");)');");
    k.call("set(hotspot[" + spotname + "].onloaded,'hotspot_animate();showtxt_action();');");

    saveHotspot(hotsoptData);
}

//初始化时设置场景内热点
function dataHotspot(data){

    k.call("addhotspot(spot" + data.id + ");");
    k.call("set(hotspot[spot" + data.id + "].url,http://test.res.jsvry.com/test"+data.url+");");
    k.call("set(hotspot[spot" + data.id + "].crop,0|0|128|128);");
    k.call("set(hotspot[spot" + data.id + "].framewidth,128);");
    k.call("set(hotspot[spot" + data.id + "].frameheight,128);");
    k.call("set(hotspot[spot" + data.id + "].frame,0);");
    k.call("set(hotspot[spot" + data.id + "].frameoff,0);");
    if (data.img.type == 2) {
        k.call("set(hotspot[spot" + data.id + "].framespeed,"+data.img.pertime+");");
        k.call("set(hotspot[spot" + data.id + "].lastframe,"+data.img.total+");");

        k.call("set(hotspot[spot" + data.id + "].onloaded,'hotspot_animate();showtxt_action();');");
    }
    k.call("set(hotspot[spot" + data.id + "].zorder,100);");
    k.call("set(hotspot[spot" + data.id + "].title,'场景名字');");
    k.call("set(hotspot[spot" + data.id + "].ath," + data.ath + ");");
    k.call("set(hotspot[spot" + data.id + "].atv," + data.atv + ");");
    k.call("set(hotspot[spot" + data.id + "].scale,0.6);");
    k.call("set(hotspot[spot" + data.id + "].ondown,'draghotspot();');");
    k.call("set(hotspot[spot" + data.id + "].onup,'js(getHotspotCoordinate(spot"+data.id+");)');");
}

//获取热点坐标
function getHotspotCoordinate(h) {
    var hot = k.get('hotspot['+h+']');
    hotspotname = h;
    saveEditHotspot({id:h,ath:hot.ath,atv:hot.atv})
}

//初始化热点
function initialHotspot(){
    if (currentScene.hotspot.length != 0) {
        for(var i = 0; i < currentScene.hotspot.length; i++){
            dataHotspot(currentScene.hotspot[i]);
        }
    }else{
        for(var i = 0; i < currentScene.hotspot.length; i++){
            delHotspotXml(currentScene.hotspot[i].id);
        }
    }
}

//删除xml中的热点
function delHotspotXml(hname){
    k.removehotspot(hname,true);
}

//删除local storage 里面的数据
function delHotspot(){
    delHotspotXml(hotspotname);
    saveDelHotspot(hotspotname);
}



