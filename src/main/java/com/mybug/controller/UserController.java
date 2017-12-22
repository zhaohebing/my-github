package com.mybug.controller;

import com.mybug.bo.ReqBo;
import com.mybug.bo.result.ResultBo;
import com.mybug.service.impl.UserServiceImpl;
import org.apache.catalina.servlet4preview.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by TienChyi on 2017/12/22.
 */
@RestController
public class UserController {

    @Autowired
    private UserServiceImpl userService;

    public ResultBo userSave(ReqBo reqBo, HttpServletRequest request){

        return null;
    }
}
