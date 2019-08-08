package com.lucky.controller;

import com.lucky.bean.ResData;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Description: 活动Controller
 * @Author: yuyi.liu
 * @Date: 2019/7/22 15:02
 */
@RestController
public class IndexController {
    /** logger */
    private static final Logger LOGGER = LoggerFactory.getLogger(IndexController.class);

    /**
     *首页
     */
    /*@GetMapping
    public ResData<String> index() {
        //根据业务情况，使用特定日志类型
        LOGGER.debug("home page");
        ResData<String> resData = new ResData<String>();
        resData.setMsg("Welcome to luckuincoffee!");
        return resData;
    }*/

}
