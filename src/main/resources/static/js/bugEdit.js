/**
 * Created by nan on 2017/12/22.
 */


var BugEditVueData = new Vue({
    el:"bugEditApp",
    data:{
        bugInfo:{}
    }
})



$(function () {
   InitData_Edit(); 
});

function InitData_Edit() {
    BugEditVueData.$data.bugInfo = BUGINFO;
}