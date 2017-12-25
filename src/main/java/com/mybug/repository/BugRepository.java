package com.mybug.repository;


import com.mybug.po.BugInfoPo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Administrator on 2017/12/25 0025.
 */
@Repository
public interface BugRepository extends JpaRepository<BugInfoPo, Integer> {
}
