/**
 * Created by nan on 2017/8/23.
 */
//document.write('<script src="../frame/jquery/jquery-2.2.3.js"><\/script>')
var windowHeight=$(window).height();
$(".containerCon").css("min-height",windowHeight-274+"px");


// document.write('<script src="http://pv.sohu.com/cityjson?ie=utf-8"><\/script>')
// document.write('<script src="../js/jqueryEx/screenlog.js"><\/script>')

/**
 * 全局开关控制
 * @type {boolean}
 */
var LOGFLAG = true;//日志开关

$(function () {
    $(document).keypress(function(e) {
        // 回车键事件
        if(e.which == 13) {
            //alert("123");
            return false;
            //jQuery(".confirmButton").click();
        }
    });
    // screenLog.init();

});
function Public_Commit_Results_Err_JUMP(msg,callback) {
    x0p({
        title: '提醒',
        type: "info",
        text: ' '+msg,
        buttons: [{
            type: 'ok',
            text: '确定',
        }, {
            type: 'cancel',
            text: '取消'
        }]
    }, function (button) {
        if (button == 'ok') {
            callback(msg);
        }
    });
}

function Public_Commit(msg,callbackCommit) {
    x0p({
        title: "提醒",
        text: msg,
        type: "info",
        buttons: [{
            type: 'ok',
            text: '确定',
            showLoading: true
        }, {
            type: 'cancel',
            text: '取消'
        }]
    }, function (button) {
        if (button == 'ok') {
            $("#x0p-text-anchor").find("div").eq(1).html("请稍等。。。");
            // this.text = "请稍等。。。";
            //为了效果展示，增加延迟
            setTimeout(function () {
                callbackCommit();
            },1000);
            // ;
        }
    });
}
function Public_Commit_Results_Success(msg,callback) {
    x0p({
        title: '',
        type: "ok",
        text: '  '+msg,
        overlayAnimation: false
    }, function (button) {
        callback(msg);
    });
}
function Public_Commit_Results_Err(msg) {
    x0p({
        title:"",
        text:""+msg,
        type:"error",
        buttons:[{
            type: 'error',
            text: '确 定'
        }]
    });
}

function Public_Commit_Results_Err_AJAX(msg,callback) {
    x0p({
        title: '',
        type: "error",
        text: '  '+msg,
        overlayAnimation: false
    }, function (button) {
        callback(msg);
    });
}

function iziToast_warning(msg) {
    iziToast.warning({
        // title: '警告！',
        message: msg,
        position:"center",
        timeout: 1500
    });
}
/**
 * 被校验的input必须有id,namedesc以及checknull属性
 * checknull属性为 check 的进行非空校验
 * @param divName
 */
function CheckBySelectDiv(divName) {
    var checkResult = {
        resultCode:1,
        resultMsg:"",
        resultId:""
    }
    $("#"+divName+" input").each(function (a,b) {

        var id = $(b).attr("id"); //获取id属性
        var namedesc = $(b).attr("namedesc"); //获取namedesc属性
        var checkNull = $(b).attr("checknull"); //checknull

        if(checkNull == "check"){
            checkResult.resultId = id;
            var valStr = $("#"+id).val();
            if(valStr == "" || valStr == undefined){
                //非空校验失败
                checkResult.resultCode = 0;
                checkResult.resultMsg = namedesc+"【不能为空】";
                iziToast_warning_checkNull(checkResult.resultMsg);
                return false;
            }
        }
    });
    return checkResult;
}
/**
 * 通用ajax
 * @param url   请求地址
 * @param type  请求类型
 * @param data  请求参数
 * @param done  回调函数
 * @constructor
 */
function AJAX(data, url, callbacksuccess) {
    console.log("************ AJAX - 入参 - Begin *********")
    console.log("* 入参Data     = 【"+JSON.stringify(data)+"】")
    console.log("************ AJAX - 入参 - End ***********")
    // screenLog.log("************ AJAX - 入参 - Begin *********");
    // screenLog.log("* 入参Data     = 【"+JSON.stringify(data)+"】");
    // screenLog.log("************ AJAX - 入参 - End ***********");
    $.ajax({
        type: "post",
        url : url,
        data: data,
        success: function(response) {
            console.log("* 返回值Rsp = 【"+JSON.stringify(response)+"】")
            // screenLog.log("* 返回值Rsp = 【"+JSON.stringify(response)+"】");
            callbacksuccess(response);
            console.log("*** AJAX - 返回值 - End ***");
        },
        error: function(message) {
            //alert("ajax错误");
            // screenLog.log(JSON.stringify(message));
            // screenLog.log("*** AJAX - End ***");
            // console.log("*** AJAX - End ***")
        }
    });
}


