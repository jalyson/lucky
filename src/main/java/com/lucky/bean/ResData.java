package com.lucky.bean;

import java.io.Serializable;

/**
 * @Description: TODO
 * @Author: yuyi.liu
 * @Date: 2019/7/22 15:07
 */
public class ResData<T> implements Serializable {

    private String code;

    private String msg;

    private T data;

    public ResData(String code, String msg, T data) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }

    public ResData(String code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    public ResData() {
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }
}
