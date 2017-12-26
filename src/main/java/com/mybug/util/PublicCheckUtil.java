package com.mybug.util;

import com.mybug.po.UserInfoPo;
import com.mybug.repository.UserInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Created by Administrator on 2017/12/26 0026.
 */
public class PublicCheckUtil {

    @Autowired
    private UserInfoRepository userInfoRepository;

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
