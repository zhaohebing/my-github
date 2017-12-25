/**
 * Created by nan on 2017/12/22.
 */






InitData_Message();


function InitData_Message() {
    var bugType = GetBugType();
    var bugStat = GetBugStat();

    if(bugType != "" && bugType != undefined){

    }
    if(bugStat != "" && bugStat != undefined){
        $("#message-bug-stat").text(bugStat);
    }
}