/**
 * Created by nan on 2017/12/21.
 */

/**
 * 测试数据
 * @type {[*]}
 */
var TestbugTableDataList =[
    {id:"11",bugTitle:"登录页面BUG1",bugDesc:"登录页面的密码框缺少校验",bugcreateTime:"2017-12-21",bugStat:"1",bugFlag:"1",bugSrc:"/src/img.ipg",bugType:"1"},
    {id:"22",bugTitle:"登录页面BUG2",bugDesc:"登录页面的密码框缺少校验",bugcreateTime:"2017-12-21",bugStat:"2",bugFlag:"2",bugSrc:"/src/img.ipg",bugType:"2"},
    {id:"33",bugTitle:"登录页面BUG3",bugDesc:"登录页面的密码框缺少校验",bugcreateTime:"2017-12-21",bugStat:"3",bugFlag:"3",bugSrc:"",bugType:"3"},
    {id:"44",bugTitle:"登录页面BUG4",bugDesc:"登录页面的密码框缺少校验",bugcreateTime:"2017-12-21",bugStat:"4",bugFlag:"3",bugSrc:"/src/img.ipg",bugType:"1"},
]
var IndexVueData = new Vue({
    el:"#indexVueDivData",
    data:{
        bugTableDataList:[],
        bug:"20%",

    },
    methods:{
        // addbug:function () {
        //
        // },
        bugForm:function (id) {
            SetBugInfo(JSON.stringify(IndexVueData.$data.bugTableDataList[id]));
            AJAX_JUMP("bugformEdit.html");
        },
        bugStatEscape:function (bugstat) {
            if(bugstat == "" || bugstat == undefined){
                return "";
            }
            switch (bugstat){
                case "1":
                    return "待确认";
                case "2":
                    return "解决中";
                case "3":
                    return "已解决";
                case "4":
                    return "待测试";
                case "5":
                    return "测试通过";
                case "6":
                    return "测试失败";
                case "7":
                    return "已修复";
                case "8":
                    return "已关闭";
                default:
                    return "";
            }
        }
    }
});

$(function () {
    InitData_Index();
    InitEve();
});
// InitData_Index();
/**
 * 数据请求区域
 * @type {[*]}
 */
function InitData_Index() {
    IndexVueData.$data.bugTableDataList = TestbugTableDataList;
    logger(JSON.stringify(IndexVueData.$data.bugTableDataList));
}

function InitEve() {
    $("#addbug").click(function () {
        AJAX_JUMP("bugform.html");
    })
    $(".indexMenuJump").click(function () {
       var jumUrl = $(this).attr("jumpUrl");
       AJAX_JUMP(jumUrl);
    });
}