package com.mybug.controller;

import com.mybug.bo.ReqBo;
import com.mybug.bo.ReqUserBugBo;
import com.mybug.bo.result.ResultBo;
import com.mybug.service.UserService;
import org.apache.catalina.servlet4preview.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by TienChyi on 2017/12/22.
 */
@RestController
public class UserController {

    @Autowired
    private UserService userService;

    /**
     * 登录
     * @param reqBo
     * @param request
     * @return
     */
    @PostMapping("login")
    @ResponseBody
    public ResultBo userSave(ReqBo reqBo, HttpServletRequest request){
        return userService.userLogin(reqBo);
    }

    /**
     * 查询项目下的用户的bug
     * @param reqUserBugBo
     * @param request
     * @return
     */
    @GetMapping("userbuginproject")
    @ResponseBody
    public ResultBo userBug(ReqUserBugBo reqUserBugBo,HttpServletRequest request){
        return userService.userBug(reqUserBugBo);
    }
}
