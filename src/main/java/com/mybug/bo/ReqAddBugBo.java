package com.mybug.bo;

import java.util.Arrays;

/**
 * Created by Administrator on 2017/12/25 0025.
 */
public class ReqAddBugBo {

    private String bugTitle;       //Bug标题
    private String bugDesc;        //Bug描述
    private Integer bugCreaterId;   //Bug创建者
    private String bugPriority;    //Bug优先级
    private Integer bugSolverId;    //分配给：
    private String  bugType;      //Bug类型
    private String bugStatus;      //Bug状态

    @Override
    public String toString() {
        return "ReqAddBugBo{" +
                "bugTitle='" + bugTitle + '\'' +
                ", bugDesc='" + bugDesc + '\'' +
                ", bugCreaterId=" + bugCreaterId +
                ", bugPriority='" + bugPriority + '\'' +
                ", bugSolverId=" + bugSolverId +
                ", bugType='" + bugType + '\'' +
                ", bugStatus='" + bugStatus + '\'' +
                '}';
    }

    public String getBugTitle() {
        return bugTitle;
    }

    public void setBugTitle(String bugTitle) {
        this.bugTitle = bugTitle;
    }

    public String getBugDesc() {
        return bugDesc;
    }

    public void setBugDesc(String bugDesc) {
        this.bugDesc = bugDesc;
    }

    public Integer getBugCreaterId() {
        return bugCreaterId;
    }

    public void setBugCreaterId(Integer bugCreaterId) {
        this.bugCreaterId = bugCreaterId;
    }

    public String getBugPriority() {
        return bugPriority;
    }

    public void setBugPriority(String bugPriority) {
        this.bugPriority = bugPriority;
    }

    public Integer getBugSolverId() {
        return bugSolverId;
    }

    public void setBugSolverId(Integer bugSolverId) {
        this.bugSolverId = bugSolverId;
    }

    public String getBugType() {
        return bugType;
    }

    public void setBugType(String bugType) {
        this.bugType = bugType;
    }

    public String getBugStatus() {
        return bugStatus;
    }

    public void setBugStatus(String bugStatus) {
        this.bugStatus = bugStatus;
    }

}
