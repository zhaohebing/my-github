package com.mybug.repository;

import com.mybug.po.UserBugPo;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Administrator on 2017/12/25 0025.
 */
public interface UserBugRepository extends JpaRepository<UserBugPo, Integer> {
}
