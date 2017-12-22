package com.mybug.po;

import javax.persistence.*;

/**
 * 用户与bug的关系表
 * Created by Administrator on 2017/12/22.
 */
@Entity
@Table(name = "user_bug")
public class UserBug {
    @javax.persistence.Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Integer Id;
    @Column(nullable = false)
    Integer userId;
    @Column(nullable = false)
    String bugId;
    @Column(nullable = false)
    String bugCreater;
    String bugLeader;
    String bugSolver;
    Integer bugPriority;

    @Override
    public String toString() {
        return "UserBug{" +
                "Id=" + Id +
                ", userId=" + userId +
                ", bugId='" + bugId + '\'' +
                ", bugCreater='" + bugCreater + '\'' +
                ", bugLeader='" + bugLeader + '\'' +
                ", bugSolver='" + bugSolver + '\'' +
                ", bugPriority=" + bugPriority +
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

    public String getBugCreater() {
        return bugCreater;
    }

    public void setBugCreater(String bugCreater) {
        this.bugCreater = bugCreater;
    }

    public String getBugLeader() {
        return bugLeader;
    }

    public void setBugLeader(String bugLeader) {
        this.bugLeader = bugLeader;
    }

    public String getBugSolver() {
        return bugSolver;
    }

    public void setBugSolver(String bugSolver) {
        this.bugSolver = bugSolver;
    }

    public Integer getBugPriority() {
        return bugPriority;
    }

    public void setBugPriority(Integer bugPriority) {
        this.bugPriority = bugPriority;
    }
}
