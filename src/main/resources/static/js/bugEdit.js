//@ sourceURL=bugEdit.js
/**
 * Created by nan on 2017/12/22.
 */


var BugEditVueData = new Vue({
    el:"#bugEditApp",
    data:{
        bugInfo:{}
    },
    methods:{
        yxjEx:function (id) {
            if (id == "" || id == undefined) return "";
            switch (id){
                case "1":
                    return "一般";
                case "2":
                    return "重要";
                case "3":
                    return "紧急";
            }
        },
        butypeEx:function (id) {
            if (id == "" || id == undefined) return "";
            switch (id){
                case "1":
                    return "bugtypeJK";
                case "2":
                    return "bugtypeYM";
                case "3":
                    return "bugtypeXQ";
            }
        },
        bugStatEx:function (id) {
            if (id == "" || id == undefined) return "";
            switch (id){
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
            }
        }
    }
})


InitData_Edit();
InitEve_Edit();

function InitEve_Edit() {
    // $(".yxjchoose").click(function () {
    //     var text = $(this).text() +"  <i class='icon-caret-down'>";
    //     $("#yxjShow").html(text);
    // });
}
function InitData_Edit() {
    var buginfo =  JSON.parse(GetBugInfo());
    logger(buginfo);
    BugEditVueData.$data.bugInfo = buginfo;

    var yxjEx = BugEditVueData.yxjEx(buginfo.bugFlag);
    $("#yxjShow").html(yxjEx);
    var bugTypeEx = BugEditVueData.butypeEx(buginfo.bugType);
    $("#"+bugTypeEx).addClass("active");

    $("#bugstatselect").val(buginfo.bugStat);
}

$(".checkbox-a").click(function(){
    $(".checkbox-a").removeClass("active");
    $(this).addClass("active")
})