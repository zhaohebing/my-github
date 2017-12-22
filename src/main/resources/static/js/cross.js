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
function AJAX(data,callbacksuccess) {
    console.log("************ AJAX - 入参 - Begin *********")
    console.log("* 入参Data     = 【"+JSON.stringify(data)+"】")
    console.log("************ AJAX - 入参 - End ***********")
    // screenLog.log("************ AJAX - 入参 - Begin *********");
    // screenLog.log("* 入参Data     = 【"+JSON.stringify(data)+"】");
    // screenLog.log("************ AJAX - 入参 - End ***********");
    $.ajax({
        type: "post",
        // url: "http://47.95.243.36:8800/getway",
        // url: "http://127.0.0.1:9090/"+url,
        //url: "http://172.30.101.249:9999/gateway",
        // url: "http://127.0.0.1:9090/"+url,
         url: "/gateway",
        data: data,
        success: function(response) {
            console.log("* 返回值Rsp = 【"+JSON.stringify(response)+"】")
            // screenLog.log("* 返回值Rsp = 【"+JSON.stringify(response)+"】");
            callbacksuccess(response.data);
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
//商户名保存
function SetMerchantName(name) {
    localStorage.setItem("merchantName",name);
}
function GetMerchantName() {
    return localStorage.getItem("merchantName");
}
/**
 * 获取会员等级
 * @constructor
 */
function GetUserLv() {
    return localStorage.getItem("lv");
}
/**
 * 保存会员等级
 * @param lv
 * @constructor
 */
function SetUserLv(lv) {
    localStorage.setItem("lv",lv);
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


//会员状态
function SetMemberStatus(memberStatus) {
    localStorage.setItem("memberStatus",memberStatus);
}
function GetMemberStatus() {
    return localStorage.getItem("memberStatus");
}
//会员类型
function SetMemberType(memberType) {
    localStorage.setItem("memberType",memberType);
}
function GetMemberType() {
    return localStorage.getItem("memberType");
}
/**
 * 获取签名
 * @param str
 * @returns {*}
 * @constructor
 */
function GetSha256(str,str2) {
    return CryptoJS.HmacSHA256(str,str2).toString();
}
function GetSha2(str) {
    return CryptoJS.HmacSHA256(str,"1").toString();
}

/**
 * 绑定的银行卡查询html片段
 * @param bankTypeNum 银行标示码
 * @param bankNum 卡号
 * @param addflag
 * @returns {string}
 * @constructor
 */
function GetBankInfo(bankTypeNum,bankNum,addflag) {
    var bankType = bankTypeNum+".png";
    var num = "尾号（"+bankNum.substr(bankNum.length-4,4)+"）";
    var bankFlag = addflag;


    var returnInfo = "<li>"+
        "                    <div class=\"bank \" >"+
        "                        <div class=\"bankCon\">"+
        "                            <div class=\"img-bank\">"+
        "                                <img src=\"../img/banklogo/"+bankType+"\" alt=\"\">"+
        "                            </div>"+
        "                            <div class=\"card-word\">"+num+"</div>"+
        "                            <div class=\"card-word have-border\">"+""+"</div>"+
        "                            <a href=\"javascript:\" class=\"remove_\" data-toggle=\"modal\" data-target=\"#myModal-remove\">"+
        "                                <span banknum='"+bankNum+"' class=\"glyphicon glyphicon-trash\" onclick='deleteBankClick.call(this,this)'></span>"+
        "                            </a>"+
        "                        </div>"+
        "                    </div>"+
        "                </li>";

    return returnInfo;
}
function deleteBankClick(b) {
    deleteBankId = $(this).attr("banknum");
}
/**
 *绑定的银行卡查询html片段
 * @type {string}
 */
var ADDCARD ="<li onclick='addBankCrossClick()'>"+
    "                    <a class=\"add-bank\" href=\"javascript:\">"+
    "                        <span><img src=\"../img/add-card.png\" alt=\"\" class=\"add-pic\"></span>"+
    "                        <span class=\"add-word\">绑定提现账户</span>"+
    "                        <span class=\"add-word2\">您可以添加1个账户</span>"+
    "                    </a>"+
    "                </li>";

/**
 * 交易查询table展示 html片段
 * @param data   交易时间
 * @param name  交易人姓名
 * @param moneyDebit  原金额
 * @param moneyCredit  转换后金额
 * @returns {string}
 * @constructor
 */
function GetTableTransact(id,type,desc,moneyDebit,moneyCredit,data){
    var tableTr = "<tr>"+
        "                        <td>"+id+"</td>"+
        "                        <td>"+type+"</td>"+
        "                        <td>"+desc+"</td>"+
        "                        <td>"+moneyDebit+"</td>"+
        "                        <td>"+moneyCredit+"</td>"+
        "                        <td>"+data+"</td>"+
        "                    </tr>";
    return tableTr
}
/**
 * 收款账户table
 * @param bankName
 * @param routingNum
 * @param accountNum
 * @param receiverName
 * @returns {string}
 * @constructor
 */
function GetTableSelectShop(bankName,routingNum,accountNum,receiverName) {
    var selectDesc =
        "<tbody>"+
        "<tr>"+
        "                                            <td>银行名称</td>"+
        "                                            <td>"+bankName+"</td>"+
        "                                        </tr>"+
        "                                        <tr>"+
        "                                            <td>路由（ABA）</td>"+
        "                                            <td>"+routingNum+"</td>"+
        "                                        </tr>"+
        "                                        <tr>"+
        "                                            <td>账号</td>"+
        "                                            <td>"+accountNum+"</td>"+
        "                                        </tr>"+
        "                                        <tr>"+
        "                                            <td>收款人姓名</td>"+
        "                                            <td>"+receiverName+"</td>"+
        "                                        </tr>"+
        "</tbody>";

    return selectDesc;
}
function GetTableSelectShopAll(type,bankName,routingNum,accountNum,receiverName) {
    var selectDesc =
        "<tbody>"+
        "                                        <tr>"+
        "                                            <td>币种</td>"+
        "                                            <td>"+type+"</td>"+
        "                                        </tr>"+
        "                                        <tr>"+
        "                                            <td>银行名称</td>"+
        "                                            <td>"+bankName+"</td>"+
        "                                        </tr>"+
        "                                        <tr>"+
        "                                            <td>路由（ABA）</td>"+
        "                                            <td>"+routingNum+"</td>"+
        "                                        </tr>"+
        "                                        <tr>"+
        "                                            <td>账号</td>"+
        "                                            <td>"+accountNum+"</td>"+
        "                                        </tr>"+
        "                                        <tr>"+
        "                                            <td>收款人姓名</td>"+
        "                                            <td>"+receiverName+"</td>"+
        "                                        </tr>"+
        "</tbody>";

    return selectDesc;
}
/**
 * 商铺列表table
 * @param id
 * @param shopName
 * @param shopMarket
 * @param shopWebsite
 * @returns {string}
 * @constructor
 */
function GetShopList(id,shopName,shopMarket,shopWebsite,shopid) {
    var shopList ="<tr>"+
        "                            <td>"+id+"</td>"+
        "                            <td>"+shopName+"</td>"+
        "                            <td>"+shopMarket+"</td>"+
        "                            <td>"+shopWebsite+"</td>"+
        "                            <td class='lastTd'>"+
        "                                <a href=\"javascript:\" class=\"remove_\" data-toggle=\"modal\" data-target=\"#myModal-remove\">"+
        "                                    <span shopId=\""+shopid+"\" class=\"glyphicon glyphicon-trash\" onclick='deleteClick.call(this,this)'></span>"+
        "                                </a>"+
        "                                <a href=\"javascript:\" class=\"editBtn\" data-toggle=\"modal\" data-target=\"#myModal-edit\">"+
        "                                    <span shopId=\""+shopid+"\" class=\"glyphicon glyphicon-edit\" onclick='editClick.call(this,this)'></span>"+
        "                                </a>"+
        "                            </td>"+
        "                        </tr>";

    return shopList;
}
function click_(){
    $(this).addClass("click_");
}
function deleteClick(b){
    removeId = $(this).attr("shopId");
}
function editClick(){
    editId = $(this).attr("shopId");
    var shopinf = ShopInfoList[editId];

    // $("#save_selectActiveInitUsd").val("USD GPS 000000002");
    // if(shopinf.currency == "USD"){
    //     $(".usd_").removeClass("usd_red");
    //     $("#usd_class").addClass("usd_red");
    //     $("#save_selectoptioninit .form-group ").css("display","none");
    //     $(".select_usd").css("display","block");
    //     // $("#save_selectShopWeb").val(shopinf.shopMarket);
    //     $("#save_selectShopWeb").val("123143124USD");
    //
    //     // $("#save_selectShopWeb").find("option:selected").text("123123")
    // }
    // if(shopinf.currency == "EUR"){
    //     $(".usd_").removeClass("usd_red");
    //     $("#eur_class").addClass("usd_red");
    //     $("#save_selectoptioninit .form-group ").css("display","none");
    //     $(".select_eur").css("display","block");
    //     $("#save_selectShopWeb").val(shopinf.shopMarket);
    // }
    // if(shopinf.currency == "GBP"){
    //     $(".usd_").removeClass("usd_red");
    //     $("#gbp_class").addClass("usd_red");
    //     $("#save_selectoptioninit .form-group ").css("display","none");
    //     $(".select_gbp").css("display","block");
    //     $("#save_selectShopWeb").val(shopinf.shopMarket);
    // }
    $("#save_selectShopWeb").val(shopinf.shopMarket);

    $("#save_shopweb").val(shopinf.shopWebsite);
    $("#save_shopName").val(shopinf.shopName);

    $("#save_input-access").val(shopinf.accessKey);
    $("#save_input-secret").val(shopinf.secretKey);
    $("#save_input-seller").val(shopinf.sellerId);
}
function GetShopDescInfo(shopMarket,shopWebsite,shopName) {
    var shopdesc = "<tr>"+
        "                                        <td>店铺市场</td>"+
        "                                        <td>"+shopMarket+"</td>"+
        "                                    </tr>"+
        "                                    <tr>"+
        "                                        <td>店铺链接</td>"+
        "                                        <td>"+shopWebsite+"</td>"+
        "                                    </tr>"+
        "                                    <tr>"+
        "                                        <td>店铺名称</td>"+
        "                                        <td>"+shopName+"</td>"+
        "                                    </tr>";
    return shopdesc;
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