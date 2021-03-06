package com.mybug.service;

import com.mybug.bo.ReqBo;
import com.mybug.bo.ReqUserBugBo;
import com.mybug.bo.result.ResultBo;

/**
 * Created by TienChyi on 2017/12/22.
 */
public interface UserService {
    //测试
    //UserInfoPo userSave(UserInfoPo userInfoPo);
    //登录
    ResultBo userLogin(ReqBo reqBo);
    //查询所属bug
    ResultBo userBug(ReqUserBugBo reqUserBugBo);
    //查询项目下所有用户
    ResultBo allUserInProject(ReqUserBugBo reqUserBugBo);
}
