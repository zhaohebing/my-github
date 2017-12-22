package com.mybug.po;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

/**
 * Created by TienChyi on 2017/12/22.
 */
@Entity
@Table(name = "bug_log")
public class BugLogPo {
    @javax.persistence.Id
    @Column(nullable = false)
    String Id;
    String bugId;
    String bugDesc;
    Integer bugStatus;
    String bugImages;
    Date bugCreated;
    Date bugUpdate;
    Date bugEndTime;
    Date bugRestartTime;
    Date bugReEndTime;
    Integer bugCreaterId;
    Integer bugLeaderId;
    Integer bugSolverId;
    Integer bugPriority;
    @Column(nullable = false)
    Date bugOperatingTime;

    @Override
    public String toString() {
        return "BugLogPo{" +
                "Id='" + Id + '\'' +
                ", bugId='" + bugId + '\'' +
                ", bugDesc='" + bugDesc + '\'' +
                ", bugStatus=" + bugStatus +
                ", bugImages='" + bugImages + '\'' +
                ", bugCreated=" + bugCreated +
                ", bugUpdate=" + bugUpdate +
                ", bugEndTime=" + bugEndTime +
                ", bugRestartTime=" + bugRestartTime +
                ", bugReEndTime=" + bugReEndTime +
                ", bugCreaterId=" + bugCreaterId +
                ", bugLeaderId=" + bugLeaderId +
                ", bugSolverId=" + bugSolverId +
                ", bugPriority=" + bugPriority +
                ", bugOperatingTime=" + bugOperatingTime +
                '}';
    }

    public String getId() {
        return Id;
    }

    public void setId(String id) {
        Id = id;
    }

    public String getBugId() {
        return bugId;
    }

    public void setBugId(String bugId) {
        this.bugId = bugId;
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

    public Date getBugEndTime() {
        return bugEndTime;
    }

    public void setBugEndTime(Date bugEndTime) {
        this.bugEndTime = bugEndTime;
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

    public Date getBugOperatingTime() {
        return bugOperatingTime;
    }

    public void setBugOperatingTime(Date bugOperatingTime) {
        this.bugOperatingTime = bugOperatingTime;
    }
}
