package com.mybug.service.impl;

import com.mybug.po.UserInfoPo;
import com.mybug.repository.UserRepository;
import com.mybug.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by TienChyi on 2017/12/22.
 */
@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;
    @Override
    public UserInfoPo userSave() {
        //UserInfoPo userInfoPo = new UserInfoPo();
        //userInfoPo.setId(1);
        userRepository.findById(1);
        return null;
    }
}
