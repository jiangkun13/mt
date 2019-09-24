
//随机字符窜方法
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        if (i == 0) {
            result += characters.charAt(Math.floor(Math.random() * 52));
        }
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

//设置local storage的值传入key,value
function setLS(k,v){
    localStorage.setItem(k, v);
}

//获取local storage的值传入key
function getLS(k){
    return localStorage.getItem(k);
}

//返回背景音乐对象
function getMusicBg(url,title){
    var musicBg = {
        musicUrl:url,
        musicTitle:title,
        loop:0
    };
    return musicBg;
}

