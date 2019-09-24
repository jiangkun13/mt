//添加特效
function setEffect(url){
    var pluginname = 'snow';
    k.call("addplugin(" + pluginname + ");");
    k.call("set(plugin[" + pluginname + "].keep,true);");
    k.call("set(plugin[" + pluginname + "].zorder,1);");
    k.call("set(plugin[" + pluginname + "].url,http://res.jsvry.com/krpano/plugins/snow.js);");
    k.call("set(plugin[" + pluginname + "].alturl,http://res.jsvry.com/krpano/plugins/snow.swf);");
    k.call("set(plugin[" + pluginname + "].floor,0.9);");
    k.call("set(plugin[" + pluginname + "].mode,image);");
    k.call("set(plugin[" + pluginname + "].blendmode,normal);");
    k.call("set(plugin[" + pluginname + "].flakes,200);");
    k.call("set(plugin[" + pluginname + "].imageurl,"+url+");");

    saveEffect({imageurl:url,flakes:200});
}

//初始化特效
function initialEffect(){
    if (currentScene.effect != null) {
        setEffect(currentScene.effect.imageurl);
    }else{
        delEffect();
    }
}

//删除特效
function delEffect(){
    k.removeplugin('snow',true);
    saveEffect(null);
}