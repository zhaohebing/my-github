package com.mybug.controller;

import com.mybug.bo.ReqBo;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;

/**
 * Created by nan on 2017/12/21.
 */
@RestController
public class PublicController {

    @RequestMapping(value = "/uploadimg" ,method = RequestMethod.POST)
    @ResponseBody
    String uploadImg(ReqBo request){
        BufferedOutputStream stream = null;

        File path = null;
        try {
            path = new File(ResourceUtils.getURL("classpath:").getPath());
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        for (MultipartFile multipartFile:request.getFiles()){
            System.out.println(multipartFile.getOriginalFilename());
            if (!multipartFile.isEmpty()){
                try {
                    String dest = "static/images/"+multipartFile.getOriginalFilename();
                    File upload = new File(path.getAbsolutePath(),dest);
                    byte[] bytes = multipartFile.getBytes();
                    multipartFile.transferTo(upload);
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        System.out.println(request.getTest());
        return "success";
    }
}