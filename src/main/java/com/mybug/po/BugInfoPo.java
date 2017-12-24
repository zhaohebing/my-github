package com.mybug.po;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

/**
 * Created by Administrator on 2017/12/22.
 */
@Entity
@Table(name = "buginfo")
public class BugInfoPo {
    @Id @Column(nullable = false)
    String Id;
    @Column(length = 255)
    String bugDesc;         //bug描述
    Integer bugStatus = 0;  //bug状态0：创建，1：未分配，2：已分配，3：解决中，4：结束，5：重启，6：失败
    @Column(length = 255)
    String bugImages;       //bug图片
    @Column(nullable = false)
    Date bugCreated;        //bug创建时间
    Date bugUpdate;         //bug修改时间
    Date bugEndTiem;        //bug结束时间
    Date bugRestartTime;    //bug重启时间
    Date bugReEndTime;      //bug重启结束时间
    @Column(nullable = false)
    Integer bugPriority;    //bug优先级

    @Override
    public String toString() {
        return "BugInfoPo{" +
                "Id='" + Id + '\'' +
                ", bugDesc='" + bugDesc + '\'' +
                ", bugStatus=" + bugStatus +
                ", bugImages='" + bugImages + '\'' +
                ", bugCreated=" + bugCreated +
                ", bugUpdate=" + bugUpdate +
                ", bugEndTiem=" + bugEndTiem +
                ", bugRestartTime=" + bugRestartTime +
                ", bugReEndTime=" + bugReEndTime +
                ", bugPriority=" + bugPriority +
                '}';
    }

    public String getId() {
        return Id;
    }

    public void setId(String id) {
        Id = id;
    }

    public String getBugDesc() {
        return bugDesc;
    }

    public void setBugDesc(String bugDesc) {
        this.bugDesc = bugDesc;
    }

    public Integer getBugStatus() {
        return bugStatus;
    }

    public void setBugStatus(Integer bugStatus) {
        this.bugStatus = bugStatus;
    }

    public String getBugImages() {
        return bugImages;
    }

    public void setBugImages(String bugImages) {
        this.bugImages = bugImages;
    }

    public Date getBugCreated() {
        return bugCreated;
    }

    public void setBugCreated(Date bugCreated) {
        this.bugCreated = bugCreated;
    }

    public Date getBugUpdate() {
        return bugUpdate;
    }

    public void setBugUpdate(Date bugUpdate) {
        this.bugUpdate = bugUpdate;
    }

    public Date getBugEndTiem() {
        return bugEndTiem;
    }

    public void setBugEndTiem(Date bugEndTiem) {
        this.bugEndTiem = bugEndTiem;
    }

    public Date getBugRestartTime() {
        return bugRestartTime;
    }

    public void setBugRestartTime(Date bugRestartTime) {
        this.bugRestartTime = bugRestartTime;
    }

    public Date getBugReEndTime() {
        return bugReEndTime;
    }

    public void setBugReEndTime(Date bugReEndTime) {
        this.bugReEndTime = bugReEndTime;
    }

    public Integer getBugPriority() {
        return bugPriority;
    }

    public void setBugPriority(Integer bugPriority) {
        this.bugPriority = bugPriority;
    }
}
