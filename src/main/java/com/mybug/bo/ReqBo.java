package com.mybug.bo;

import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 * Created by nan on 2017/12/21.
 */
public class ReqBo {

    private List<MultipartFile> files;
    String test;

    @Override
    public String toString() {
        return "ReqBo{" +
                "files=" + files +
                ", test='" + test + '\'' +
                '}';
    }

    public List<MultipartFile> getFiles() {
        return files;
    }

    public void setFiles(List<MultipartFile> files) {
        this.files = files;
    }

    public String getTest() {
        return test;
    }

    public void setTest(String test) {
        this.test = test;
    }
}