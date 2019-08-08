package com.lucky.bean;

import java.io.Serializable;
import java.util.Arrays;
import java.util.List;

/**
 * @Description: 活动表单
 * @Author: yuyi.liu
 * @Date: 2019/7/22 14:33
 */
public class Activity implements Serializable {

    /**
     * 主键Id
     */
    private Long id;
    /**
     * 活动名称
     */
    private String activityName;
    /**
     * 活动区域
     */
    private String region;

    /**
     * 活动时间
     */
    private String startTime;
    /**
     * 活动性质
     */
    private String type;
    /**
     * 活动特殊资源
     */
    private String resource;
    /**
     * 活动形式
     */
    private List[] description;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getActivityName() {
        return activityName;
    }

    public void setActivityName(String activityName) {
        this.activityName = activityName;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getResource() {
        return resource;
    }

    public void setResource(String resource) {
        this.resource = resource;
    }

    public List[] getDescription() {
        return description;
    }

    public void setDescription(List[] description) {
        this.description = description;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("{");
        sb.append("\"activityName\":\"")
          .append(activityName).append('\"');
        sb.append(",\"description\":")
          .append(Arrays.toString(description));
        sb.append(",\"id\":")
          .append(id);
        sb.append(",\"region\":\"")
          .append(region).append('\"');
        sb.append(",\"resource\":\"")
          .append(resource).append('\"');
        sb.append(",\"startTime\":\"")
          .append(startTime).append('\"');
        sb.append(",\"type\":\"")
          .append(type).append('\"');
        sb.append('}');
        return sb.toString();
    }
}
