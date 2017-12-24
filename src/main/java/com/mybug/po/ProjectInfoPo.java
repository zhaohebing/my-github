package com.mybug.po;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by TienChyi on 2017/12/22.
 */
@Entity
@Table(name = "project_info")
public class ProjectInfoPo {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer Id;
    @Column(nullable = false, unique = true)
    String projecrName;         //项目名字
    Integer projectCreaterId;   //项目创建者id
    @Column(nullable = false)
    Date projectCreatedTime;    //项目创建时间
    Integer projectStatus;      //项目状态

    @Override
    public String toString() {
        return "ProjectInfoPo{" +
                "Id=" + Id +
                ", projecrName='" + projecrName + '\'' +
                ", projectCreaterId=" + projectCreaterId +
                ", projectCreatedTime=" + projectCreatedTime +
                ", projectStatus=" + projectStatus +
                '}';
    }

    public Integer getId() {
        return Id;
    }

    public void setId(Integer id) {
        Id = id;
    }

    public String getProjecrName() {
        return projecrName;
    }

    public void setProjecrName(String projecrName) {
        this.projecrName = projecrName;
    }

    public Integer getProjectCreaterId() {
        return projectCreaterId;
    }

    public void setProjectCreaterId(Integer projectCreaterId) {
        this.projectCreaterId = projectCreaterId;
    }

    public Date getProjectCreatedTime() {
        return projectCreatedTime;
    }

    public void setProjectCreatedTime(Date projectCreatedTime) {
        this.projectCreatedTime = projectCreatedTime;
    }

    public Integer getProjectStatus() {
        return projectStatus;
    }

    public void setProjectStatus(Integer projectStatus) {
        this.projectStatus = projectStatus;
    }
}