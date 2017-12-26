//@ sourceURL=bugform.js
/**
 * Created by Administrator on 2017/12/25 0025.
 */
var bugForm = new Vue({
    el: '#bugform',
    data:{
        bugTitle: '',           //bug标题
        bugDesc:  '',           //bug描述
        bugPriority: '',        //bug优先级
        bugSolver: '',          //分配给：
        bugType:   '',          //bug类型
        bugStatus: '',          //bug状态
        userName: ''            //名字
    },
    methods: {

    }
});

bugForm.$data.userName = GetUserName();

$('#bugAddCommit').on('click', function() {
    bugForm.$data.bugSolver = $('#distribution').find('option:selected').text();
    bugForm.$data.bugStatus = $('#bugStatus').find('option:selected').text();

    bugForm.$data.bugType = "开放空姐";
    var userId = Number(GetToken());

    var data = {
        bugTitle:       bugForm.$data.bugTitle,           //bug标题
        bugDesc:        bugForm.$data.bugDesc,            //bug描述
        bugCreaterId:   userId,                           //bug创建者
        bugPriority:    bugForm.$data.bugPriority,        //bug优先级
        // bugSolverId:    bugForm.$data.bugSolver,          //分配给
        bugSolverId:    123,          //分配给
        bugType:        bugForm.$data.bugType,            //bug类型
        bugStatus:      bugForm.$data.bugStatus           //bug状态
    };
    AJAX(data, "/bugSave", bugSaveRspe);
});

$(".dropdown-menu a").click(function(){
    $(this).parents(".dropdown-menu").siblings("a").find('span').text($(this).text());
    bugForm.$data.bugPriority = $(this).text();
});

/**
 * 新增BUG回调函数
 */
function bugSaveRspe(rsp) {

}