function AJAX_JUMP(url,el) {
    if(url != ""){
        $.ajax({
            url:url,
            success: function(response) {
                $(".content").html(response);
            },
            error: function(error) {
                console.log("ajax error = " + JSON.stringify(error));
                return false;
            }
        });
    }else{
        // window.location.href =  "risk-control-main.html";
    }
}
//显示遮罩层
function showMask(id){
    $("#"+id).css("height",$(document).height());
    $("#"+id).css("width",$(document).width());
    $("#"+id).show();
}
//隐藏遮罩层
function hideMask(id){

    $("#"+id).hide();
}
/**
 * /通用页面传参获取
 * @param key 需要获取的参数
 * @returns  返回传入的参数
 * @constructor
 */
function GetRequest(key) {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
        }
    }
    return theRequest[key];
}
var parseParam=function(paramObj, key){
    var paramStr="";
    if(paramObj instanceof String||paramObj instanceof Number||paramObj instanceof Boolean){
        paramStr+="&"+key+"="+encodeURIComponent(paramObj);
    }else{
        $.each(paramObj,function(i){
            var k=key==null?i:key+(paramObj instanceof Array?"["+i+"]":"."+i);
            paramStr+='&'+parseParam(this, k);
        });
    }
    return paramStr.substr(1);
};
var urlEncode = function (paramObj, key, encode) {
    if(paramObj==null) return '';
    var paramStr = '';
    var t = typeof (paramObj);
    if (t == 'string' || t == 'number' || t == 'boolean') {
        paramStr += '&' + key + '=' + ((encode==null||encode) ? encodeURIComponent(paramObj) : paramObj);
    } else {
        for (var i in paramObj) {
            var k = key == null ? i : key + (paramObj instanceof Array ? '[' + i + ']' : '.' + i);
            paramStr += urlEncode(paramObj[i], k, encode);
        }
    }
    return paramStr;

};

function GetReqId() {
    var timestamp=new Date().getTime() ;
    return timestamp+"0";
}
/**
 * 清理缓存
 * @constructor
 */
function ClearlocalStorage() {
    localStorage.clear();
}
/**
 * 获取用户登录邮箱
 * @constructor
 */
function GetUserEmail() {
    return localStorage.getItem("email");
}
/**
 * 保存用户登录邮箱
 * @param email
 * @constructor
 */
function SetUserEmail(email) {
    localStorage.setItem("email",email);
}
function SetLanguage(language) {
    localStorage.setItem("language",language);
}
function GetLanguage() {
    var text = $("#languageselect").text();
    console.log(text);
    //var b = text.indexOf("中文");
    if(text.indexOf("中文") != -1){
        return "cn";
    }else{
        return "en";
    }
    // return localStorage.getItem("language");
}
/**
 * 保存会员ID
 * @param memId
 * @constructor
 */
function SetUserMemId(memId) {
    localStorage.setItem("memId",memId);
}
/**
 * 获取会员ID
 * @param memId
 * @constructor
 */
function GetUserMemId() {
    return localStorage.getItem("memId");
}
//用户名的保存
function SetUserName(userName) {
    localStorage.setItem("userName",userName);
}
function GetUserName() {
    return localStorage.getItem("userName");
}
//用户类型
function SetUserType(type) {
    localStorage.setItem("userType",type);
}
function GetUserType() {
    return localStorage.getItem("userType");
}
//用户项目
function SetUserPro(pro) {
    localStorage.setItem("project",pro);
}
function GetUserPro() {
    return localStorage.getItem("project");
}
/**
 * 获取会员认证状态
 * @constructor
 */
function GetUserActType() {
    return localStorage.getItem("actType");
}
/**
 * 设置会员认证状态
 * @param actType
 * @constructor
 */
function SetUserActType(actType) {
    localStorage.setItem("actType",actType);
}
var MERCHANTLIST=[];
function SetMerchant(merchant) {
    localStorage.setItem("merchant",merchant);
}
function GetMerchant() {
    return localStorage.getItem("merchant");
}
/**
 * ip获取
 * @returns {*} ip
 * @constructor
 */
function GetIp() {
    //console.log(returnCitySN["cip"]+','+returnCitySN["cname"]);
    return "";
};
/**
 * 获取登录token
 * @constructor
 */
function GetToken() {
    return localStorage.getItem("sessionToken");
};
/**
 * 保存token
 * @param token
 * @constructor
 */
function SetToken(token) {
    localStorage.setItem("sessionToken",token);
}
/**
 * 保存可用余额
 * @param useMoney
 * @constructor
 */
function SetUseMoney(useMoney) {
    localStorage.setItem("usemoney",useMoney);
}
/**
 * 获取可用余额
 */
function GetUseMoney() {
    return localStorage.getItem("usemoney");
}
/**
 * 清理存储的Token
 * @constructor
 */
