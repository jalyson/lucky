package com.lucky.service;

import com.lucky.bean.Activity;

/**
 * @Description: 活动service组件
 * @Author: yuyi.liu
 * @Date: 2019/7/22 14:41
 */
public interface ActivityService {

    /**
     *  保存
     * @param activity 活动
     * @return true:save success,false:save fail
     */
    boolean save(Activity activity);

}
