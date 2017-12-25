package com.mybug.bo;

import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 * Created by nan on 2017/12/21.
 */
public class ReqBo {

    private List<MultipartFile> files;
    String test;
    String userName;    //用户名
    String userPwd;     //用户密码

    @Override
    public String toString() {
        return "ReqBo{" +
                "files=" + files +
                ", test='" + test + '\'' +
                ", userName='" + userName + '\'' +
                ", userPwd='" + userPwd + '\'' +
                '}';
    }

    public List<MultipartFile> getFiles() {
        return files;
    }

    public void setFiles(List<MultipartFile> files) {
        this.files = files;
    }

    public String getTest() {
        return test;
    }

    public void setTest(String test) {
        this.test = test;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserPwd() {
        return userPwd;
    }

    public void setUserPwd(String userPwd) {
        this.userPwd = userPwd;
    }
}