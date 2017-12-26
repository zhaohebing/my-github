package com.mybug.service.impl;

import com.mybug.bo.ReqBo;
import com.mybug.bo.ReqUserBugBo;
import com.mybug.bo.result.ResultBo;
import com.mybug.po.UserBugPo;
import com.mybug.po.UserInfoPo;
import com.mybug.po.UserProjectPo;
import com.mybug.repository.UserBugRepository;
import com.mybug.repository.UserInfoRepository;
import com.mybug.repository.UserProjectRepository;
import com.mybug.service.UserService;
import com.mybug.util.ResultUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

/**
 * Created by TienChyi on 2017/12/22.
 */


@Service
public class UserServiceImpl implements UserService {

    private static final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

    @Autowired
    private UserInfoRepository userInfoRepository;
    @Autowired
    private UserProjectRepository userProjectRepository;
    @Autowired
    private UserBugRepository userBugRepository;

    /**
     * 登录服务
     * @param reqBo
     * @return
     */
    @Override
    public ResultBo userLogin(ReqBo reqBo) {
        UserInfoPo user = userInfoRepository.findByUserName(reqBo.getUserName());
        logger.info("查到的用户信息：" + user.toString());
        //判断用户存不存在
        if (user == null) {
            return ResultUtil.faild("1001", "用户不存在");
        }
        //判断密码是否匹配
        if (reqBo.getUserPwd().equals(user.getUserPwd())) {
            //返回Map
            HashMap<Object, Object> userMap = new HashMap<>();
            HashMap<Object, Object> projectMap = new HashMap<>();
            //查找用户所属项目List
            List<UserProjectPo> projectList = userProjectRepository.findByUserId(user.getId());
            for (UserProjectPo userProject : projectList){
                projectMap.put(userProject.getProjectId(),userProject.getProjectName());
            }
            userMap.put("userType", user.getUserType());
            userMap.put("userId",user.getId());
            userMap.put("nickName",user.getNickName());
            userMap.put("userProject",projectMap);
            return ResultUtil.success(userMap);
        } else {
            logger.info("密码不匹配");
            return ResultUtil.faild("1002", "密码错误");
        }
    }

    /**
     * 查询项目下的用户的bug
     * @param reqUserBugBo
     * @return
     */
    @Override
    public ResultBo userBug(ReqUserBugBo reqUserBugBo) {
        if (isLogin(reqUserBugBo.getUserId())){
        List<UserBugPo> userBugList = userBugRepository.findByUserIdAndProjectId(reqUserBugBo.getUserId()
                , reqUserBugBo.getProjectId());
        return ResultUtil.success(userBugList);
        } else{
            return ResultUtil.faild("1003","用户未登录");
        }
    }

    @Override
    public ResultBo allUserInProject(ReqUserBugBo reqUserBugBo) {
        userProjectRepository.findByUserIdAndProjectId(reqUserBugBo.getUserId()
                ,reqUserBugBo.getProjectId());
        return null;
    }


    /**
     * 判断登录
     * @param userId
     * @return
     */
    public boolean isLogin(Integer userId){
        UserInfoPo user = userInfoRepository.findOne(userId);
        if (user == null){
            return false;
        }
        return true;
    }
}
