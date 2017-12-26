package com.mybug.service.impl;

import com.mybug.bo.ReqAddBugBo;
import com.mybug.bo.result.ResultBo;
import com.mybug.po.BugInfoPo;
import com.mybug.po.UserBugPo;
import com.mybug.repository.BugRepository;
import com.mybug.repository.UserBugRepository;
import com.mybug.service.BugService;
import com.mybug.util.IdUtil;
import com.mybug.util.ResultUtil;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Date;

/**
 * Created by Administrator on 2017/12/25 0025.
 */
@Service
public class BugServiceImpl implements BugService {

    @Autowired
    private BugRepository bugRepository;

    @Autowired
    private UserBugRepository userBugRepository;

    BugInfoPo bugInfoPo = new BugInfoPo();
    UserBugPo userBugPo = new UserBugPo();
    IdUtil idUtil = new IdUtil();
    /**
     * 新增BUG
     */
    @Override
    @Transactional
    public ResultBo bugSave(ReqAddBugBo reqAddBugBo) {
        long id = idUtil.genItemId();
        try {
            BeanUtils.copyProperties(reqAddBugBo, bugInfoPo);
            BeanUtils.copyProperties(reqAddBugBo, userBugPo);

            // 插入Bug表的ID和时间
            bugInfoPo.setId(id);
            bugInfoPo.setBugCreated(new Date());
            BugInfoPo bugReuslt = bugRepository.save(bugInfoPo);
            System.out.println(bugReuslt);
            long bugId = idUtil.genItemId();
            userBugPo.setBugCreaterId((int)bugId);
            Integer bugCreaterId = reqAddBugBo.getBugCreaterId();
            userBugPo.setUserId(bugCreaterId);
            userBugPo.setBugId(id);
            userBugRepository.save(userBugPo);
        } catch (Exception e) {
            e.printStackTrace();
            return ResultUtil.faild("10001", "新增失败");
        }
        return ResultUtil.success();
    }
}
