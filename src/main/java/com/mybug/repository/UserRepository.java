package com.mybug.repository;

import com.mybug.po.UserInfoPo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Administrator on 2017/12/22.
 */
@Repository
public interface UserRepository extends JpaRepository<UserInfoPo,Integer>{
}
