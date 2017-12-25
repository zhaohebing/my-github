//@ sourceURL=bugform.js
/**
 * Created by Administrator on 2017/12/25 0025.
 */
var bugForm = new Vue({
    el: '#bugform',
    data:{
        bugTitle: '',           //bug标题
        bugDesc:  '',           //bug描述
        userName: '',           //bug创建者
        bugPriority: '',        //bug优先级
        bugSolver: '',          //分配给：
        bugType:   '',          //bug类型
        bugStatus: '',          //bug状态
    },
    methods: {

    }
});

$('#bugAddCommit').on('click', function() {
    bugForm.$data.bugPriority = $('.dropdown-toggle').text().trim();
    bugForm.$data.bugSolver = $('#distribution').find('option:selected').text();
    bugForm.$data.bugStatus = $('#bugStatus').find('option:selected').text();
    // var type = [];
    // for (var i = 0; i < $('#bugType').find('label').length; i ++) {
    //     console.log($("input[type='checkbox']").is(':checked'));
    //     console.log(type.push($("input[type='checkbox']").is(':checked')));
        // type.push($('#bugType').find('label')[i].is(':checked'));
    // }
    // console.log(type)

    bugForm.$data.bugType = "开放空姐";

    var data = {
        bugTitle:       bugForm.$data.bugTitle,           //bug标题
        bugDesc:        bugForm.$data.bugDesc,            //bug描述
        bugCreaterId:   bugForm.$data.userName,           //bug创建者
        bugPriority:    bugForm.$data.bugPriority,        //bug优先级
        bugSolverId:    bugForm.$data.bugSolver,          //分配给
        bugType:        bugForm.$data.bugType,            //bug类型
        bugStatus:      bugForm.$data.bugStatus,          //bug状态
        userId:         GetUserMemId()                    //用户ID
    };
    AJAX(data, "/bugSave", bugSaveRspe);
});
$(function () {
    bugForm.$data.userName = GetUserName();
});

function bugSaveRspe(rsp) {

}