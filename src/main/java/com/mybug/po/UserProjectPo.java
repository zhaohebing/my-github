package com.mybug.po;

import javax.persistence.*;
import java.util.Date;

/**
 * 用户与项目关系表
 * Created by TienChyi on 2017/12/22.
 */
@Entity
@Table(name = "user_project")
public class UserProjectPo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Integer Id;
    @Column(nullable = false)
    String projectName; //项目名称
    @Column(nullable = false)
    Integer projectId;  //项目id
    Integer userId;     //用户id
    Date userAddTime;   //添加用户时间

    @Override
    public String toString() {
        return "UserProjectPo{" +
                "Id=" + Id +
                ", projectName='" + projectName + '\'' +
                ", projectId=" + projectId +
                ", userId=" + userId +
                ", userAddTime=" + userAddTime +
                '}';
    }

    public Integer getId() {
        return Id;
    }

    public void setId(Integer id) {
        Id = id;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public Integer getProjectId() {
        return projectId;
    }

    public void setProjectId(Integer projectId) {
        this.projectId = projectId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Date getUserAddTime() {
        return userAddTime;
    }

    public void setUserAddTime(Date userAddTime) {
        this.userAddTime = userAddTime;
    }
}
