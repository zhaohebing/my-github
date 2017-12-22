package com.mybug.po;

import javax.persistence.*;
import java.util.Date;

/**
 * 用户与项目关系表
 * Created by Administrator on 2017/12/22.
 */
@Entity
@Table(name = "user_project")
public class UserProject {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Integer Id;
    @Column(nullable = false)
    String projectName;
    @Column(nullable = false)
    Integer projectId;
    Integer userId;
    Date userAddTime;
}