function ClearToken() {
    localStorage.removeItem("sessionToken");
};
/**
 * 清理本地缓存的所有数据
 * @constructor
 */
function ClearLocalStorage() {
    localStorage.clear();
};


//bug信息
function SetBugInfo(buginfo) {
    localStorage.setItem("buginfo",buginfo);
}
function GetBugInfo() {
    return localStorage.getItem("buginfo");
}
//bug类型
function SetBugType(bugType) {
    localStorage.setItem("bugType",bugType);
}
function GetBugType() {
    return localStorage.getItem("bugType");
}
//bug状态
function SetBugStat(bugStat) {
    localStorage.setItem("bugStat",bugStat);
}
function GetBugStat() {
    return localStorage.getItem("bugStat");
}


function GetSha256(str,str2) {
    return CryptoJS.HmacSHA256(str,str2).toString();
}
function GetSha2(str) {
    return CryptoJS.HmacSHA256(str,"1").toString();
}

function Public_loading() {
    $('body').loading({
        loadingWidth:240,
        title:'请稍候...',
        name:'Public_loading',
        discription:'请稍候...',
        direction:'row',
        type:'origin',
        originBg:'#71EA71',
        originDivWidth:0,
        originDivHeight:0,
        originWidth:4,
        originHeight:4,
        smallLoading:false,
        titleColor:'#388E7A',
        loadingBg:'#312923',
        loadingMaskBg:'rgba(22,22,22,0.2)'
    });
    // window.onresize = function(){
    //     $(window).width()
    //     $(window).height()
    //     var w = ($("body").width()>$(window).width())?$("body").width():$(window).width();
    //     var h = ($("body").height()>$(window).height())?$("body").height():$(window).height();
    //     $(".cpt-loading-mask").width(w);
    //     $(".cpt-loading-mask").height(h);
    // };
}
function Public_loading_html() {
    $('html').loading({
        // loadingWidth:240,
        title:'请稍候...',
        name:'Public_loading_html',
        discription:'请稍候...',
        direction:'row',
        type:'origin',
        originBg:'#71EA71',
        originDivWidth:30,
        originDivHeight:30,
        originWidth:4,
        originHeight:4,
        smallLoading:false,
        titleColor:'#388E7A',
        loadingBg:'#312923',
        loadingMaskBg:'rgba(22,22,22,0.2)'
    });
    // window.onresize = function(){
    //     $(window).width()
    //     $(window).height()
    //     var w = ($("body").width()>$(window).width())?$("body").width():$(window).width();
    //     var h = ($("body").height()>$(window).height())?$("body").height():$(window).height();
    //     $(".cpt-loading-mask").width(w);
    //     $(".cpt-loading-mask").height(h);
    // };
}
function Public_loading_remove() {
    // window.onresize = function(){};
    removeLoading('Public_loading');
    $("body").removeAttr("style");
}

function Public_loading_remove_html() {
    // window.onresize = function(){};
    removeLoading('Public_loading_html');
    $("body").removeAttr("style");
}

/**
 * 当会员登录超时时，删除token
 * @param resp
 */
function removeToken(resp) {
    if(resp.resultCode == "MER00006"){
        SetToken("");
        Public_Commit_Results_Err_AJAX("您的登录信息已失效,请重新登录",function () {
            window.location.href = "new-login.html";
        });
        return false;
    }else return true;
}

var BANKTPYEMAP={
    102:"工商银行",
    103:"农业银行",
    105:"建设银行",
    303:"光大银行",
    104:"中国银行",
    308:"招商银行",
    301:"交通银行",
    310:"浦发银行",
    307:"平安银行",
    305:"民生银行",
    309:"兴业银行",
    302:"中信银行",
    306:"广发银行",
    403:"邮政储蓄",
    304:"华夏银行",
    318:"渤海银行",
}

// function iziToast_warning_(msg) {
//     iziToast.warning({
//         // title: '警告！',
//         message: msg,
//         position:"center"
//     });
// }

/**
 * 生成 requestId
 * @returns {*}
 */
function getRequestId() {
    return new Date().Format("0yyyyMMddhhmmss");
}

/**
 * Date函数扩展，用于获取固定格式时间
 * @param fmt
 * @returns {*}
 * @constructor
 */
Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};

var SHOPINFO={
    id:"123",
    accountNum:"账户2",
    shopMarket:"Amazon.com",
    shopWebsite:"122",
    shopName:"WOW心飞扬",
    sellerId:"AMTO2VC9UFXV9",
    accessKey:"AKIAIZUKU45XPI6ZQ7RQ",
    secretKey:"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"

};
var SHOPCOMMITTYPE="edit";

var success_timer = "";


function logger(msg) {
    if(LOGFLAG){
        console.log(msg)
    }
}