package com.lucky.dao;

import com.lucky.bean.Activity;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * @Description: 活动Dao
 * @Author: yuyi.liu
 * @Date: 2019/7/22 14:40
 */
public interface ActivityDao {


    /**
     *  保存
     * @param activity 活动
     * @return true:save success,false:save fail
     */
    boolean save(Activity activity);
}
