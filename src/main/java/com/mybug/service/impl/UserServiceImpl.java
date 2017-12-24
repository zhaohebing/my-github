package com.mybug.service.impl;

import com.mybug.bo.result.ResultBo;
import com.mybug.po.UserInfoPo;
import com.mybug.repository.UserInfoRepository;
import com.mybug.service.UserService;
import com.mybug.util.ResultUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;

/**
 * Created by TienChyi on 2017/12/22.
 */


@Service
public class UserServiceImpl implements UserService {

    private static final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

    @Autowired
    private UserInfoRepository userInfoRepository;

    @Override
    public ResultBo userLogin(UserInfoPo userInfoPo) {
        UserInfoPo user = userInfoRepository.findByUserName(userInfoPo.getUserName());
        logger.info("查到的用户信息：" + user.toString());
        if (user == null) {
            return ResultUtil.faild("1001", "用户不存在");
        }
        if (userInfoPo.getUserPwd().equals(user.getUserPwd())) {
            HashMap<Object, Object> userMap = new HashMap<>();
            userMap.put("userType", user.getUserType());
            return ResultUtil.success(userMap);
        } else {
            logger.info("密码不匹配");
            return ResultUtil.faild("1002", "密码错误");
        }
    }
}
