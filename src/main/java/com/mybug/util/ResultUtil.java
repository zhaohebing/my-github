package com.mybug.util;

import com.mybug.bo.result.ResultBo;

/**
 * 返回工具类
 * Created by TienChyi on 2017/12/22.
 */
public class ResultUtil {
    public static ResultBo success(Object object) {
        ResultBo resultBo = new ResultBo();
        resultBo.setData(object);
        resultBo.setMessage("操作成功");
        resultBo.setCodeId("0000");
        return resultBo;
    }

    public static ResultBo success() {
        return success(null);
    }

    public static ResultBo faild(String code, String errMessage) {
        ResultBo resultBo = new ResultBo();
        resultBo.setData(null);
        resultBo.setMessage(errMessage);
        resultBo.setCodeId(code);
        return resultBo;
    }
}
