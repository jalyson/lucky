package com.lucky.dao.impl;

import com.lucky.bean.Activity;
import com.lucky.dao.ActivityDao;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

/**
 * @Description: 活动实现
 * @Author: yuyi.liu
 * @Date: 2019/7/22 14:44
 */
@Repository
public class ActivityDaoImpl implements ActivityDao {
    /** logger */
    private static final Logger LOGGER = LoggerFactory.getLogger(ActivityDaoImpl.class);

    @Override
    public boolean save(Activity activity) {
        LOGGER.info("持久层保存成功！");
        return true;
    }
}
