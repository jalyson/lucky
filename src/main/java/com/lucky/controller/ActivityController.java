package com.lucky.controller;

import com.alibaba.fastjson.JSON;
import com.lucky.bean.Activity;
import com.lucky.bean.ResData;
import com.lucky.service.ActivityService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

/**
 * @Description: 活动Controller
 * @Author: yuyi.liu
 * @Date: 2019/7/22 15:02
 */
@Controller
@RequestMapping("/acitvity")
public class ActivityController {
    /** logger */
    private static final Logger LOGGER = LoggerFactory.getLogger(ActivityController.class);

    /**
     * 活动服务组件
     */
    @Autowired
    private ActivityService activityService;

    /**
     *
     * 保存
     */
    @GetMapping("/add")
    public ModelAndView add() {
        ModelAndView modelAndView = new ModelAndView("/demo/activity");
        return modelAndView;
    }

    /**
     *
     * 保存
     * @param activity 活动form
     */
    @PostMapping("/save")
    @ResponseBody
    public ResData<Boolean> save(Activity activity) {
        //根据业务情况，使用特定日志类型
        LOGGER.debug("save params:{}", JSON.toJSONString(activity));
        ResData<Boolean> resData = new ResData<Boolean>();
        try {
            boolean save = activityService.save(activity);
            resData.setCode("success");
            resData.setMsg("保存成功!");
        } catch (Exception e) {
            //注意不要把日志吃了
            LOGGER.error("save activity fail", e);
            resData.setCode("fail");
            resData.setMsg(e.getMessage());
        }
        return resData;
    }

}
