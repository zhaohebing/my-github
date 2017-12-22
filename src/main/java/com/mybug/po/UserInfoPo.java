package com.mybug.po;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Created by TienChyi on 2017/12/22.
 */
@Entity
@Table(name = "user_info")
public class UserInfoPo {
    @javax.persistence.Id
    Integer Id;
    @Column(length = 45)
    String userName;
    @Column(length = 45)
    String userPwd;
    @Column(length = 45)
    String nickName;
    @Column(length = 255)
    String userToken;
    Integer userType;

    @Override
    public String toString() {
        return "UserInfoPo{" +
                "Id=" + Id +
                ", userName='" + userName + '\'' +
                ", userPwd='" + userPwd + '\'' +
                ", nickName='" + nickName + '\'' +
                ", userToken='" + userToken + '\'' +
                ", userType=" + userType +
                '}';
    }

    public Integer getId() {
        return Id;
    }

    public void setId(Integer id) {
        Id = id;
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

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public String getUserToken() {
        return userToken;
    }

    public void setUserToken(String userToken) {
        this.userToken = userToken;
    }

    public Integer getUserType() {
        return userType;
    }

    public void setUserType(Integer userType) {
        this.userType = userType;
    }
}
