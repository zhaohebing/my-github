package com.mybug.controller;


/**
 * Created by Administrator on 2017/12/25 0025.
 */

import com.mybug.bo.ReqAddBugBo;
import com.mybug.bo.result.ResultBo;
import com.mybug.service.impl.BugServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BugController {

    @Autowired
    private BugServiceImpl bugService;

    /**
     * 新增Bug
     */
    @PostMapping("/bugSave")
    @ResponseBody
    public ResultBo bugSave(ReqAddBugBo request) {
        return bugService.bugSave(request);
    }
}
