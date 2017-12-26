package com.mybug.bo;

/**
 * Created by TienChyi on 2017/12/25.
 */
public class ReqUserBugBo {
    Integer projectId;
    Integer userId;

    @Override
    public String toString() {
        return "ReqUserBugBo{" +
                "projectId=" + projectId +
                ", userId=" + userId +
                '}';
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
}
