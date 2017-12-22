//@ sourceURL=bugEdit.js
/**
 * Created by nan on 2017/12/22.
 */


var BugEditVueData = new Vue({
    el:"#bugEditApp",
    data:{
        bugInfo:{}
    }
})


InitData_Edit();

function InitData_Edit() {
    var buginfo = GetBugInfo();
    logger(buginfo);
    BugEditVueData.$data.bugInfo = JSON.parse(buginfo);
}