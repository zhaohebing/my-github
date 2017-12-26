package com.mybug.repository;

import com.mybug.po.UserProjectPo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by TienChyi on 2017/12/25.
 */
@Repository
public interface UserProjectRepository extends JpaRepository<UserProjectPo,Integer> {
    List<UserProjectPo> findByUserId(Integer userId);
    List<UserProjectPo> findByUserIdAndProjectId(Integer userId, Integer projectId);
}
