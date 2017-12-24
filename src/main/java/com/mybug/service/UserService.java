package com.mybug.service;

import com.mybug.bo.result.ResultBo;
import com.mybug.po.UserInfoPo;

/**
 * Created by TienChyi on 2017/12/22.
 */
public interface UserService {
    //测试
    //UserInfoPo userSave(UserInfoPo userInfoPo);
    //登录
    ResultBo userLogin(UserInfoPo userInfoPo);
}
