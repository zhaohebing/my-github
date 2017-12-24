package com.mybug.po;

import javax.persistence.*;

/**
 * 用户与bug的关系表
 * Created by TienChyi on 2017/12/22.
 */
@Entity
@Table(name = "user_bug")
public class UserBugPo {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer Id;
    @Column(nullable = false)
    Integer userId;         //user表的用户id
    @Column(nullable = false)
    String bugId;           //bug表的id
    @Column(nullable = false)
    Integer bugCreaterId;   //bug创建者
    Integer bugLeaderId;    //bug管理者
    Integer bugSolverId;    //bug解决者
    Integer bugPriority;    //bug优先级
    Integer bugType;        //bug类型

    @Override
    public String toString() {
        return "UserBugPo{" +
                "Id=" + Id +
                ", userId=" + userId +
                ", bugId='" + bugId + '\'' +
                ", bugCreaterId=" + bugCreaterId +
                ", bugLeaderId=" + bugLeaderId +
                ", bugSolverId=" + bugSolverId +
                ", bugPriority=" + bugPriority +
                ", bugType=" + bugType +
                '}';
    }

    public Integer getId() {
        return Id;
    }

    public void setId(Integer id) {
        Id = id;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getBugId() {
        return bugId;
    }

    public void setBugId(String bugId) {
        this.bugId = bugId;
    }

    public Integer getBugCreaterId() {
        return bugCreaterId;
    }

    public void setBugCreaterId(Integer bugCreaterId) {
        this.bugCreaterId = bugCreaterId;
    }

    public Integer getBugLeaderId() {
        return bugLeaderId;
    }

    public void setBugLeaderId(Integer bugLeaderId) {
        this.bugLeaderId = bugLeaderId;
    }

    public Integer getBugSolverId() {
        return bugSolverId;
    }

    public void setBugSolverId(Integer bugSolverId) {
        this.bugSolverId = bugSolverId;
    }

    public Integer getBugPriority() {
        return bugPriority;
    }

    public void setBugPriority(Integer bugPriority) {
        this.bugPriority = bugPriority;
    }

    public Integer getBugType() {
        return bugType;
    }

    public void setBugType(Integer bugType) {
        this.bugType = bugType;
    }
}
