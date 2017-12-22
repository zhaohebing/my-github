package com.mybug.bo.result;

/**
 * 通用返回Bo
 * Created by TIenChyi on 2017/12/22.
 */
public class ResultBo<T> {
    //错误码
    private String codeId;
    //错误描述
    private String message;
    //具体返回内容
    private T data;

    public ResultBo(String codeId, String message, T data) {
        this.codeId = codeId;
        this.message = message;
        this.data = data;
    }

    public ResultBo(String codeId, String message) {
        this.codeId = codeId;
        this.message = message;
    }

    public ResultBo() {
    }

    @Override
    public String toString() {
        return "ResultBo{" +
                "codeId='" + codeId + '\'' +
                ", message='" + message + '\'' +
                ", data=" + data +
                '}';
    }

    public String getCodeId() {
        return codeId;
    }

    public void setCodeId(String codeId) {
        this.codeId = codeId;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }
}
