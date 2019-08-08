package com.lucky.service.impl;

import com.lucky.bean.Activity;
import com.lucky.dao.ActivityDao;
import com.lucky.service.ActivityService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @Description: TODO
 * @Author: yuyi.liu
 * @Date: 2019/7/22 14:43
 */
@Service
public class ActivityServiceImpl implements ActivityService {
    /** logger */
    private static final Logger LOGGER = LoggerFactory.getLogger(ActivityServiceImpl.class);

    /**
     * 活动Dao组件
     */
    @Autowired
    private ActivityDao activityDao;

    @Override
    public boolean save(Activity activity) {

        //LOGGER.debug(activity.toString());
        // return activityDao.save(activity);
        boolean save = activityDao.save(activity);
        return save;
    }
}
