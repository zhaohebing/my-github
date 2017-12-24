package com.mybug.po;

import javax.persistence.*;

/**
 * 用户基础表
 * Created by TienChyi on 2017/12/22.
 */
@Entity
@Table(name = "user_info")
public class UserInfoPo {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer Id;         //主键
    @Column(length = 45,nullable = false, unique = true)
    String userName;    //用户名
    @Column(length = 45,nullable = false)
    String userPwd;     //用户密码
    @Column(length = 45,nullable = false,unique = true)
    String nickName;    //用户姓名
    @Column(length = 255)
    String userToken;
    Integer userType = 0;   //0：普通用户，1：root用户

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
