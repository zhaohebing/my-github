package com.mybug.service;

import com.mybug.bo.ReqAddBugBo;
import com.mybug.bo.result.ResultBo;

/**
 * Created by Administrator on 2017/12/25 0025.
 */
public interface BugService {

    ResultBo bugSave(ReqAddBugBo reqAddBugBo);
}
